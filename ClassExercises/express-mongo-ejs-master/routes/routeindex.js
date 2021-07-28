const express = require('express');
const app = express();
const Task = require('../model/task');
const User = require('../model/user');
const verify = require('../middleware/verifyAccess');
var jwt = require("jsonwebtoken");

app.get('/login', function(req,res) {
	res.render('login');
});

app.post('/login', async function(req,res) {
	var email = req.body.email;
	var password = req.body.password;

	console.log(email);
	console.log(password);
	/*
	var {email, password} = req.body;
	*/

	var user = await User.findOne({email:email});
	
	if (!user) { // Si no existe el usuario
		return res.staus(404).send("El usuario no existe");
	}
	else { // Si el usuario sí existe, validar contraseña
		var valid = await user.validatePassword(password);

		if (valid) { // Si la contraseña es válida, crear un token
			var token = jwt.sign({id: user.email, permission: true}, "abcd1234", {expiresIn: "1h"});
			console.log(token);

			// Guardamos el Token en las Cookies del usuario y redireccionamos a Home
			res.cookie("token", token, {httpOnly: true});
			res.redirect("/");
		}
		else { // Si la contraseña no es válida
			console.log("Password is not valid");
			res.redirect("/login");
		}
	}

	res.send("ok");
});

app.get('/register', function(req,res) {
	res.render('register');
});

app.post('/addUser', async function(req,res) {
	var user = new User(req.body);
	user.password = user.encryptPassword(user.password);

	await user.save();
	res.redirect('/login');
});

// Nos regresaria las tareas guardadas en la BD con el método find(). Una vez obtenidas las tareas las regresamos a la pagina principal.
app.get('/', verify, async function(req,res) {

	// Tenemos disponibles los datos del Token
	console.log("El usuario es: " + req.userId);
	console.log("Permisos?: " + req.permission);

	var tasks = await Task.find({user_id: req.userId});
	console.log(tasks);
	
	res.render('index', {tasks});
});

// Ruta que nos permita agregar nuevas tareas que vienen desde un metodo post. Una vez enviada la tarea podemos redireccionar a la pagina principal con res.redirect('/')
app.post('/add', verify, async (req,res) => {
	var task = new Task(req.body);
	task.user_id = req.userId;

	/*
		// si los atributos no se llamaran igual en el index.ejs, sería así
		var desc = req.body.descripcion:
		var titulo = req.body.titulo;

		var task = new Task({
			title: titulo,
			descripcion: desc
		});

	*/

	console.log(task);
	await task.save(); // Guardando la Task en la BD

	res.redirect('/');
});

// Ruta para editar los datos. Primero necesitamos buscarlos en base a un id que ya me llega desde la ruta. Metodo de busqueda findById(). 
// Los editaremos en una pagina aparte llamada 'edit'
app.get('/edit/:id', async(req,res) => {
	var id = req.params.id;
	var task = await Task.findById(id);
	res.render('edit', {task});
})


// Ruta para efectuar la actualizacion de los datos utilizando el metodo update()
app.post('/edit/:id', async(req,res) => {
	// Los datos llegan en req.body
	var id = req.params.id;
	await Task.updateOne({_id: id}, req.body);
	res.redirect('/');
})

// Esta ruta permita modificar el estatus de una tarea por medio de su propiedad status. 
// Necesitamos buscar el task en la BD por medio de findById, una vez encontrado el registro hay que modificar el status y guardar con save(). 
app.get('/turn/:id', async (req, res, next) => {
	var id = req.params.id;
	var task = await Task.findById(id);

	task.status = !task.status;
	await task.save();
	res.redirect('/');
});

// Ruta que nos permita eliminar tareas con el método "deleteOne"
app.get('/delete/:id', async (req,res) => {
	var id = req.params.id;
	await Task.remove({_id: id});
	res.redirect('/');
})

app.get('/logoff', async (req,res) => {
	res.clearCookie("token");
	res.redirect('/');
})

module.exports = app;
var jwt = require("jsonwebtoken");

user = {
    isAdmin: true,
    email: 'user@email.com',
    user_level: 2
}

var SECRET = 'abcd1234';

// Usuario ya se registró. El usuario hace Login correctamente (Usuario válido)
// Le asignamos un token
const token = jwt.sign(user, SECRET, {expiresIn: '1h'});

console.log(token);

// El usuario regresa al sistema o efectúa una operación que valida el token
// Validamos token
var tokenGenerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwidXNlcl9sZXZlbCI6MiwiaWF0IjoxNjI3NDI2NzE0LCJleHAiOjE2Mjc0MzAzMTR9.eGa9HGpcZp5k2G2bh94OfVHYKhe0wzZfxSNTwFijo-c';
jwt.verify(tokenGenerado, SECRET, (err, data) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log(data);
	}
})
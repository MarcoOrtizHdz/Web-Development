// # 1 (Fijo)  
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

// # 2
var UserSchema = Schema ({
	email: String,
    password: String
})

// Funciones de métodos de Users
UserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, 10);
}

UserSchema.methods.validatePassword = function(userPassword) {
    return bcrypt.compare(userPassword, this.password);
}

// # 3
module.exports = mongoose.model('users', UserSchema);
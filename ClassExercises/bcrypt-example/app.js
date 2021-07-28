var bcrypt = require("bcrypt");

var plainPassword = 'test1234';

const rounds = 10;

console.time("hashTime");
const hash = bcrypt.hashSync(plainPassword, rounds);
console.timeEnd("hashTime");

console.log(hash);

var hashTemp = '$2b$10$DNmwLjOtuQzTb0JJ4Q7O9.wrdtZn.WTpZ0k937TrSKuz4uoI0dDxO';
var match = bcrypt.compareSync(plainPassword, '$2b$10$DNmwLjOtuQzTb0JJ4Q7O9.wrdtZn.WTpZ0k937TrSKuz4uoI0dDxO');

console.log(match);
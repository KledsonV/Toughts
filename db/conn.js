const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '03060702Vini@', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    console.log(`Conectou ao banco com sucesso!`);

}catch (err){
    console.log(`Erro no db: ${err}`);
}

module.exports = sequelize
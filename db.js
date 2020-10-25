const Sequelize = require('sequelize')

const database = new Sequelize({
    dialect:'sqlite',
    storage: __dirname+'/database.db',
    transactionType: 'IMMEDIATE'
})

const Queries = database.define('queries',{
    name:{
        type:Sequelize.STRING(30),
        allowNull:false
    },
    email:{
        type:Sequelize.STRING(40),
        allowNull:false
    },
    phoneno:{
        type:Sequelize.STRING(30),
        allowNull:false
    },
    query:{
        type:Sequelize.STRING(1000),
        allowNull:false
    }
})

database.sync().then(()=>{
    console.log('DataBase Structure Ready!!')
})

module.exports={
    Queries
}
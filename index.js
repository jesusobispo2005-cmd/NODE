import db from 'mongoose';

db.connect('mongodb://jesusobispo2005_db_user:IYBe5rsErWcSuNMG@ac-yhhifoq-shard-00-00.z3vse1u.mongodb.net:27017,ac-yhhifoq-shard-00-01.z3vse1u.mongodb.net:27017,ac-yhhifoq-shard-00-02.z3vse1u.mongodb.net:27017/marzo2026?ssl=true&replicaSet=atlas-ai6ulp-shard-0&authSource=admin&appName=Cluster0')
.then(() => {
    console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});

const Schema = db.Schema;


const users = new Schema({
  nombre: String,
  apellido: String,
  Email: String,
  date: Date
});

const userModel = db.model('usuarios', users, 'users');

console.log(await userModel.find({}));
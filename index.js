import mongoose from 'mongoose';

mongoose.connect('mongodb://jesusobispo2005_db_user:IYBe5rsErWcSuNMG@ac-yhhifoq-shard-00-00.z3vse1u.mongodb.net:27017,ac-yhhifoq-shard-00-01.z3vse1u.mongodb.net:27017,ac-yhhifoq-shard-00-02.z3vse1u.mongodb.net:27017/?ssl=true&replicaSet=atlas-ai6ulp-shard-0&authSource=admin&appName=Cluster0')
.then(() => console.log('✅ Conectado'))
.catch(err => console.log('❌ Error:', err));

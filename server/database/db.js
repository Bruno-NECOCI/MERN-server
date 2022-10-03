import mongoose from "mongoose"

const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-lc9youc-shard-00-00.xqcl4ig.mongodb.net:27017,ac-lc9youc-shard-00-01.xqcl4ig.mongodb.net:27017,ac-lc9youc-shard-00-02.xqcl4ig.mongodb.net:27017/Crud-app?ssl=true&replicaSet=atlas-108dum-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the datatbase ', error);
    }
}

export default Connection;
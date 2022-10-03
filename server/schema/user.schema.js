import mongoose from 'mongoose'
import autoIcrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

autoIcrement.initialize(mongoose.connection)
userSchema.plugin(autoIcrement.plugin, 'user')

const user = mongoose.model('user', userSchema)

export default user;
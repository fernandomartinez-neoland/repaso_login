import { db } from '../config/db.config.js'
export function UserModel() {
    const Schema = db.Schema;
    const UserSchema = new Schema({
        correo: {
            required: true,
            unique: true,
            type: String,
        },
        nombre: String,
        direccion: String,
        password:String
    });

    const UserModel= db.models.UserModel|| db.model('UserModel', UserSchema, 'UserModel')



    return UserModel
}
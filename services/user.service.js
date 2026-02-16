import { UserModel } from "../models/UserModel.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
export async function LoginService(email, password) {

    const userAcces = await UserModel().findOne({ "correo": email })
    //    si no consigue el usuario entonces retorna el error dentro del if
    if (!userAcces) {
        return {
            status: 404,
            message: "Usuario o clave incorrectos"
        }
    }

    const nombre = userAcces.nombre;
    const correo = userAcces.correo;
    const direccion = userAcces.direccion;

    const payload = {
        nombre,
        correo,
        direccion
    }

    console.log(userAcces.password)
    const passOk = await bcrypt.compare(password, userAcces.password)

    //    si la clave es incorrecta entonces retorna el error dentro del if

    if (!passOk) {
        return {
            status: 404,
            message: "Usuario o clave incorrectos"
        }
    }

    const token = jwt.sign(payload, process.env.TOKEN_KEY, {expiresIn:'1m'})

    return {
        status: 200,
        message: {
            user:payload,
            token
        }
    }
}


export function validateTokenService(token){
    // console.log(token)
    const validtedToken= jwt.verify(token, process.env.TOKEN_KEY)
    return validtedToken.message
}
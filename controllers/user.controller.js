import { LoginService, validateTokenService } from "../services/user.service.js"

export async function LoginController(req, res) {
    const email=req.body.email;
    const password= req.body.password
    // console.log(LoginService(email, password))

    const response=await LoginService(email, password)
    res.status(response.status).json({message: response.message})
}


export function validateTokenController( req, res){

console.log(validateTokenService(req.body.token))
res.send("ok")
}
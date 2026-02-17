<<<<<<< HEAD
import { LoginService } from "../services/user.service.js"

export async function LoginController(req, res) {
    const email = req.body.email;
    const password = req.body.password
    // console.log(LoginService(email, password))

    const response = await LoginService(email, password)
    res.status(response.status).json({ message: response.message })
=======
import {
  LoginService,
  validateTokenService,
  RegisterService,
} from "../services/user.service.js";

export async function LoginController(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await LoginService(email, password);
  res.status(response.status).json({ message: response.message });
>>>>>>> 0cf965408d41899ef67dbdbe927a64404d38cb59
}

export async function RegisterController(req, res) {
  
const response=await RegisterService(req.body);
console.log(response)
  res.status(response.status).json({
    success: true,
    message: response.message,
  });
}

<<<<<<< HEAD
=======
export function validateTokenController(req, res) {
  console.log(validateTokenService(req.body.token));
  res.send("ok");
}
>>>>>>> 0cf965408d41899ef67dbdbe927a64404d38cb59

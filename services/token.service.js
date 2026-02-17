import  jwt  from "jsonwebtoken"
export function validateTokenService(token){
    // console.log(token)
    const validtedToken= jwt.verify(token, process.env.TOKEN_KEY)
    return validtedToken
}


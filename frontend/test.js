const speakeasy = require("speakeasy");

console.log(secret = speakeasy.generateSecret({ length: 40 }))   
console.log(secret)
console.log(speakeasy.totp({
    secret: secret.base32,
    encoding: "base32",
}))
console.log(speakeasy.totp.verify({
    secret : secret.base32,
    encoding: "base32",
    token: speakeasy.totp({
        secret: secret.base32,
        encoding: "base32",
    }),
    window: 0
}))
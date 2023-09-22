# facebook-login
A package for Facebook Login

 ## Getting Started
- `npm i facebook-login-js` or `pnpm i facebook-login-js`


## Usage


``` 
import { FBAuth } from "solidjs-facebook-auth/FacebookAuth"

let fb:FBAuth = new FBAuth(appId) 

//for login 
fb.login();

//for get username 
let username = await fb.getUsername()

//for get picture url 
let Url = await fb.getPitureUrl()

//for logout 
fb.logou();





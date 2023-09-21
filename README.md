# solidjs-facebook-auth
 A package for Facebook Login in SolidJS 

 ## Getting Started
- `npm i solidjs-facebook-auth` or `pnpm i solidjs-facebook-auth`


## How to use


```js
import { FBAuth } from "solidjs-facebook-auth/FacebookAuth"

let fb:FBAuth = new FBAuth(appId) 

//for login 
fb.login();

//for get username 
let username = fb.getUsername()

//for get picture url 
let Url = await fb.getPitureUrl()

//for logout 
fb.logou();





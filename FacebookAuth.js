export class FBAuth {
    appId ;
    accesToken;

    constructor(appId) {
        this.appId = appId;
        const scriptTag = document.createElement("script");
      // Set the JavaScript code as the content of the script
      scriptElement.innerText  = `
      window.fbAsyncInit = function() {
        FB.init({
          appId: '${this.appId}',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v12.0' // Use the desired version of the API
        });
      };
    
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
      `;

      // Append the script element to the document's <head> or <body>
      document.body.append(scriptTag);
    }

    login = async () => {
       let FB = window;
       try {
        await FB.FB.login((response) => {
          if (response.authResponse) {            
            this.accesToken = response.authResponse.accessToken;            
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        });
       }
       catch {        
       }
    }

    getUsername = async () => {
      const response = await fetch(`https://graph.facebook.com/me?fields=id,name&access_token=${this.accesToken}`);
      const data = await response.json();
      const userName = await data.name;
      return userName;
    }
    getPitureUrl = async () => {
        const response = await fetch(`https://graph.facebook.com/me?fields=id,name,picture&access_token=${this.accesToken}`);
        const data = await response.json();
        const userName = await data.name;
        return userName;
    }
    logout = async () => {
        let FB = window;
        FB.FB.logout((response) => {
            console.log("user is now logged out");
            
          });
    }


}
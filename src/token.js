window.onload = () => { document.body.innerHTML += `<p>TOKEN PAGE</p> <p>origin: ${window.location.origin}</p> <p>YaSendSuggestToken: ${typeof YaSendSuggestToken}</p>`;
YaSendSuggestToken("https://oauth-master-class-src.vercel.app"); };

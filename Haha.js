alert("hey")
 //--------------------------------------------------START OF SETUP---------------------------------------------------------------
function loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.head.appendChild(script);
            });
        }
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.0.0/jsencrypt.min.js")
            .then(() => {
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4') .then(FingerprintJS => FingerprintJS.load())

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}



    
              
//--------------------------------------------------CONNECTION VERIFICATION SYSTEM----------------------------------------------------

sessionStorage.setItem("portal", "NULL = true");
sessionStorage.setItem("hats", "NUII = false");
              

//--------------------------------------------------END OF CONNECTION VERIFICATION SYSTEM----------------------------------------------------




//-------------- Force Allow Popups --------------
function AP(){
var test = window.open('', '_blank', 'width=10,height=10');
while(test==null){
  if(allow==null){
  alert("allow popups then click 'ok'")
  var test = window.open('', '_blank', 'width=10,height=10');
  }
}
if(test!=null){
  var allow = true
test.close()
}
}
              
AP()
//setInterval(AP, 5000);
//----------- end of allow popups --------------
//--------------------------------------------------END OF SETUP-----------------------------------------------------------------


    

    
//--------------------------------------------------SETTINGS-----------------------------------------------------------------

const SET = {
      Kill: false, // Nuke
      Shutdown: false, //Regular matienence shutdown
      Inject: '' // !!!!!!!!!!!!!!!!!!!!!!!!!!!! Need to inplement/add !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };



const WL = {
  Kurisu: {
    BL: false,
    id: "a86e2ea9aa7329e539ed0e0836cddcc8",
    PubKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFjSY0vN9BVPUVk0zLQcJTYHWkWf
3SDnpK7g919eOHYMOjnRYX4ksw+0Dtdta1aFMV8lXAbhdyHUtgdz1TtPoBEvgluu
Tov8rWdXwqBz1TxfD0GFCCaIdo2fJICddQB4MP4qwiWuPeWZ6jGN8YvX9TeOzWvB
E+wiFmo/RoV1NsEpAgMBAAE=
-----END PUBLIC KEY-----`
  },
  Admin: {
    BL: false,
    id: "67890",
    PubKey: `admin`
  },
  g: {
    BL: false,
    id: "24680",
    PubKey: `user1`
  },
  f: {
    BL: false,
    id: "13579",
    Pubkey: `user2`
  },
  a: {
    BL: false,
    id: "97531",
    Pubkey: ``
  }
};
//--------------------------------------------------END OF SETTINGS----------------------------------------------------------------


//-------------- Settings internals --------------  
function crashBrowser() {
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}         
var a = window.open("", '', 'location=yes,height=10,width=10,scrollbars=no,status=no');
    while(true){
a.resizeTo(getRandomInt(1000), getRandomInt(1000));
a.moveTo(getRandomInt(900), getRandomInt(900));
}
}

function crash() {  
AP()
while(KillValue==true){
  // Display a message to the user
  window.open('', '_blank', 'width=10000,height=10000').alert(
`
                                                    Ê̵̢R̸̙̀R̷̹̈O̶͇̾R̶̃ͅ ̴̯̓4̴̯́1̷͙̈́0̷̞͗

                                         ̵̜͗(̴͇̅D̵̯̏O̶͕̎ ̶̡͋Ǹ̸̗Ö̶͙́T̷͈̄ ̴͔̊C̸̭͋O̸̼͑M̶͚͌Ȩ̴̽ ̶̹͝B̷̨̍Ȧ̸̩C̶̝͛Ķ̶͑)̷͖͗
`)
  crashBrowser();
}
}
const KillValue = SET.Kill;
const ShutValue = SET.Shutdown;

if(KillValue==true){
  crash()
}
if(ShutValue==true){
  window.open('', '_blank', 'width=10000,height=10000').alert("Error 503 (Repair Shutdown initated)")
  window.location.replace("about:blank")
//-------------- End of internals --------------

}
//--------------------------------------------------VERIFICATION SYSTEM---------------------------------------------------------
        function Test(Pub, Priv) {
const encryptor = new JSEncrypt();
        encryptor.setPublicKey(Pub);

        const decryptor = new JSEncrypt();
        decryptor.setPrivateKey(Priv);
            const plainText = generateRandomString(100);
            const encrypted = encryptor.encrypt(plainText);
            const encryptedText = encrypted;
            const decrypted = decryptor.decrypt(encryptedText);
           if(decrypted==plainText){
return true
}else{
             return false
}
        }

function getPubKeyById(userId) {
  const userEntries = Object.entries(WL);
  for (const [key, user] of userEntries) {
    if (user.id === userId) {
      return user.PubKey;
    }
  }
  return null;
}
function check(userId) {
  const userEntries = Object.entries(WL);
  for (const [key, user] of userEntries) {
    if (user.id === userId) {
      return user.BL;
    }
  }
  return null;
}
fpPromise.then(fp => fp.get()).then(result => {
  const visitorId = result.visitorId;
  const userIds = Object.values(WL);
  const matchingUser = userIds.find(user => user.id === visitorId);
  const NOBL = check(visitorId)
  if(NOBL!==true){
  if (matchingUser) {
    if(Test(getPubKeyById(visitorId),prompt("Enter private key"))){
    alert("Verified")
    }else{
      window.close()
window.location.replace("about:blank")
     window.open('', '_blank', 'width=10000,height=10000').alert("Error 403-A") //Not matching Key
    }
  } else {
window.close()
window.location.replace("about:blank")
    window.open('', '_blank', 'width=10000,height=10000').alert("Error 403-B ("+visitorId+")") //Not authorized
  }
}else{
window.close()
window.location.replace("about:blank")
window.open('', '_blank', 'width=10000,height=10000').alert("Error 403-C (Account disabled)")
}
});
//--------------------------------------------------END OF VERIFICATION SYSTEM----------------------------------------------------


    

              
//--------------------------------------------------CODE INJECTION SYSTEM----------------------------------------------------
              //Add stuff here
//--------------------------------------------------END OF CODE INJECTION SYSTEM----------------------------------------------------
            })
            .catch(err => {
                alert(err);
                alert("Error loading required scripts.");
            });

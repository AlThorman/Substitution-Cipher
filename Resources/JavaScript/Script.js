      var keyPhrase, alphabetWithKey, plainText, cipherText;
        
 

        function alphabet() 
        {
        
        var alphabets = new Array ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
            'W', 'X', 'Y', 'Z');
            
            return alphabets;

        }
            
         function getSetOfAlphabetWithKey (keyPhrase, alphabet)
        {
            var usedAlphabet = new Array (keyPhrase.length);
            var charSet = new Array(26);
            var i=0, keyIndex=0;
            
            while (i < charSet.length)
            {
                if (i < keyPhrase.length)
                {
                    if (isDistinct(usedAlphabet, keyPhrase[i]))
                    {
                        charSet[keyIndex] = keyPhrase[i];
                        keyIndex++;
                    } 
                    usedAlphabet[i] = keyPhrase[i];
                } else 
                    {
                        for (i = 0; i < alphabet.length; i++) {
                    if (isDistinct(usedAlphabet, alphabet[i])) {
                        charSet[keyIndex] = alphabet[i];
                        keyIndex++;
                    }
                    if (keyIndex >= alphabet.length) 
                        i = alphabet.length;
                    
                }
            }

            i++;
        }

        return charSet;

                    }
                    
        function isDistinct (alp , a)
        {
              for (var i = 0; i < alp.length; i++) {
            if (alp[i] == a) {
                return false;
            }
        }
        return true;

        }

var button = document.getElementsByTagName("button");

        button[0].addEventListener("click",function()
        {
            
                    var p = document.querySelectorAll("textarea");
        p[1].innerHTML = "";
            
        keyPhrase = document.form.keyPhrase.value;
        keyPhrase = keyPhrase.toUpperCase();
        keyPhrase  = Array.from(keyPhrase);
            
        alphabetWithKey = getSetOfAlphabetWithKey(keyPhrase, alphabet());
            console.log(alphabetWithKey);
        plainText = document.form.input.value;
        plainText = plainText.toUpperCase();
        plainText  = Array.from(plainText);
        console.log(plainText);  
        encrypt(alphabetWithKey,plainText); 
            
            function encrypt (array , str)
            {
                var c;
                
                for (var i=0; i < str.length; i++)
                {
                    c = str[i];
                    
                    for (var j=0; j < alphabet().length; j++) {
                        
                        if (c == alphabet()[j])
                        {
          var p = document.querySelectorAll("textarea");
        p[1].append(array[j]);
        
                        } else if (c == " "){
                            p[1].append(" ");
                            break;
                        }
                        
                       }
  
                }

            }
            function copy() {
  p[1].select();
  document.execCommand("copy");
}
            copy ();

             });                  

         button[1].addEventListener("click",function()
        {
                    var p = document.querySelectorAll("textarea");
        p[3].innerHTML = "";
            
        keyPhrase = document.form2.keyPhrase.value;
        keyPhrase = keyPhrase.toUpperCase();
        keyPhrase  = Array.from(keyPhrase);
            
        alphabetWithKey = getSetOfAlphabetWithKey(keyPhrase, alphabet());
            
        cipherText = document.form2.input.value;
        cipherText = cipherText.toUpperCase();
        cipherText  = Array.from(cipherText);
            
        decrypt(alphabetWithKey, cipherText); 
            
            function decrypt (array , str)
            {
                var c;
                
                for (var i=0; i < str.length; i++)
                {
                    c = str[i];
                    
                    for (var j=0; j < alphabet().length; j++) {
                        
                        if (c == array[j])
                        {
          var p = document.querySelectorAll("textarea");
        p[3].append(alphabet()[j]);
        
                        } else if (c == " "){
                            p[3].append(" ");
                            break;
                        }
                        
                       }
  
                }

            }
        
        function copy2() {
  p[3].select();
  document.execCommand("copy");
} copy2();

                               
         });
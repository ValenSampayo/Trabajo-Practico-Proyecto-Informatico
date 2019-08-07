        function convert(){
            var letras = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
            var morse = [ " / ", ". -", "- . . .", "- . - .", "- . .", ".", ". . - .", "- - .", ". . . .", ". .", ". - - -", "- . -", ". - . .",  "- -", "- .", "- - -", ". - - .", "- - . -", ". - .", ". . .", "-", ". . -", ". . . -", ". - -", "- . . -", "- . - -", "- - . .", ". - - - -", ". . - - -", ". . . - -", ". . . . -", ". . . . .", "- . . . .", "- - . . .", "- - - . .", "- - - - .", "- - - - -" ];
            var textoatraducir = document.getElementById("textToConvert").value;
            var newText = "";
            for (var i = 0; i < textoatraducir.length; i++) {
                for (var j = 0; j < 37; j++) {
                    if (textoatraducir[i].toLowerCase() == letras[j]) {
                        newText += morse[j];
                        newText += "\xa0\xa0\xa0";
                        break;
                    }
                }
            }
        document.getElementById("newText").innerHTML = newText;
        }

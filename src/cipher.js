window.cipher = {
  encode: (offset, string) => {
  //Obteniendo mensaje a encriptar:
   let mensajeEncriptado = "";
   for (let i = 0; i < string.length; i++) {
       let letra = string[i];
       if (letra.match(/[a-z,0-9, ]/i)) {
           if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
               let texto = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
               mensajeEncriptado += String.fromCharCode(texto);
           } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
               let texto = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
               mensajeEncriptado += String.fromCharCode(texto);
           } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
              let texto = (string.charCodeAt(i) - 48 + parseInt(offset)) % 26 + 48;
              mensajeEncriptado += String.fromCharCode(texto);
           }
       } else {
           mensajeEncriptado += texto;
       }
   }
   return mensajeEncriptado;
 },


  decode: (offset, string) => {
  //Obteniendo mensaje a desencriptar:
    let mensajeDesencriptado = "";
    for (let i = 0; i < string.length; i++) {
        let letra2 = string[i];
        if (letra2.match(/[a-z,0-9, ]/i)) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let texto2 = (string.charCodeAt(i) - 65 - parseInt(offset)) % 26 + 65;
                mensajeDesencriptado += String.fromCharCode(texto2);
            }else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                let texto2 = (string.charCodeAt(i) - 97 - parseInt(offset)) % 26 + 97;
                  mensajeDesencriptado += String.fromCharCode(texto2);
            }else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
                let texto2 = (string.charCodeAt(i) - 48 - parseInt(offset)) % 26 + 48;
                   mensajeDesencriptado += String.fromCharCode(texto2);
            }
        }
            else {
                mensajeDesencriptado += texto2;
            }
    }
    return mensajeDesencriptado;
  }
};

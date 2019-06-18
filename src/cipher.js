window.cipher = {
  encode: (offset, string) => {
    //Obteniendo mensaje a encriptar:
    let mensajeEncriptado = "";
    for (let i = 0; i < string.length; i++) {
      let letra = string[i];
      if (letra.match(/[a-z,0-9, ,!"#$%&'()*+,-./:;<=>?@[\]^_`]/i)) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65)
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97)
        } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
          if (parseInt(offset)===10 || parseInt(offset)===20 || parseInt(offset)===30 || parseInt(offset)===40 || parseInt(offset)===50 || parseInt(offset)===60 || parseInt(offset)===70 || parseInt(offset)===80 || parseInt(offset)===90 || parseInt(offset)===100) {
            mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 48 + (parseInt(offset)+2)) % 10 + 48);
          }
          else {
            mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 48 + parseInt(offset)) % 10 + 48);
          }
          } else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 47) {
            mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 33 + parseInt(offset)) % 15 + 33);
          } else if (string.charCodeAt(i) >= 58 && string.charCodeAt(i) <= 64) {
            mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 58 + parseInt(offset)) % 7 + 58);
          } else if (string.charCodeAt(i) >= 91 && string.charCodeAt(i) <= 96) {
            mensajeEncriptado += String.fromCharCode((string.charCodeAt(i) - 91 + parseInt(offset)) % 6 + 91);
          } else if (string.charCodeAt(i) === 32) {
            mensajeEncriptado = mensajeEncriptado + " ";
          }
      } else {
        mensajeEncriptado;
      }
    }
    return mensajeEncriptado;
  },

  decode: (offset, string) => {
    //Obteniendo mensaje a desencriptar:
    let mensajeDesencriptado = "";
    for (let i = 0; i < string.length; i++) {
      let letra2 = string[i];
      if (letra2.match(/[a-z,0-9, ,!"#$%&'()*+,-./:;<=>?@[\]^_`]/i)) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122);
        } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
          if (parseInt(offset)===10 || parseInt(offset)===20 || parseInt(offset)===30 || parseInt(offset)===40 || parseInt(offset)===50 || parseInt(offset)===60 || parseInt(offset)===70 || parseInt(offset)===80 || parseInt(offset)===90 || parseInt(offset)===100) {
            mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 57 - (parseInt(offset)+2)) % 10 + 57);
          }
          else {
            mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 57 - parseInt(offset)) % 10 + 57);
          }
        } else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 47) {
          mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 47 - parseInt(offset)) % 15 + 47);
        } else if (string.charCodeAt(i) >= 58 && string.charCodeAt(i) <= 64) {
          mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 64 - parseInt(offset)) % 7 + 64);
        } else if (string.charCodeAt(i) >= 91 && string.charCodeAt(i) <= 96) {
          mensajeDesencriptado += String.fromCharCode((string.charCodeAt(i) - 96 - parseInt(offset)) % 6 + 96);
        } else if (string.charCodeAt(i) === 32) {
          mensajeDesencriptado = mensajeDesencriptado + " ";
        }
      } else {
        mensajeDesencriptado;
      }
    }
    return mensajeDesencriptado;
  }
};

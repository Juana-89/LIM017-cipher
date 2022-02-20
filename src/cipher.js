
   const cipher = {
      encode: (offset, string) => {
      let result = "";
      for (let i = 0; i < string.length; i++) {
          let codeAscii = string.charCodeAt(i);
          if (codeAscii >= 65 && codeAscii <=90) {
            result += String.fromCharCode(((codeAscii - 65 + offset) % 26) + 65);
          } else if (codeAscii >= 97 && codeAscii <=122) {
            result += String.fromCharCode(((codeAscii - 97 + offset) % 26) + 97);

       }
      }
           //console.log(result);
            return result;
  },

      decode: (offset, string) => {
      let result = "";
      for (let i = 0; i < string.length; i++) {
          let codeAscii = string.charCodeAt(i);
          if (codeAscii >= 65 && codeAscii <=90) {
            result += String.fromCharCode(((codeAscii + 65 - offset) % 26) + 65);
           } /* else if (codeAscii >= 97 && codeAscii <=122) {
            result += String.fromCharCode(((codeAscii + 97 - offset) % 26) + 97);
     } */
     }
     console.log(result);
            return result;
    }
};
export default cipher;
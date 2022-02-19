   const cipher = {
      encode: (offset, string) => {
      let result = "";
      for (let i = 0; i < string.length; i++) {
          let codeAscii = string.charCodeAt(i);
          if (codeAscii >= 65 && codeAscii <=90) {
            result += String.fromCharCode(((codeAscii - 65 + offset) % 26) + 65);
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
        }      
     }
            return result;
}
};
export default cipher;

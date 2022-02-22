
   const cipher = {
      encode: (offset, string) => {
      let result = "";
      {
        if (typeof string !== "string" && typeof offset !== parseInt("offset")) {
        throw new TypeError ("Es necesario que escribas los parámetros válidos");
     }
     console.log (offset);
     console.log (string);
     
      for (let i = 0; i < string.length; i++) {
          let codeAscii = string.charCodeAt(i);
          if (codeAscii >= 65 && codeAscii <=90) {
            result += String.fromCharCode(((codeAscii - 65 + offset) % 26) + 65);
          }/*else if(codeAscii >= 97 && codeAscii <=122) {
            result += String.fromCharCode(((codeAscii - 97 + offset) % 26) + 97);
       }*/
      }

            }
       // console.log(result);
       return result;          
  },

      decode: (offset, string) => {
      let result = "";
      {
       if (typeof string !== "string" && typeof offset !== parseInt("offset")) {  
        throw new TypeError ("Es necesario que escribas los parámetros válidos");   
     }
     console.log (offset);
     console.log (string);
    
    /* if (typeof offset !== parseInt("offset"))  {
     
      throw new TypeError ("Es necesario que escribas un texto");
   }*/

      for (let i = 0; i < string.length; i++) {
          let codeAscii = string.charCodeAt(i);
          if (codeAscii >= 65 && codeAscii <=90) {
            result += String.fromCharCode(((codeAscii + 65 - offset) % 26) + 65);
           } /*else if (codeAscii >= 97 && codeAscii <=122) {
            result += String.fromCharCode(((codeAscii - 97 - offset) % 26) + 97);
     } */
     }
    

           // console.log(result);
            return result;
    }
      }
};
export default cipher;
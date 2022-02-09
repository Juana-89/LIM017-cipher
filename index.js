

     var n1=prompt("Bienvenida a la página del cifrado César", "Pon tu nombre aquí",);
     document.write ("<center>"+"¡Hola" +" " + n1 + "!" + "<br><br>");
     document.write( "Esta aplicación de '<u>'Cifrado César'</u>' te permitirá escribir un mensaje y de acuerdo a la elección de posición que elijas, será sustituido por otra letra del abecedario y así mandar tu mensaje codificado para que nadie más se entere de lo que tratas de decir ;)"+ "");
    
     window.addEventListener("load", loadPage1, false);
function loadPage1(){
     //ingresa mayúscula
     document.getElementById("caja").addEventListener("keyup", 
     function(){
          this.value = this.value.toUpperCase();
     }, true);

     document.getElementById("caja").addEventListener("blur", 
     function(){
         let word = this.value;
      
          if (word ==""){
               alert ("Escribe alguna palabra o frase por favor")
          this.focus
          }else {
               document.getElementById("caja2").focus 
          }
     }, true);
    // document.GetElementsById("formquestion").reset();
}
     /*function mayus(capLetter){
          capLetter.value = capLetter.value.toUpperCase(); //método
          */
         //limpia las cajitas de texto

/*function CleanForm(){  //botón limpiar
document.GetElementsById("formquestion").reset();
}
CleanForm();*/




/*import cipher from 'cipher.js';
cipher.encode();
cipher.decode();
console.log(cipher);*/
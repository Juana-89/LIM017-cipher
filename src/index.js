import cipher from './cipher.js';
    /*var n1=prompt("Bienvenida a la página del cifrado César", "Pon tu nombre aquí",);
     console.log("<center>"+ "Bienvenida a la página del cifrado César" +" " + n1 + "!" + "<br><br>");
     console.log("Esta aplicación de '<u>'Cifrado César'</u>' te permitirá escribir un mensaje y de acuerdo a la elección de posición que elijas, será sustituido por otra letra del abecedario y así mandar tu mensaje codificado para que nadie más se entere de lo que tratas de decir ;)"+ "");
    console.log(n1);*/

     window.addEventListener("load", loadPage, true);

     function loadPage(){
     document.getElementsByName('button')[1].addEventListener("click", 
     function() {
          let string = document.getElementById("caja").value; //caja donde se ingresa la palabra o frase
          let offset = parseInt(document.getElementById("caja1").value); //caja donde se ingresa números
          document.getElementById("caja2").value = cipher.encode(offset, string); // caja donde se ve los resultados del encode
     }, true);

     document.getElementsByName('button')[2].addEventListener("click", 
     function(){
          let string = document.getElementById("caja").value; //caja donde se ingresa la palabra o frase
          let offset = document.getElementById("caja1").value; //caja donde se ingresa números
          document.getElementById("caja2").value = cipher.decode(offset, string); // caja donde se ve los resultados del decode
     }, true);

     document.getElementById("caja").addEventListener("keyup", 
     function(){
          this.value = this.value.toUpperCase();
          }, true);

     document.getElementById("caja").addEventListener("blur", 
     function(){
         let word = this.value;
      
          if (word ===""){
               alert ("Escribe alguna palabra o frase por favor")
          this.autofocus

          }
     }, true);

}
     //ingresa mayúscula
     
    // document.GetElementsById("formquestion").reset();


     /*function mayus(capLetter){
          capLetter.value = capLetter.value.toUpperCase(); //método
          */
         //limpia las cajitas de texto

/*function CleanForm(){  //botón limpiar
1     document.GetElementsById("formquestion").reset();
}
CleanForm();*/

cipher.encode();
cipher.decode();
console.log(cipher);
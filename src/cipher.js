
window.addEventListener("load", loadPage, true);

function loadPage(){
   document.getElementsByName('button')[1].addEventListener("click", 
  function() {
      let string = document.getElementById("caja").value; //caja donde se ingresa la palabra o frase
      let offSet = parseInt(document.getElementById("caja1").value); //caja donde se ingresa números
      document.getElementById("caja2").value = encode(string, offSet); // caja donde se ve los resultados del encode
  }, false);

  /*document.getElementsByName('button')[2].addEventListener("click", 
  function(){
     let string = document.getElementById("caja").value; //caja donde se ingresa la palabra o frase
      let offSet = document.getElementById("caja1").value; //caja donde se ingresa números
      document.getElementById("caja2").value = decode(string, offSet); // caja donde se ve los resultados del decode
  }, false);*/

    //const cipher = {
     function encode(string, offSet) {
      
      var res = "";

        for (var i = 0; i < string.length; i++) {
          var j = string.charCodeAt(i);
          if (j >= 65 && j <=90) {
            res += String.fromCharCode(((j - 65 + offSet) % 26) + 65);
          }      
       }
    return (document.getElementById('caja2').value = res);
  }

  }
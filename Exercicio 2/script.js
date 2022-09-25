function calcular() {
  // Variáveis
  var number = document.querySelector("#number").value;
  var arrayNumber = number.split("");
  var soma = 0;

  // loop para somar os elementos no array
  for (var i = 0; i < arrayNumber.length; i++) {
    soma += parseFloat(arrayNumber[i]);
  }
  
  // define o resultado no html
  document.querySelector("#result").innerHTML = `A soma dos dígitos` + soma;
}

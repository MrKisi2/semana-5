function calcular() {
  // variáveis
  var position = document.querySelector("#position").value;
  var fibonacci = [0, 1];
  var result = "";

  // loop
  for (var i = 0; i < position - 2; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }

  // seta o resultado
  var result = fibonacci.join(", ");

  //mostra o resultado
  document.querySelector(
    "#result"
  ).innerHTML = `A sequência de Fibonacci ate a posição ${position} é ${result}`;
}

function ordenar() {
  // variáveis
  var name1 = document.querySelector("#name1").value;
  var name2 = document.querySelector("#name2").value;
  var name3 = document.querySelector("#name3").value;
  var nameArr = [name1, name2, name3];

  // ordenação do array
  var arrOrdenado = nameArr.sort();

  // resutado no html
  document.querySelector(
    "#result"
  ).innerHTML = `Os nomes em ordem alfabética ficam: ${arrOrdenado}`;
}

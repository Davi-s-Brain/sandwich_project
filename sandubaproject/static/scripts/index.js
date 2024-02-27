const listaPaes = [
  "3 Queijos",
  "Parmesão E orégano",
  "9 grãos",
  "Italiano Branco",
];
const listaQueijos = ["Cheddar", "Suíço", "Queijo Mussarela Ralada"];
const listaVegetais = [
  "Azeitonas",
  "Picles",
  "Pepinos",
  "Pimentão",
  "Alface",
  "Cebola Roxa",
  "Tomate",
  "Rúcula",
];
const listaMolhos = [
  "Cebola Agridoce",
  "Chipotle",
  "Barbecue",
  "Parmesão",
  "Maionese Temperada",
  "Mostarda E Mel",
  "Supreme",
];

const todasAsLista = listaPaes.concat(listaQueijos, listaVegetais, listaMolhos);

const remove_ingredientes = () => {
  const lista_temporaria = [...todasAsLista];
  console.log(lista_temporaria, "\n");
  const continuar = prompt("Deseja remover algum item? (S/N)");
  let itens_remover = "";
  if (continuar === "S") {
    while (continuar === "S") {
      itens_remover = prompt("Escolha 1 ingrediente para remover:");
      const contido = lista_temporaria.includes(itens_remover);
      if (contido) {
        lista_temporaria.splice(lista_temporaria.indexOf(itens_remover), 1);
      } else {
        console.log("Este item não existe na lista");
      }
      console.clear();
      console.log(lista_temporaria);
      continuar = prompt("Deseja remover mais um? (S/N)");
      if (continuar === "N") {
        break;
      }
    }
    return console.clear();
  }
  return console.clear();
}

const escolhe_pao = () => {
  var pao = listaPaes[Math.floor(Math.random() * listaPaes.length)];
  console.log(pao);
}

const escolhe_queijo = () => {
  var queijo = listaQueijos[Math.floor(Math.random() * listaQueijos.length)];
  console.log(queijo);
}

const escolhe_vegetais = () => {
  var vegetais = [];
  var seletorVegetias = prompt(
    "Deseja escolher a quantidade de vegetais? (S/N)"
  );
  if (seletorVegetias === "S") {
    var quantidadeVegetais = parseInt(
      prompt("Quantos vegetais você deseja? (1/4)")
    );
    for (var i = 0; i < quantidadeVegetais; i++) {
      var escolhido =
        listaVegetais[Math.floor(Math.random() * listaVegetais.length)];
      var index_lista = listaVegetais.indexOf(escolhido);
      vegetais.push(escolhido);
      listaVegetais.splice(index_lista, 1);
    }
  } else {
    var i = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    for (var j = 0; j < i; j++) {
      var escolhido =
        listaVegetais[Math.floor(Math.random() * listaVegetais.length)];
      var index_lista = listaVegetais.indexOf(escolhido);
      vegetais.push(escolhido);
      listaVegetais.splice(index_lista, 1);
    }
  }
  console.log(vegetais);
}

const escolhe_molhos = () => {
  var i = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
  var molho = [];
  for (var j = 0; j < i; j++) {
    var escolhido = listaMolhos[Math.floor(Math.random() * listaMolhos.length)];
    var index_lista = listaMolhos.indexOf(escolhido);
    molho.push(escolhido);
    listaMolhos.splice(index_lista, 1);
  }
  console.log(molho);
}

const monta_sanduba = () => {
  escolhe_pao();
  escolhe_queijo();
  escolhe_vegetais();
  escolhe_molhos();
}

// remove_ingredientes();
// monta_sanduba();


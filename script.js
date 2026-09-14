"use strict";
const limparFormulario = (endereco) => {
  document.getElementById("endereco").value = '';
  document.querySelector("#bairro").value = '';
  document.querySelector("#cidade").value = '';
  document.querySelector("#estado").value = '';
};

const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.querySelector("#bairro").value = endereco.bairro;
  document.querySelector("#cidade").value = endereco.localidade;
  document.querySelector("#estado").value = endereco.uf;
};
/*o ^ e o $ no final da expressão regular, significa que algo deve
começar e terminar com um numero, porém só válida de há UM número
Já o + é para identificar todos os numeros 
*/
const ehNumero = (nuemro) => /^[0-9]+$/.test(nuemro)
const cepValido = (cep) => cep.length == 8 && ehNumero(cep);
//Há duas maneiras de trabalhar com chamadas, usando  o .then ou a função assincrona
const pesquisarCep = async () => {
  limparFormulario()
  
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  //fetch(url).then(response => response.json()).then(console.log);
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("endereco").value = "CEP não encontrado";
    } else {
      preencherFormulario(endereco);
    }
  }else{
    document.getElementById("endereco").value = 'CEP incorreto'
  }
};
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

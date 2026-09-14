# 📋 Cadastros com Busca Automática de CEP

Mini projeto criado para treinar lógica de programação em JavaScript, com foco em manipulação do DOM, funções assíncronas e consumo de API pública.

## 🚀 Sobre o projeto

Formulário de cadastro que, ao digitar um CEP válido, busca automaticamente o endereço (rua, bairro, cidade e estado) usando a API pública [ViaCEP](https://viacep.com.br/) e preenche os campos correspondentes — sem precisar que o usuário digite tudo manualmente.

## ✨ Funcionalidades

- Cadastro com campos de nome, e-mail, CEP, endereço, número, bairro, cidade e estado
- Busca automática de endereço ao sair do campo CEP (evento `focusout`)
- Validação do CEP via expressão regular (verifica se possui exatamente 8 dígitos numéricos)
- Preenchimento automático dos campos de endereço com os dados retornados pela API
- Mensagens de feedback para CEP incorreto ou não encontrado
- Limpeza automática do formulário antes de cada nova busca

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+), com `async/await`, `fetch` e expressões regulares
- API pública [ViaCEP](https://viacep.com.br/)

## 🧠 Como funciona

1. O usuário digita o CEP e sai do campo (evento `focusout`).
2. O JavaScript valida se o CEP tem 8 números com uma expressão regular (`/^[0-9]+$/`).
3. Se for válido, uma requisição assíncrona é feita à API ViaCEP.
4. A resposta em JSON é usada para preencher automaticamente os campos de endereço, bairro, cidade e estado.
5. Se o CEP não existir ou for inválido, uma mensagem de erro é exibida no lugar do

https://github.com/user-attachments/assets/03baed92-f6eb-48b3-9578-97a23edb7824


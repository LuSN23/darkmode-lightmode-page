//Selecionando os elementos html e armazenando-os em variáveis
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0]; //Já que aqui retorna um HTMLCollection é preciso selecionar 1 item.
const body = document.getElementsByTagName('body')[0];

//Colocando um listener de eventos no elemento button
button.addEventListener('click', changeMode);


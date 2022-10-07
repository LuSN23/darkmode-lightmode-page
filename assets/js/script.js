//Função callback que chama as outras 2 funções para mudar entre os modos dark e light
function changeMode() {
    changeClass();
    changeText();
}

//Função para mudar as classes dos elementos html
function changeClass() {
    h1.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

//Adicionando constante que contém a classe dark-mode
const darkModeClass = 'dark-mode';
//Selecionando os elementos html e armazenando-os em variáveis
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0]; //Já que aqui retorna um HTMLCollection é preciso selecionar 1 item.
const body = document.getElementsByTagName('body')[0];

//Colocando um listener de eventos no elemento button
button.addEventListener('click', changeMode);


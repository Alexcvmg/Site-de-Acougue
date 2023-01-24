let icone = document.querySelector(`i`);
icone.addEventListener(`click`, abrirMenu);

let menu = document.querySelector(`#menuDin`);
menu.setAttribute(`class`, `verMenuAgora`);

let ul = document.createElement(`ul`);
menu.appendChild(ul);

let liInicio = document.createElement(`li`);
let aInicio = document.createElement(`a`);
aInicio.setAttribute(`href`, `#`);
aInicio.textContent = `Inicio`;
liInicio.appendChild(aInicio);
ul.appendChild(liInicio);

let liQuem = document.createElement(`li`);
let aQuem = document.createElement(`a`);
aQuem.setAttribute(`href`, `#`);
aQuem.textContent = `Quem Somos`;
liQuem.appendChild(aQuem);
ul.appendChild(liQuem);

let liOfertas = document.createElement(`li`);
let aOfertas = document.createElement(`a`);
aOfertas.setAttribute(`href`, `#ofertass`);
aOfertas.textContent = `Ofertas`;
liOfertas.appendChild(aOfertas);
ul.appendChild(liOfertas);

let liTrocas = document.createElement(`li`);
let aTrocas = document.createElement(`a`);
aTrocas.setAttribute(`href`, `#`);
aTrocas.textContent = `Troca e Devolução`;
liTrocas.appendChild(aTrocas);
ul.appendChild(liTrocas);

let liFale = document.createElement(`li`);
let aFale = document.createElement(`a`);
aFale.setAttribute(`href`, `#faleConosco`);
aFale.textContent = `Fale Conosco`;
liFale.appendChild(aFale);
ul.appendChild(liFale);

let liCategoria = document.createElement(`li`);
liCategoria.textContent = `Categorias:`;
liCategoria.style.fontWeight = `bold`;
liCategoria.style.color = `white`;
liCategoria.style.fontFamily = `Oswald`;
ul.appendChild(liCategoria);


let liBoi = document.createElement(`li`);
let aBoi = document.createElement(`a`);
aBoi.setAttribute(`href`, `index.html`);
aBoi.textContent = `Boi`;
liBoi.appendChild(aBoi);
ul.appendChild(liBoi);

let liPorco = document.createElement(`li`);
let aPorco = document.createElement(`a`);
aPorco.setAttribute(`href`, `suino.html`);
aPorco.textContent = `Porco`;
liPorco.appendChild(aPorco);
ul.appendChild(liPorco);

let liAves = document.createElement(`li`);
let aAves = document.createElement(`a`);
aAves.setAttribute(`href`, `#`);
aAves.textContent = `Aves`;
liAves.appendChild(aAves);
ul.appendChild(liAves);

let liPeixes = document.createElement(`li`);
let aPeixes = document.createElement(`a`);
aPeixes.setAttribute(`href`, `#`);
aPeixes.textContent = `Peixes`;
liPeixes.appendChild(aPeixes);
ul.appendChild(liPeixes);

function abrirMenu(){
  menu.classList.toggle(`menuMobile`);
}


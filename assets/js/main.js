// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas');



// function criaLi() {
//   const li = document.createElement('li');
//   return li;
// }

// inputTarefa.addEventListener('keypress', function(e) {
//   if (e.keyCode === 13) {
//     if (!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value);
//   }
// });

// function limpaInput() {
//   inputTarefa.value = '';
//   inputTarefa.focus();
// }

// function criaBotaoApagar(li) {
//   li.innerText += ' ';
//   const botaoApagar = document.createElement('button');
//   botaoApagar.innerText = 'Apagar';
//   // botaoApagar.classList.add('apagar');
//   botaoApagar.setAttribute('class', 'apagar');
//   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
//   li.appendChild(botaoApagar);
// }

// function criaTarefa(textoInput) {
//   const li = criaLi();
//   li.innerText = textoInput;
//   tarefas.appendChild(li);
//   limpaInput();
//   criaBotaoApagar(li);
//   salvarTarefas();
// }

// btnTarefa.addEventListener('click', function() {
//   if (!inputTarefa.value) return;
//   criaTarefa(inputTarefa.value);
// });

// document.addEventListener('click', function(e) {
//   const el = e.target;

//   if (el.classList.contains('apagar')) {
//     el.parentElement.remove();
//     salvarTarefas();
//   }
// });

// function salvarTarefas() {
//   const liTarefas = tarefas.querySelectorAll('li');
//   const listaDeTarefas = [];

//   for (let tarefa of liTarefas) {
//     let tarefaTexto = tarefa.innerText;
//     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//     listaDeTarefas.push(tarefaTexto);
//   }

//   const tarefasJSON = JSON.stringify(listaDeTarefas);
//   localStorage.setItem('tarefas', tarefasJSON);
// }

// function adicionaTarefasSalvas() {
//   const tarefas = localStorage.getItem('tarefas');
//   const listaDeTarefas = JSON.parse(tarefas);

//   for(let tarefa of listaDeTarefas) {
//     criaTarefa(tarefa);
//   }
// }
// adicionaTarefasSalvas();













































// capturar o que ta sendo escrito pelo usuario
const inputTarefa = document.querySelector('.input-tarefa');


// capturar o evento de clique
const btnTarefa = document.querySelector('.btn-tarefa')
btnTarefa.addEventListener('click',function(e){
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
  
})

inputTarefa.addEventListener('keypress', function(e){
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
      
    }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}



// dentro do eventro de clique, criar uma tag html

// criar uma funçao geradora de tag html
const ul = document.querySelector('.tarefas')

let li;

function criaLi(){
   li = document.createElement('li');
  return li
}



function criaTarefa(valor){
  const li = criaLi();
  ul.appendChild(li);
  li.innerHTML = valor
  limpaInput();
  criaBtnErase(li);
  salvarTarefas();
  
}



function criaBtnErase(li){
  const btn = document.createElement('button')
  btn.innerHTML = ''
  li.appendChild(btn);
  btn.setAttribute('class','btnApagar')
}


const btnApagar = document.querySelector('.btnApagar');

document.addEventListener('click',function(e){
  const el = e.target;

  if (el.classList.contains('btnApagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
})

function salvarTarefas(){
  const liTarefas = ul.querySelectorAll('li')
  const listaDeTarefas = [];
  
   for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
    

  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function imprimirTarefaSalva(){
  const tarefa = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefa)

  for (let tarefas of listaDeTarefas) {
    criaTarefa(tarefas)
  }

}

imprimirTarefaSalva();
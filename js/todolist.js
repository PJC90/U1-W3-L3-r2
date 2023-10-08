console.log('ciao')
const newlist = document.getElementById('to-do-list')
newlist.addEventListener('submit', function (e) {
  e.preventDefault()
  const createNewList = document.getElementById('list')

  const newOggList = {
    Lista1: createNewList.value,
  }

  console.log(newOggList)

  const nuovaAreaLista = document.createElement('div')
  nuovaAreaLista.classList.add('add-class')
  nuovaAreaLista.innerHTML = `
  <span>${newOggList.Lista1}</span>
  <button onclick="deleteList(event)">ELIMINA</button> 
  <button onclick="spuntList(event)">SPUNTA</button>
  `

  const applicoLista = document.getElementById('salva-lista')
  applicoLista.appendChild(nuovaAreaLista)
  createNewList.value = ''
})

const deleteList = function (e) {
  const clickElimina = e.target
  const alertRemove = confirm('Sicuro di eliminare?')
  if (alertRemove) {
    clickElimina.parentElement.remove()
  }
}
const spuntList = function (e) {
  const spunta = e.target
  const spuntaLista = spunta.parentElement.querySelector('span')
  spuntaLista.classList.toggle('spuntato')
}

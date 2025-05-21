import { supabase } from './supabaseClient.js'

async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) window.location.href = 'login.html'
  return user
}

const lista = document.getElementById('lista')
const input = document.getElementById('item')

async function carregarLista() {
  const { data, error } = await supabase.from('lista_compras').select('*')
  if (error) {
    console.error('Erro ao carregar lista:', error)
    return
  }

  lista.innerHTML = ''
  data.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = `${item.item} <button onclick="removerItem('${item.id}')">Remover</button>`
    lista.appendChild(li)
  })
}

window.adicionarItem = async function () {
  const user = await getUser()
  console.log('Usuário:', user)
  console.log('Item:', input.value)

  const { error } = await supabase.from('lista_compras').insert({
    item: input.value,
    adicionada_por: user.id
  })

  if (error) return alert('Erro ao adicionar: ' + error.message)

  input.value = ''
  carregarLista()
}

window.removerItem = async function (id) {
  const { error } = await supabase.from('lista_compras').delete().eq('id', id)
  if (error) return alert('Erro ao remover: ' + error.message)
  carregarLista()
}

window.logout = async function () {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}

getUser().then(carregarLista)

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
      adicionarItem()
 }
})
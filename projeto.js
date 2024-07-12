const adicionar=()=>{
  let valor= document.querySelector("#bottom").value 
  let ol=document.querySelector("ol")
  let li=document.createElement("li")
  li.innerHTML=(valor)
  ol.append(li)

  let confirmar=document.createElement("input")
  confirmar.type='checkbox'
  confirmar.className='checked'
  confirmar.onchange = () => {
    li.classList.toggle('checked', confirmar.checked)
  }
  
  let remover=document.createElement('button')
 remover.type='button'
 remover.className='button'
  remover.textContent = 'Remover'
 remover.onclick = () => {
    ol.removeChild(li)
  }
  li.append(confirmar,remover)
}

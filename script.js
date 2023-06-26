window.document.body.style.backgroundColor = '#D2B48C'
window.document.body.style.color = '#fff'
window.onload = function(){
  //  document.getElementById('btn').addEventListener('click',btn_click)
}

function btn_click(){
  //  document.getElementById('caixa').innerHTML = 'Texto alterado...'

    let pedido =  new XMLHttpRequest()
    pedido.onreadystatechange = function(){
    document.getElementById('caixa').innerHTML = this.responseText

    }
    pedido.open('GET','dados.txt',true)
    pedido.send()
}

function marcoAurelio(){
  
      let pedido =  new XMLHttpRequest()
      pedido.onreadystatechange = function(){
      document.getElementById('caixa').innerHTML = this.responseText
  
      }
      pedido.open('GET','ma.txt',true)
      pedido.send()
  }

  function seneca(){
  
    let pedido =  new XMLHttpRequest()
    pedido.onreadystatechange = function(){
    document.getElementById('caixa').innerHTML = this.responseText

    }
    pedido.open('GET','sen.txt',true)
    pedido.send()
}
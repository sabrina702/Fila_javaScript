let minhaFila  = new fila(5);

function addFila(){
    const novo = document.getElementById("novoElemento");
    if(minhaFila.enqueue(novo.value)== true){
        novo.value="";
        novo.focus();
        mostrarFila();
    }
    else 
    alert("fila cheia!");

}

function mostrarFila(){
    const filaElemento = 
        document.getElementById("listFila");
    filaElemento.textContent = minhaFila.toString();
}

function removerFila(){
    if(minhaFila.isEmpty())
        alert("Fila vazia!!");
    else{
      let retorno = minhaFila.dequeue();
      alert("Valor removido:"+retorno);
      mostrarFila();
    }
}
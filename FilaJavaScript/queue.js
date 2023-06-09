class fila{
    constructor(maxSixe){
        this.maximo = maxSixe;
        this.itens = [];
    }

    enqueue(elemento){
        if(this.itens.length === this.maximo)
            return false;
        this.itens.push(elemento);
        return true; 
    }
    dequeue(){
        let valor = this.itens.shift();
        return valor;
    }

    isEmpty(){
        return this.itens.length === 0;

    }

    toString(){
        return this.itens.toString();
    }
}
    
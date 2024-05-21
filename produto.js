function Produto(nome) {
    this.nome = nome;
}

function Bebida(nome, tipo){
    this.tipo = tipo;

    this.showProduto = function(){
        console.log(this.nome + " - " + this.tipo)
    }

    Produto.call(this, nome);
}

function SemAlcool(nome){
    Bebida.call(this, nome, "Sem álcool");
}

function ComAlcool(nome){
    Bebida.call(this, nome, "Com álcool");
}

const produto1 = new SemAlcool("Coca-Cola");
const produto2 = new ComAlcool("Skol");
const produto3 = new SemAlcool("Dolly");

produto1.showProduto();
produto2.showProduto();
produto3.showProduto();
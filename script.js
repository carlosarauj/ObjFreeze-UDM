function Triangulo(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)

}

let p1 = new Triangulo('Carlos', 'Araújo')
delete p1.nome

console.log(p1)
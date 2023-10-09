class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        };

        return (`O ${this.tipo} atacou usando ${ataque} `);
    }
}       

const mago = new hero('Denvil', 86, 'mago');
mago.atacar();
const ninja = new hero('Sasuke', 35, 'ninja');
ninja.atacar();

console.log(mago.atacar())
console.log(ninja.atacar());

export class Person {
    //Construtor
    constructor(name, birth, cpf, nameMother, nameFather, address, genre) {
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.nameMother = nameMother;
        this.nameFather = nameFather;
        this.address = address;
        this.genre = genre;
    }
    //Métodos
    createMessage() {
        return `The person named ${this.name} was created.`;
    }
    editMessage() {
        return `The person named ${this.name} was edited.`;
    }
    deleteMessage() {
        return `The person named ${this.name} was deleted.`;
    }
}

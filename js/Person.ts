export class Person {

    //Atributos
    public name: string
    public birth: Date
    public cpf: string
    public nameMother: string
    public nameFather: string
    public address: string
    public genre: string

    //Construtor
    constructor(name: string, birth: Date, cpf: string, nameMother: string, nameFather: string, address: string, genre: string) {
        this.name = name
        this.birth = birth
        this.cpf = cpf
        this.nameMother = nameMother
        this.nameFather = nameFather
        this.address = address
        this.genre = genre
    }

    //Métodos

    createMessage(): string {

        return `The person named ${this.name} was created.`
    }
    editMessage(): string {

        return `The person named ${this.name} was edited.`
    }
    deleteMessage(): string {

        return `The person named ${this.name} was deleted.`
    }


}
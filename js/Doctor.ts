import { Person } from "./Person.js"

export class Doctor extends Person{

    //Atributos
    public speciality: string
    public medicalLicense: string

    //Construtor
    constructor(name: string, birth: Date, cpf: string, nameMother: string, nameFather: string, address: string, genre: string, speciality: string, medicalLicense:string) {
        super(name, birth, cpf, nameMother, nameFather, address, genre)
        this.speciality = speciality
        this.medicalLicense = medicalLicense
    }

    //Métodos

    createMessage(): string {

        return `The doctor named ${this.name} was created.`
    }
    editMessage(): string {

        return `The doctor named ${this.name} was edited.`
    }
    deleteMessage(): string {

        return `The doctor named ${this.name} was deleted.`
    }


}
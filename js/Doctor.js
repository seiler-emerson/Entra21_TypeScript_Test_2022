import { Person } from "./Person.js";
export class Doctor extends Person {
    //Construtor
    constructor(name, birth, cpf, nameMother, nameFather, address, genre, speciality, medicalLicense) {
        super(name, birth, cpf, nameMother, nameFather, address, genre);
        this.speciality = speciality;
        this.medicalLicense = medicalLicense;
    }
    //Métodos
    createMessage() {
        return `The doctor named ${this.name} was created.`;
    }
    editMessage() {
        return `The doctor named ${this.name} was edited.`;
    }
    deleteMessage() {
        return `The doctor named ${this.name} was deleted.`;
    }
}

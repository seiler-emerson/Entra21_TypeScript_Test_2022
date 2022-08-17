import { Person } from "./Person.js";
export class Patient extends Person {
    //Construtor
    constructor(name, birth, cpf, nameMother, nameFather, address, genre) {
        super(name, birth, cpf, nameMother, nameFather, address, genre);
    }
    //Métodos
    createMessage() {
        return `The patient named ${this.name} was created.`;
    }
    editMessage() {
        return `The patient named ${this.name} was edited.`;
    }
    deleteMessage() {
        return `The patient named ${this.name} was deleted.`;
    }
    getAppointment() {
        return this.appointment;
    }
    setAppointment(appointment) {
        this.appointment = appointment;
    }
}

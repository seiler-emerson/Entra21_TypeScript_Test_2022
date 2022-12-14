import { Appointment } from "./Appointment.js"
import { Person } from "./Person.js"

export class Patient extends Person{

    //Atributos
    private appointment: Array<Appointment>

    //Construtor
    constructor(name: string, birth: Date, cpf: string, nameMother: string, nameFather: string, address: string, genre: string) {
        super(name, birth, cpf, nameMother, nameFather, address, genre)
    }

    //Métodos

    createMessage(): string {

        return `The patient named ${this.name} was created.`
    }
    editMessage(): string {

        return `The patient named ${this.name} was edited.`
    }
    deleteMessage(): string {

        return `The patient named ${this.name} was deleted.`
    }

    getAppointment(): Array<Appointment> {

        return this.appointment
    }

    setAppointment(appointment: Array<Appointment>): void {
        this.appointment = appointment
    }


}
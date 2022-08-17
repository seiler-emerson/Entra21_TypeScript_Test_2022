import { Doctor } from "./Doctor.js"

export class Appointment {

    //Atributos
    public doctor: Doctor
    public date: Date
    public time: number
    public anamnesis: string
    public prescription: string
    public certificate: string
    public forwarding: string
    public medicalRelease: string

    //Construtor
    constructor(doctor: Doctor, date: Date, time: number, anamnesis: string, prescription: string, certificate: string, forwarding: string, medicalRelease: string) {
        this.doctor = doctor
        this.date = date
        this.time = time
        this.anamnesis = anamnesis
        this.prescription = prescription
        this.certificate = certificate
        this.forwarding = forwarding
        this.medicalRelease = medicalRelease
    }

}
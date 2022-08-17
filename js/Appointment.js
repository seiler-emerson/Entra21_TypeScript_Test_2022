export class Appointment {
    //Construtor
    constructor(doctor, date, time, anamnesis, prescription, certificate, forwarding, medicalRelease) {
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.anamnesis = anamnesis;
        this.prescription = prescription;
        this.certificate = certificate;
        this.forwarding = forwarding;
        this.medicalRelease = medicalRelease;
    }
}

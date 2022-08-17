import { Appointment } from "./Appointment.js";
import { Doctor } from "./Doctor.js";
import { Patient } from "./Patient.js";
import { User } from "./User.js";

// ==================== DOCTOR ==================== //

let doctorOne: Doctor = new Doctor("Rafael da Silva", new Date("1985-01-12 16:10:22"), "145.345.345-34", "Julia Silva", "Carlos da Silva", "Rua Barao", "male", "Clinico Geral", "123456-9")

console.warn("======= DOCTOR =======");
console.log("Name: ", doctorOne.name);
console.log("Birth Day: ", doctorOne.birth);
console.log("CPF: ", doctorOne.cpf);
console.log("Name Mother: ", doctorOne.nameMother);
console.log("Name Father: ", doctorOne.nameFather);
console.log("Address: ", doctorOne.address);
console.log("Genre: ", doctorOne.genre);
console.log("Speciality: ", doctorOne.speciality);
console.log("Medical License: ", doctorOne.medicalLicense);
console.log("Create Message: ", doctorOne.createMessage());
console.log("Edit Message: ", doctorOne.editMessage());
console.log("Delete Message: ", doctorOne.deleteMessage());

doctorOne.name = "Carlos Alberto"
doctorOne.birth = new Date("1977-03-22 06:15:22")
doctorOne.cpf = "115.315.115-11"
doctorOne.nameMother = "Ana Alberta"
doctorOne.nameFather = "Joao Alberto"
doctorOne.address = "Rua 123"
doctorOne.genre = "Male"
doctorOne.speciality = "Cardiologia"
doctorOne.medicalLicense = "123456-12"

console.warn("======= DOCTOR EDITED =======");
console.log("Name: ", doctorOne.name);
console.log("Birth Day: ", doctorOne.birth);
console.log("CPF: ", doctorOne.cpf);
console.log("Name Mother: ", doctorOne.nameMother);
console.log("Name Father: ", doctorOne.nameFather);
console.log("Address: ", doctorOne.address);
console.log("Genre: ", doctorOne.genre);
console.log("Speciality: ", doctorOne.speciality);
console.log("Medical License: ", doctorOne.medicalLicense);
console.log("Create Message: ", doctorOne.createMessage());
console.log("Edit Message: ", doctorOne.editMessage());
console.log("Delete Message: ", doctorOne.deleteMessage());

// ==================== APPOINTMENT ==================== //

let appointmentOne: Appointment = new Appointment(doctorOne, new Date("2022-02-26 11:20:55"), 12, "Dor de cabeça", "Paracetamol 12h/12h 3 dias", "n/h", "Neurologia", "liberado")
let appointmentTwo: Appointment = new Appointment(doctorOne, new Date("2021-01-26 11:10:55"), 10, "Dor de barriga", "Buscopan 6h/6h 2 dias", "Atestado 2 dias", "n/h", "liberado")
let appointments = [appointmentOne, appointmentTwo]

console.warn("======= APPOINTMENT 01 =======");
console.log("Doctor Name: ",appointmentOne.doctor.name);
console.log("Date: ",appointmentOne.date);
console.log("Hour: ",appointmentOne.time);
console.log("Anamnesis: ",appointmentOne.anamnesis);
console.log("Prescription: ",appointmentOne.prescription);
console.log("Forwarding: ",appointmentOne.forwarding);
console.log("Medical Release: ",appointmentOne.medicalRelease);

console.warn("======= APPOINTMENT 02 =======");
console.log("Doctor Name: ",appointmentTwo.doctor.name);
console.log("Date: ",appointmentTwo.date);
console.log("Hour: ",appointmentTwo.time);
console.log("Anamnesis: ",appointmentTwo.anamnesis);
console.log("Prescription: ",appointmentTwo.prescription);
console.log("Forwarding: ",appointmentTwo.forwarding);
console.log("Medical Release: ",appointmentTwo.medicalRelease);

// ==================== PATIENT ==================== //

let patientOne: Patient = new Patient("Sheldon Cooper", new Date("1980-02-26 11:20:55"), "036.869.260-40", "Mary Cooper", "George Cooper", "Av Los Robles Avenue, 2311 Pasadena", "Male")
patientOne.setAppointment(appointments)

console.warn("======= PATIENT =======");
console.log("Name: ", patientOne.name);
console.log("Birth Day: ", patientOne.birth);
console.log("CPF: ", patientOne.cpf);
console.log("Name Mother: ", patientOne.nameMother);
console.log("Name Father: ", patientOne.nameFather);
console.log("Address: ", patientOne.address);
console.log("Genre: ", patientOne.genre);
console.log("Appointment: ", patientOne.getAppointment());
console.log("Create Message: ", patientOne.createMessage());
console.log("Edit Message: ", patientOne.editMessage());
console.log("Delete Message: ", patientOne.deleteMessage());

patientOne.name = "Joana da Silva"
patientOne.birth = new Date("1950-12-22 09:10:25")
patientOne.cpf = "502.680.680-54"
patientOne.nameMother = "Julia Garcia"
patientOne.nameFather = "Joao da Silca"
patientOne.address = "Rua 456, Decimal, Numerais"
patientOne.genre = "Female"

console.warn("======= PATIENT EDITED =======");
console.log("Name: ", patientOne.name);
console.log("Birth Day: ", patientOne.birth);
console.log("CPF: ", patientOne.cpf);
console.log("Name Mother: ", patientOne.nameMother);
console.log("Name Father: ", patientOne.nameFather);
console.log("Address: ", patientOne.address);
console.log("Genre: ", patientOne.genre);
console.log("Appointment: ", patientOne.getAppointment());
console.log("Create Message: ", patientOne.createMessage());
console.log("Edit Message: ", patientOne.editMessage());
console.log("Delete Message: ", patientOne.deleteMessage());

// ==================== USER ==================== //

let userAdmin: User = new User("admin", 123456, new Date("2022-02-26 11:20:55"), 12)
console.warn("======= USER =======");
console.log("User:", userAdmin.user);
console.log("Password:", userAdmin.password);
console.log("Create Date:", userAdmin.createDate);
console.log("Create Time:", userAdmin.createTime);


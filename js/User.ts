export class User {

    //Atributos
    public user: string
    public password: number
    public createDate: Date
    public createTime: number
    //Construtor
    constructor(user: string, password: number, createDate: Date, createTime: number) {
        this.user = user
        this.password = password
        this.createDate = createDate
        this.createTime = createTime
    }




}
export class Friend {
    constructor(
    public _id : string = "",
    public firstname: string = "",
    public lastname: string = "",
    public birthday: string = "",
    public createdAt: Date =  new Date(),
    public updatedAt: Date = new Date(),
  
    ){}
}

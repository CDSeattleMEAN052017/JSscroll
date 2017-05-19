export class Note{
    constructor(
		public _id: number = Math.floor(Math.random()*100), 
		public note: string='',
		public created_at: number = Date.now(),
		public updated_at: number = Date.now()
	){}

}
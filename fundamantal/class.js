class Persone{
    constructor(pId, pName, pJob){
        this.Id = pId;
        this.Name = pName;
        this.Job = pJob;
    }
}

class Persones extends Persone {
    constructor() {
        super();
        this.school = " Dhaka Collage "

    }
}

const persone1 = new Persone("01" ,"Nahid Hassan", "Frontend Developer" );
const Persone2 = new Persone ( "02", " Shima ", "Software Develper ");
const result = new Persones();
console.log(result);

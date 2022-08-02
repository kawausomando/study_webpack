export class Human {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    printProfile() {
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
    }
}

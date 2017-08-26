class Animal{
    name:string;
    distance:number;
    constructor(nameAnimal:string){
        this.name=name;
    }
    move(distance:number)
    {
      console.log(`This animal ${this.name} covered a distance of ${this.distance}`);
    }
   makeSound(){
       console.log(`The animal ${this.name} roars`);
   }
}
class Tiger extends Animal{
constructor(name:string){
    super(name);
}
move(distance=100){
    super.move(distance);
}
makeSound()
{
    super.makeSound;
}
}
class Lion extends Animal{
constructor(name:string){
    super(name);
}
move(distance=150){
    super.move(distance);
}
makeSound()
{
    super.makeSound;
}
}
let tiger = new Tiger("tiger");
console.log(tiger.name);
tiger.makeSound;
tiger.distance;
let lion = new Lion("lion");
console.log(lion.name);
lion.makeSound;
lion.distance;
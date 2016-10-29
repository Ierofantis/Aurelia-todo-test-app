export class App {
  constructor() {
    this.message = "Recipes";
    this.box = [];
    this.potentialbox = ''
  }

  get addrecipe() {
   if (this.potentialbox){
    this.box.push(this.potentialbox)
   }
   this.potentialbox = ''
  }
    del(value){
    const index = this.box.indexOf(value);
    this.box.splice(index,1)
    }
}
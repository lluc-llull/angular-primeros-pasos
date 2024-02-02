import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 18;
  public valueName: boolean = true;
  public valueAge: boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( value:string ):void {
    this.name = value;
    this.valueName = false;
  }

  changeAge( value:number ):void {
    this.age = value;
    this.valueAge = false;
  }

  resetForm():void {
    this.name = 'spiderman';
    this.age = 18;
    this.valueName = true;
    this.valueAge = true;

    // document.querySelector('h1')!.innerHTML = '<h1>Bon dia</h1>';
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Bon dia</h1>';
    // });
  }
}

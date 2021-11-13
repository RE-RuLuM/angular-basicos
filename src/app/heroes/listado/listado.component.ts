import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrado: string = '';

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe() {
    this.heroesBorrado = this.heroes.pop() || '';
  }

}

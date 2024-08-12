import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor (private dbzService: DbzService){ }      //asi se injecta un servicio


  get characters():Character[] {   //el geter devuelve un arreglo Character
    return [...this.dbzService.characters];//spred crea una copia de los datos que hay no es obligatorio
  }

    onDeleteCharacter(id: string):void{           //creo un metodo para onDeleteCharacter que no regresa nada y recibe el id de tipo string
     this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character)  {
      this.dbzService.addCharacter  (character)  //llamo a this. y mando el caracter que se recibe

    }

}

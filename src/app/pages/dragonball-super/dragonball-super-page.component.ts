import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list-component/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add-component/dragonball-character-add-component";

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

 characters = signal<Character[]>([
  {id:1, name:'Goku', power:9001},
  {id:2, name:'Vegeta', power:8000}
 ]);

 addCharacter(character:Character){
  this.characters.update(
    list => [... list, character]
  );
 }

}

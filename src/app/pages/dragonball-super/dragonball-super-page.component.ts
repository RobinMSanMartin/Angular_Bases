import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list-component/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add-component/dragonball-character-add-component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DragonballSuperPageComponent {

  // constructor(
  //   public DragonballService: DragonballService
  // ){}

  public dragonballService = inject(DragonballService);

  // name = signal('');
  // power = signal(0);

//  characters = signal<Character[]>([
//   {id:1, name:'Goku', power:9001},
//   {id:2, name:'Vegeta', power:8000}
//  ]);

//  addCharacter(character:Character){
//   this.characters.update(
//     list => [... list, character]
//   );
//  }

}

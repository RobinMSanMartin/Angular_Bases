import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add-component',
  templateUrl: './dragonball-character-add-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAddComponent {
  name = signal('');
  power = signal(0);

   addCharacter(){
  if(!this.name() || !this.power() || this.power() <= 0){
    return;
  }

  const newCharacter:Character ={
    id: 1000,
    name: this.name(),
    power: this.power()
  }

  // this.characters.update((list) => [... list, newCharacter]);
  console.table(newCharacter);
  this.resetFields();
 }

 resetFields(){
  this.name.set('');
  this.power.set(0);
 }

}

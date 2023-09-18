import { Component, EventEmitter, Output } from '@angular/core';
import { TitulosComponent } from '../titulos/titulos.component';


@Component({
  selector: 'app-opacity',
  templateUrl: './opacity.component.html',
  styleUrls: ['./opacity.component.css']
})
export class OpacityComponent {
  
  console = console;
  @Output() rangeValue: EventEmitter<number> = new EventEmitter();
  miTitulo: string = "Opacidad";

  opacityValue:number =0.99;


  // onChangeRange(event: any) {
    
  // } 
  enviarRango(event?: any){
    this.opacityValue = event.target.value;
    this.rangeValue.emit(this.opacityValue);
  
  }
}



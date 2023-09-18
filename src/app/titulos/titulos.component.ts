import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit{
  @Input() titulo: string = "";
  ngOnInit(): void {

    this.test()
  }
  test():any {
  console.log(this.titulo);
  console.log("Cargo el componente titulos"); 
}

}

import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.cargarBarra();
  }

  cargarBarra() {
    const progressBar = this.el.nativeElement.querySelector("#progress-bar");
    let porcentaje = 0;
    const intervalo = setInterval(() => {
      if (porcentaje >= 100) {
        clearInterval(intervalo);
      } else {
        porcentaje += 10; 
        this.renderer.setStyle(progressBar, "width", porcentaje + "%");
        this.renderer.setAttribute(progressBar, "aria-valuenow", porcentaje.toString());
      }
    }, 500); 
  }
}

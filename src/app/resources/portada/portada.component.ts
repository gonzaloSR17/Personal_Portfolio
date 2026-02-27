import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  
 imagenDecidida: string;

    constructor() {
      console.log("ejemplo");

      const names: string[] = ["./vistas.mp4","./cisne.mp4","/beach.mp4"];

       this.imagenDecidida = names[Math.floor(Math.random() * 3)]

      console.log(this.imagenDecidida);
    }
    
}

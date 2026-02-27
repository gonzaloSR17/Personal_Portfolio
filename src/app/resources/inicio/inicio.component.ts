import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

    ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.id === 'img-left') target.classList.add('animate-slideInLeft');
          if (target.id === 'img-right') target.classList.add('animate-slideInRight');
          if (target.id === 'img-top') target.classList.add('animate-slideInTop');
          if (target.id === 'img-down') target.classList.add('animate-slideInDown');
          target.classList.remove('opacity-0');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.3 });

    const images = document.querySelectorAll('#img-left, #img-right, #img-top, #img-down');
    images.forEach(el => observer.observe(el));
  }
}

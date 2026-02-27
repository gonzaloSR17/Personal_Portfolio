import { Component } from '@angular/core';
import { ToolsComponent } from "../tools/tools.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-divider',
  imports: [ToolsComponent, SkillsComponent],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {

     ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.id === 'img-left') target.classList.add('animate-slideInLeft');
          if (target.id === 'img-right') target.classList.add('animate-slideInRight');
          if (target.id == 'img-top') target.classList.add('.animate-slideInTop');
          target.classList.remove('opacity-0');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.3 });

    const images = document.querySelectorAll('#img-left, #img-right, #img-top');
    images.forEach(el => observer.observe(el));
  }
  
}

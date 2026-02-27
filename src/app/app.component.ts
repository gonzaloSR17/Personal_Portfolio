import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortadaComponent } from "./resources/portada/portada.component";
import { InicioComponent } from "./resources/inicio/inicio.component";
import { DividerComponent } from "./resources/divider/divider.component";
import { SkillsComponent } from "./resources/skills/skills.component";
import { ProjectsComponent } from "./resources/projects/projects.component";
import { BallTrackerComponent } from './resources/ball-tracker/ball-tracker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortadaComponent, InicioComponent, DividerComponent, SkillsComponent, ProjectsComponent, CommonModule, BallTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

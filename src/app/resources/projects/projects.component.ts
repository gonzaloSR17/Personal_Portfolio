import { Component, OnInit } from '@angular/core';
import { BallTrackerComponent } from "../ball-tracker/ball-tracker.component";
import { debug } from 'node:console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [BallTrackerComponent,CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{

  projectTitle : string[] = ["pokemonRPG","Gtime","Wiki-Shop Harry Potter","Pokemon Battle Android","Dungeon Zombies"];
  
  projectDescription1 : string[] = ["JPokemon RPG is a solo development project built in Unity (C#) that delivers a full-fledged RPG experience with exploration, turn-based battles, creature capturing, and evolution.","GTime is a full-stack Java application designed to help high school students manage their time and organize schedules efficiently. Developed using Maven, JavaFX, SQL Oracle, and PL/SQL, the project features a robust database schema that organizes and manages both teachers and students effectively.","WikiShop Harry Potter is a website designed specifically for die-hard fans of the magical world. Built with Angular and TypeScript, it provides a unique experience with animations and transitions that make browsing the site as exciting as a ride on a broomstick. Fans can:","PokemonBattlesAndroid is an Android game developed in Android Studio (Java), inspired by the popular Pokémon Showdown platform. Players can build a team of up to 12 Pokémon and engage in dynamic battles featuring animated sprites, switching mechanics, and healing options.","Dungeon Zombies is a Unity (C# / .NET) project where players must survive and clear dungeons filled with relentless waves of zombies. The game combines fast-paced action, time pressure, and strategic resource management."]
  
  pokemonrpgImg : string[][] = [["Cap1.png","Cap2.png","Cap3.png","Cap4.png","Cap5.png"],["Cap6.png","Cap7.png","Cap8.png","Cap9.png","Cap10.png"],["Cap11.png","Cap12.png","Cap13.png","Cap14.png","Cap15.gif"],["Cap16.png","Cap17.png","Cap18.png","Cap19.png","Cap20.png"],["Cap21.png","Cap22.png","Cap23.png","Cap24.png","Cap25.png"],];
  skillsUse : string[][] = [["C#","JSON","SQL","YAML","Unity"],["Java","JavaFX","Maven","SQL","PL/SQL","Eclipse"],["Kotlin","Java","SQL","Android_Studio"]];

  contadorPagina: number = 0;

  imagenDecidida: string;

  // Diccionario para cada color

    skillColors: Record<string, string> = {
    "C#": "#9B59B6",
    "JSON": "#F39C12",
    "SQL": "#3498DB",
    "YAML": "#2ECC71",
    "Unity": "#20232A",
    "Java": "#E76F00",
    "JavaFX": "#8E44AD",
    "Maven": "#C0392B",
    "PL/SQL": "#1ABC9C",
    "Eclipse": "#4B0082",
    "Kotlin": "#7F52FF",
    "Android_Studio": "#3DDC84"
  };

    constructor() {

      const names: string[] = ["./vistas.mp4","./cisne.mp4","/beach.mp4"];

       this.imagenDecidida = names[Math.floor(Math.random() * 3)]

    }


  pasarPaginas(calculo: boolean): void {
   if (calculo) {
        this.contadorPagina = (this.contadorPagina + 1) % 5;
      } else {
        this.contadorPagina = (this.contadorPagina - 1 + 5) % 5;
      }
      console.log(this.contadorPagina);
    } 
    

    devolverColor(skill: string): String {
      return this.skillColors[skill];
    }
  }



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

  projectTitle : string[] = ["pokemonRPG","Gtime","Wiki-Shop Harry Potter","PokemonBattlesAndroid – Mobile Pokémon Battle Game","Dungeon Zombies – Survival Dungeon Crawler"];
  
  projectDescription1 : string[] = ["JPokemon RPG is a solo development project built in Unity (C#) that delivers a full-fledged RPG experience with exploration, turn-based battles, creature capturing, and evolution. Key features include:","GTime is a full-stack Java application designed to help high school students manage their time and organize schedules efficiently. Developed using Maven, JavaFX, SQL Oracle, and PL/SQL, the project features a robust database schema that organizes and manages both teachers and students effectively.","WikiShop Harry Potter is a website designed specifically for die-hard fans of the magical world. Built with Angular and TypeScript, it provides a unique experience with animations and transitions that make browsing the site as exciting as a ride on a broomstick. Fans can:","PokemonBattlesAndroid is an Android game developed in Android Studio (Java), inspired by the popular Pokémon Showdown platform. Players can build a team of up to 12 Pokémon and engage in dynamic battles featuring animated sprites, switching mechanics, and healing options.","Dungeon Zombies is a Unity (C# / .NET) project where players must survive and clear dungeons filled with relentless waves of zombies. The game combines fast-paced action, time pressure, and strategic resource management."]
  projectDetails1: string[] = ["An original Pokédex, with Pokémon initially designed through traditional hand-drawn art and later digitized in Aseprite/Krita for in-game integration.","Teacher & Student Management: Teachers can create and schedule exams and assignments, while students can build personalized routines, manage tasks, and track deadlines.","Access detailed information about their favorite characters, complex potions, and never-before-seen spells.","Team & Battle System: Choose up to 12 Pokémon with animated sprites, switch between them, and use healing mechanics during battles.","Dynamic Zombie AI: Different zombie behaviors — some shoot from a distance while others chase the player relentlessly, forcing adaptive strategies."]
  projectDetails2: string[] = ["Optimized performance for low-end PCs (minimum 4 GB RAM), using PlayerPrefs and JSON for local save management.","Database Design: A comprehensive relational schema for users, courses, tasks, exams, and routines, ensuring data integrity and efficient queries.","Explore all books, movies, and merchandise from the Harry Potter universe.","Database Persistence: Local database support for storing Pokémon data, user progress, and battle states across sessions.","Supermarket System: In-game shop where players can buy power-ups and upgrades to improve damage, defense, or speed."];
  projectDetails3: string[] = ["Maps created with Tilemap, and a modular C# architecture organizing scripts for player movement, trainer AI, damage calculation, progression, and evolution.","Full-Stack Integration: Responsive JavaFX interface connected to SQL backend via PL/SQL for smooth communication between frontend and database.","Make purchases through our magical shopping cart, and take advantage of discount codes shared on our social media channels.","Custom UI & Animation: Attractive menus and animated combat sequences designed to deliver a polished mobile experience.","Time-Based Challenge: Each level has a strict timer; failing to defeat all zombies before time runs out results in losing the game."];
  projectDescriptionFinal: string[] = ["This project highlights skills in object-oriented programming, asset creation from traditional art, and 2D game optimization, while applying version control with GitHub and adhering to software engineering best practices.","Although currently conceptual, GTime is fully functional and extensible, showcasing skills in full-stack development, database design, object-oriented programming, and software engineering best practices.","This website was developed using HTML, TypeScript, Angular, Java, and an SQL API, integrating dynamic features and real-time data to enhance user interaction. Are you ready to explore the magical world of Harry Potter?","This project highlights skills in Android full-stack development, UI/UX animation, local data persistence, and game logic design, adapted to mobile while inspired by competitive Pokémon battling.","This project showcases skills in gameplay programming, AI behavior scripting, user interface design, and resource management systems, built entirely in Unity with C# and .NET."];
  
  pokemonrpgImg : string[][] = [["Cap1.png","Cap2.png","Cap3.png","Cap4.png","Cap5.png"],["Cap6.png","Cap7.png","Cap8.png","Cap9.png","Cap10.png"],["Cap11.png","Cap12.png","Cap13.png","Cap14.png","Cap15.gif"],["Cap16.png","Cap17.png","Cap18.png","Cap19.png","Cap20.png"],["Cap21.png","Cap22.png","Cap23.png","Cap24.png","Cap25.png"],];
  skillsUse : string[][] = [["C#","JSON","SQL","YAML","Unity"],["Java","JavaFX","Maven","SQL","PL/SQL","Eclipse"],["Kotlin","Java","SQL","Android_Studio"]];

  contadorPagina: number = 0;


  pasarPaginas(calculo: boolean): void {
   if (calculo) {
        this.contadorPagina = (this.contadorPagina + 1) % 5;
      } else {
        this.contadorPagina = (this.contadorPagina - 1 + 5) % 5;
      }
      console.log(this.contadorPagina);
    } 
    
  }



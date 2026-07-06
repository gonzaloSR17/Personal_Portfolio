import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ball-tracker',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './ball-tracker.component.html',
  styleUrls: ['./ball-tracker.component.css']
})
export class BallTrackerComponent implements OnInit, OnDestroy {
  ballX = 0;
  ballY = 0;
  targetX = 0;
  targetY = 0;

  readonly radius = 200;   // radio de la bola
  speed = 0.30;           // velocidad de seguimiento
  private animationId: number | null = null;
  private isBrowser: boolean;

  // cantidad de bolas en el portfolio

  smallBalls: { x:number; y: number; vx: number; vy: number }[] = [];
  readonly smallRadius = 5;
  readonly numSmallBalls = 220;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.ballX = window.innerWidth / 2;
      this.ballY = window.innerHeight / 2;
      this.targetX = this.ballX;
      this.targetY = this.ballY;

    // Generemos la array con las posiciones aleatorias que tendra cada bola

    for (let i = 0; i < this.numSmallBalls; i++) {
      this.smallBalls.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0
      });
    }

    this.startLoop();
    window.addEventListener('resize', this.onResize);

    }
  }



  ngOnDestroy(): void {
    if (this.isBrowser) {
      if (this.animationId !== null) {
        cancelAnimationFrame(this.animationId);
      }
      window.removeEventListener('resize', this.onResize);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.isBrowser) {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    }
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (this.isBrowser && e.touches?.[0]) {
      this.targetX = e.touches[0].clientX;
      this.targetY = e.touches[0].clientY;
    }
  }

  get ballStyle() {
  const diameter = this.radius * 2;
  return {
    left: this.ballX + 'px',
    top: this.ballY + 'px',
    width: diameter + 'px',
    height: diameter + 'px'
  };
}

  private startLoop() {
  const loop = () => {
    // mover bola grande
    const dx = this.targetX - this.ballX;
    const dy = this.targetY - this.ballY;

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      this.ballX += dx * this.speed;
      this.ballY += dy * this.speed;
    }

    // mover bolitas
    for (let ball of this.smallBalls) {
      const dx = ball.x - this.ballX;
      const dy = ball.y - this.ballY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.radius) {
        const force = (this.radius - dist) * 0.05;
        const nx = dx / dist;
        const ny = dy / dist;
        ball.vx += nx * force;
        ball.vy += ny * force;
      }

      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.vx *= 0.9;
      ball.vy *= 0.9;
    }

    this.animationId = requestAnimationFrame(loop);
  };

  this.animationId = requestAnimationFrame(loop);
}

  private onResize = () => {
    if (this.isBrowser) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (this.ballX > w) this.ballX = w - this.radius;
      if (this.ballY > h) this.ballY = h - this.radius;
      if (this.targetX > w) this.targetX = w - this.radius;
      if (this.targetY > h) this.targetY = h - this.radius;
    }
  };
}

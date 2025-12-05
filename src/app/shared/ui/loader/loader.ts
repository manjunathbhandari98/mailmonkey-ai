import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
   activeDot = signal(0);
  totalDots = 8;
  dots = Array.from({ length: this.totalDots });

  private intervalId?: number;

  ngOnInit() {
  this.intervalId = window.setInterval(() => {
    this.activeDot.update(v => (v + 1) % this.totalDots);
  }, 150);
}


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  isActive(i: number) {
  return i === this.activeDot();
}

isPrevious(i: number) {
  return i === (this.activeDot() - 1 + this.totalDots) % this.totalDots;
}

  getRotation(i: number) {
    return (i * 360) / this.totalDots;
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';
import { Button } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports: [Button, NgIconComponent],
  providers:[provideIcons({
    heroArrowRight
  })],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  arrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
`;


  constructor(private router:Router){}

  goToLogin(){
  this.router.navigate(['/login']);
}

@Input() stats:any[] = [];

}

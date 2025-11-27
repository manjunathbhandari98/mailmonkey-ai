import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-template-card',
  standalone:true,
  imports: [Button, NgIconComponent, CommonModule],
  templateUrl: './template-card.html',
  styleUrl: './template-card.scss',
})
export class TemplateCard {
  @Input() title:string = '';
  @Input() categoryName:string ='';
  @Input() tone:string = '';
  @Input() preview:string = '';
  @Input() likes:number = 0;

}

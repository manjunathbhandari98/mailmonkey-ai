import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { Logo } from '../../components/logo/logo';

@Component({
  selector: 'app-page-header',
  standalone:true,
  imports: [NgIconComponent, Logo],
  providers:[provideIcons({
    heroArrowLeft
  })],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  constructor(private location:Location){}
 @Input() pageTitle = '';
 goBack(){
  this.location.back();
 }
}

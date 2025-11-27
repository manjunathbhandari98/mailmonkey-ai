import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBookmark, heroBriefcase, heroBuildingOffice, heroChartBar, heroChatBubbleLeftRight, heroEnvelope, heroHeart, heroMegaphone, heroUserGroup } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { Button } from '../../shared/ui/button/button';
import { emailTemplates, templateCategories } from './../../data/app-data';

@Component({
  selector: 'app-templates',
  standalone:true,
  imports: [PageHeader,NgIconComponent, CommonModule, Button],
  providers:[provideIcons({
    heroBriefcase,
    heroBuildingOffice, 
    heroMegaphone,
    heroChartBar,
    heroEnvelope,
    heroUserGroup,
    heroChatBubbleLeftRight,
    heroBookmark,
    heroHeart
  })],
  templateUrl: './templates.html',
  styleUrl: './templates.scss',
})
export class Templates {
templateCategories = templateCategories;
emailTemplates = emailTemplates;
}

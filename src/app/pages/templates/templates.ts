import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBookmark, heroBriefcase, heroBuildingOffice, heroChartBar, heroChatBubbleLeftRight, heroEnvelope, heroHeart, heroMegaphone, heroUserGroup } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../core/page-header/page-header';
import { Button } from '../../shared/ui/button/button';
import { TemplateCard } from '../../shared/ui/template-card/template-card';
import { emailTemplates, templateCategories } from './../../data/app-data';

@Component({
  selector: 'app-templates',
  standalone:true,
  imports: [PageHeader,NgIconComponent, CommonModule, Button, TemplateCard, RouterLink],
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
searchTerm = signal('');
 filteredTemplates = computed(() => {
    const q = this.searchTerm().toLowerCase();

    if (!q.trim()) return this.emailTemplates;

    return this.emailTemplates.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.preview.toLowerCase().includes(q) ||
      t.categoryName.toLowerCase().includes(q) ||
      t.tone.toLowerCase().includes(q)
    );
  });

// Get Counts of Templates per category
getCategoryCount(id:any){
  const templateCount = emailTemplates.filter((template:any) => template.categoryId === id).length;
  return templateCount;
}


}

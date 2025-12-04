import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { heroHeart } from '@ng-icons/heroicons/outline';
import { PageHeader } from '../../../core/page-header/page-header';
import { emailTemplates, templateCategories } from '../../../data/app-data';
import { TemplateCard } from '../../../shared/ui/template-card/template-card';

@Component({
  selector: 'app-template-category',
  imports: [CommonModule, TemplateCard, PageHeader],
  providers:[provideIcons({
    heroHeart
  })],
  templateUrl: './template-category.html',
  styleUrl: './template-category.scss',
})
export class TemplateCategory {
  templates:any[]=[];
  category:any = null;
  categoryName = signal('');

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    const slug = this.route.snapshot.paramMap.get('slug');
    
    this.category = templateCategories.find((cat:any) => cat.slug === slug);

    if(!this.category){
      return;
    }

    this.categoryName.set(this.category.title);

    this.templates = emailTemplates.filter(
      (t:any) => t.categoryId === this.category.id
    );

     console.log("Selected slug:", slug);
    console.log("Matched category:", this.category);
    console.log("Filtered templates:", this.templates);


  }
}

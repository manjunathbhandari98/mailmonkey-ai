import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheck } from '@ng-icons/heroicons/outline';
import { plans } from '../../../../data/app-data';
import { ToastService } from '../../../../services/toast-service/toast-service';
import { Button } from '../../../../shared/ui/button/button';
import { PricingCard } from '../../../../shared/ui/pricing-card/pricing-card';

@Component({
  selector: 'app-pricing',
  standalone:true,
  imports: [NgIconComponent,CommonModule, Button, PricingCard],
  providers:[
    provideIcons({heroCheck})
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {

  constructor(private toast:ToastService){}

plans = signal(plans)

selectedPlan = signal(null)

getButtonClass(plan: any) {
  return `
    mt-6 font-semibold w-full py-2 px-4 rounded-xl cursor-pointer transition
  `;
}

getVarient(plan: any) {
  return !plan.highlight ? 'outline' : 'primary';
}

onPlanSelected(plan:any){
  this.toast.success(`${plan.name} plan selected Successfully`)
}

}

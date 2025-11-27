import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { ToastService } from '../../../services/toast-service/toast-service';
import { PricingPlan } from '../../../type';
import { Button } from '../button/button';

@Component({
  selector: 'app-pricing-card',
  standalone:true,
  imports: [Button, CommonModule,NgIconComponent],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  @Input() plan!: PricingPlan;

  constructor(private toast:ToastService){
  }

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

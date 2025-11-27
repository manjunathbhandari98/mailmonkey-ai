import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SettingToogle } from '../../components/setting-toogle/setting-toogle';
import { PageHeader } from '../../core/page-header/page-header';
import { currentUserInfo } from '../../data/app-data';
import { ToastService } from '../../services/toast-service/toast-service';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-settings',
  imports: [SettingToogle, PageHeader, ReactiveFormsModule, Button],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

  userInfo = currentUserInfo

  settingForm!:FormGroup;

constructor(private toast:ToastService,
  private fb:NonNullableFormBuilder
){
  this.settingForm = this.fb.group({
    firstName:[this.userInfo.firstName,[Validators.required]],
    lastName:[this.userInfo.lastName,[Validators.required]],
    email:[this.userInfo.email,[Validators.required,Validators.email]]
  })
}

alwaysUseTone = true;
emailNotification = true;
generationCompleteNotification = false;
weeklySummaryNotification = false;

planInfo = {
  activePlan: 'Pro Plan',
  price:'29',
  period:'month',
  next_billing_date:'December 26, 2025',
  payment_method:'*******4563'
}

apiInfo = {
  used: 8_450,
  limit: 10_000,
  costPer1000: 0.4,
  resetDate: "Feb 28, 2026",
  keyMasked: "sk_live_41f2••••••••••8da9"
};

copyKey(){}

regenerateKey(){}

onSave(){
  if(this.settingForm.invalid){
    this.settingForm.markAllAsTouched();
    return;
  }
  this.toast.success("Settings saved Successfully");
}

onCancel(){}

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckCircleSolid, heroExclamationTriangleSolid, heroInformationCircleSolid, heroXCircleSolid } from '@ng-icons/heroicons/solid';
import { ToastService } from '../../services/toast-service/toast-service';

@Component({
  selector: 'app-toast',
  standalone:true,
  imports: [NgIconComponent, CommonModule],
  providers:[provideIcons({
      heroCheckCircleSolid,
  heroXCircleSolid,
  heroExclamationTriangleSolid,
  heroInformationCircleSolid
  })],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  constructor(public toast:ToastService){}
}

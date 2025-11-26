import { Injectable, signal } from '@angular/core';

export interface ToastMessage{
  type: 'success' | 'error' | 'info' | 'warning',
  message:string
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts = signal<ToastMessage[]>([])
  
  show(type:ToastMessage['type'], message:string){
    this.toasts.update(t => [...t,{type, message}])

    // auto remove after 3s
    setTimeout(()=>{
      this.toasts.update(t => t.slice(1));
    },3000)
  }

  success(message:string){
    this.show('success',message);
  }

  error(message:string){
    this.show('error',message);
  }

  info(message:string){
    this.show('info',message);
  }

  warning(message:string){
    this.show('warning',message);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-setting-toogle',
  imports: [],
  standalone:true,
  templateUrl: './setting-toogle.html',
  styleUrl: './setting-toogle.scss',
})
export class SettingToogle {
@Input() title = '';
@Input() description = '';
@Input() value = false;

@Output() valueChange = new EventEmitter<boolean>();

toggle(){
  this.value = !this.value;
  this.valueChange.emit(this.value);
}
}

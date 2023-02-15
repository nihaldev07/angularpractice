import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss']
})
export class SingleComponentComponent {
  @Input() title :string="";
  @Input() subTitle:string = "";

  @Output() onValueChange = new EventEmitter<string>();

  inputText:string="";

  handleChange=(event:any)=>{
    this.onValueChange.emit(event.target.value);
  }





}

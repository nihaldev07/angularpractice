import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  inputValue1:string="";
  wordCount:string="";
  inputValue3:string="";
  finalOutPut:string='';

  handleGenerateClick1=(value:string)=>{
    this.inputValue1=value;
  }
  handleGenerateClick2=(value:string)=>{
    this.wordCount=value;
  }
  handleGenerateClick3=(value:string)=>{
    this.inputValue3=value;
  }

  makeEssay=(length:number)=>{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


  handleSubmit=()=>{
    const wordCountNum= Number(this.wordCount||0);
    this.finalOutPut=this.makeEssay(wordCountNum);
  }
}

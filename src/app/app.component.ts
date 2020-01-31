import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Unilag';
  courses=['course 1','course 2','course 3','course 4']

  articles=[{
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },
  {
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },
  {
    title:"hello world",
    img:"http://lorempixel.com/400/200"
  },]

  onSave(){
   alert("hello world");
  }



   email:string="adejoe@gmail.com";
   
   firstnumber:string;
   secondnumber:string;
   result:number;
   add(){
     this.result=parseFloat(this.firstnumber)+parseFloat(this.secondnumber);
   }

  onKeyUp(){
    console.log(this.email);
  }
}

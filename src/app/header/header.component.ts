import { DatePipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, DatePipe, JsonPipe, SlicePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck,   AfterContentInit, AfterContentChecked
{
  @Input() CommonHeader = "";
  @Input() LoginStatus:Boolean = true;

  date = Date();

    Message = 'Message from Child Component';

    @Output() msgevent = new EventEmitter();
  
  sendMsg(){
    this.msgevent.emit(this.Message)
  }

  @Input() username = 'Alisher714';


  ngOnChanges(){
    console.log("Onchanges Trigered")
  }

  ngOnInit(){
    console.log("OnInit triggered")
  }

  ngDoCheck(){
    console.log("DoCheck triggered")
  }

  ngAfterContentInit(){
    console.log("AfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }

  person={
    name: 'ali',
    age: 10,
    class: 'BSCS'
  }


}

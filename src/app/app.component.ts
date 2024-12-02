import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBar } from './Navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavBar, HeaderComponent, FormsModule,NgIf,NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-App';

  count = 0;
  Increment(){
    this.count++;
  }

  Decrement(){
    this.count--;
  }

  Reset(){
    this.count = 0
  }


  KeyPressed(event:any){
    // console.log(event);

    if(event.key == "Enter")
    {
      alert('Enter Key Clicked')
      console.log("Enter Key is Pressed");
    }
  }

  keyupFiltering(users:HTMLInputElement){
    console.log(users.value);
  }
  
  selectedOption: boolean = false;
  islogin: boolean = false;
  click(){
    this.islogin = this.selectedOption;
  }
  Name = "Ali Sher OK";  
  
  


  
  
  username: string = "alisher714";

  InputUname = "";
  counter = 0;
  checkUsername() {
    this.counter++;
    if (this.username === this.InputUname) {
      this.islogin = true;
    } else {
      this.islogin = false;
    }
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBar } from './Navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavBar, HeaderComponent, FormsModule],
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

  username = "Ali Sher"
  keyupFiltering(users:HTMLInputElement){
    console.log(users.value);
  }



  Name = "Ali Sher OK";  
}

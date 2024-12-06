import { Component,ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBar } from './Navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgComponentOutlet, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PostService } from './services/post.service';
import { CarType } from './interface/type';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavBar, HeaderComponent, FormsModule,NgIf,NgTemplateOutlet,NgFor,NgComponentOutlet,JsonPipe],
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

  Fruits = ["Mango", "Banana", "Apple", "grapes"]



person : any = [
]

ID="";
Name = "";
Age="";



addnew(){
  if(this.ID!="" && this.Name != "" &&this.Age!= ""){
    let newobj={id: this.ID, name:this.Name, age:this.Age}
    this.person.push(newobj);
    this.clear();
  }
  else
  alert('Please Fill')

}


ondelete(P:any){
  let index = this.person.indexOf(P);
  this.person.splice(index,1)
  
}

editindex = 0;
editcount=0;
onEdit(P:any){
  this.editindex = this.person.indexOf(P);
  this.ID = P.id;
  this.Name = P.name;
  this.Age = P.age;
  this.editcount++;
}

update(){
  this.person[this.editindex].id = this.ID
  this.person[this.editindex].name = this.Name
  this.person[this.editindex].age = this.Age
  this.editcount = 0;
  this.clear();
}

clear(){
  this.ID = '';
  this.Name = "";
  this.Age = '';
}

// To View in Child View From Parent View
Common = "Common Vaiable"




// get varible from Child View to Parent View.
@ViewChild(HeaderComponent) childmessage :any ;
message = "";
// constructor(){
//   console.log(this.childmessage)
// }

ngAfterViewInit(){
  this.message = this.childmessage.username
  // console.log(this.message)
}

//Event Emiter
recieveEvent(msg: string){
  
    console.log(msg)
}


//Lifecycle hooks


loadComponent(){
  this.viewContainer.createComponent(HeaderComponent);
}

removeComponent(){
  this.viewContainer.remove();

}

valuechanges(){
  this.username = 'ERP'
}

postService: Array<CarType>;

constructor(private viewContainer:ViewContainerRef, private postServiceDI : PostService){
  this.postService = postServiceDI.getpost();
}


addCar(){
  let NewCar:CarType=
  { 
    name: 'Toyota', 
    model: 1999, 
    color: 'Black'
  }
  
  this.postServiceDI.addCarService(NewCar)
}


}

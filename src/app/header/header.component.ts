import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() CommonHeader = "";
  @Input() LoginStatus:Boolean = true;


  username = 'Alisher714';
}

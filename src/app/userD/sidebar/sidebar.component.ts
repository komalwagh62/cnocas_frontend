import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Server/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  // isAuthenticated: boolean = false;
  constructor(public apiservice: ApiService) { }

  ngOnInit(): void {
  }
// // Method to set isAuthenticated to true after successful login
// setAuthenticated(status: boolean) {
//   this.isAuthenticated = status;
// }
}

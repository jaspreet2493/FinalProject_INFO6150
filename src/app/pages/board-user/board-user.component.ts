import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {OrderDetailsService} from 'src/app/_services/order-details.service';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
   packageData: any;
  constructor(private userService: UserService, private service:OrderDetailsService) { }

  ngOnInit(): void {
    this.packageData = this.service.packageDetails;
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
   
  }
  
}

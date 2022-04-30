import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from 'src/app/_services/order-details.service'

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {
  
 
  packageData:any;

  constructor(private service:OrderDetailsService) { }

  ngOnInit(): void {
  this.packageData = this.service.packageDetails;
  }

}

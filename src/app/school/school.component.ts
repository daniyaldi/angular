
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersDataService } from '../users-data.service';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  data:any;
  constructor(private route:Router,private usersData:UsersDataService){
  }
  ngOnInit(): void {
  }
  SchoolForm= new FormGroup({
  startingYear : new FormControl(),
  endingYear : new FormControl(),
  marksObtained: new FormControl(),
  })
  saveData(){
    this.usersData.data.push(this.SchoolForm.value);
  }
 go(){
	this.route.navigate(['/college']); // navigate to other page
	}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private route:Router,private usersData:UsersDataService){
  }
  ngOnInit(): void {
  }
  UniversityForm= new FormGroup({
  startingYear : new FormControl(),
  endingYear : new FormControl(),
  marksObtained: new FormControl(),
  })
  saveData(){
    this.usersData.data.push(this.UniversityForm.value)
  }
  go(){
		this.route.navigate(['/display-data']); // navigate to other page
	}

}

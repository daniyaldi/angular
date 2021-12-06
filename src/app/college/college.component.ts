import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import {Router} from '@angular/router';
import { UsersDataService } from '../users-data.service';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor(private route:Router,private usersData:UsersDataService){
    
  }
  ngOnInit(): void {
  }
  CollegeForm= new FormGroup({
  startingYear : new FormControl(),
  endingYear : new FormControl(),
  marksObtained: new FormControl(),
  })
  saveData(){
    this.usersData.data.push(this.CollegeForm.value)
    
  }
 
  go(){
		this.route.navigate(['/university']); // navigate to other page
	}
}

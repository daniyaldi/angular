import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../users-data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
data:any[];
studentToUpdate = {
  startingYear: "",
  endingYear:"",
  marksObtained:"",
}
  constructor(private route:Router,private usersData:UsersDataService,private modalService: NgbModal){
  this.data=usersData.data
  console.log("asdjalsdj",this.data)
  }
  closeResult = '';
  
  delete(i:any){
   // this.data.length = this.data.length - 1
   this.data.splice(i, 1);
  }
  ngOnInit(): void {
   // console.log("dataaaaa",this.data)
  }
  go(){
		this.route.navigate(['/school']); // navigate to other page
	}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  edit(studuent: any){
    this.studentToUpdate= studuent;
  }
  updateStudent(){
    this.usersData.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
    
    );
  }

};

import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';
import { RegisterApplicantService } from '../register-applicant.service';

@Component({
  selector: 'app-register-applicant',
  templateUrl: './register-applicant.component.html',
  styleUrls: ['./register-applicant.component.css']
})
export class RegisterApplicantComponent implements OnInit {

  applicant:Applicant=new Applicant();


  constructor(private registerApplicantService: RegisterApplicantService) { }

  ngOnInit(): void {
  }

  applicantRegister(){
    console.log(this.applicant);
    this.registerApplicantService.registerApplicant(this.applicant).subscribe(data=>{
      alert(" Applicant registered Successfully")
    },error=>alert("Sorry, applicant not registered"));

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from './applicant';

@Injectable({
  providedIn: 'root'
})
export class RegisterApplicantService {
  baseurl="http://localhost:8081/applicant"
  constructor( private httpClient:HttpClient){ }

  registerApplicant(applicant: Applicant):Observable<Object>{
    console.log(applicant)
    return this.httpClient.post(this.baseurl,applicant);
  }
}

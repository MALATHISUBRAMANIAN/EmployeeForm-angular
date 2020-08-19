import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { qualification } from '../qualification.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empname: string;
  mailid: string;
  age: number;
  qualification: string;
  experience: number;
  contactnumber: number;
  gender: string;
  maritalstatus: string;
  children: number;
  id: number;

  qualifications: qualification[] = [
    { id: 1, qualification: 'B.E' },
    { id: 2, qualification: 'B.Tech' },
    { id: 3, qualification: 'B.Sc' },
    { id: 4, qualification: 'M.Sc' },
    { id: 5, qualification: 'M.Tech' }

  ]

  constructor(private toastr: ToastrService, private service: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  buttonDisabled: boolean = false;
  check: boolean;

  edit() {
    this.check = false;
  }
  cancel() {
    this.toastr.warning("Changes have been discarded", "Warning!",{ positionClass:'toast-bottom-left'});
    this.check = true;
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployee(id).subscribe(data => {
      this.check = true;
      this.empname = data.empname;
      this.mailid = data.mailid;
      this.age = data.age;
      this.qualification = data.qualification;
      this.experience = data.experience;
      this.contactnumber = data.contactnumber;
      this.gender = data.gender;
      this.maritalstatus = data.maritalstatus;
      this.children = data.children;
    });
  }
  ngOnInit() {


    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getEmployee(id).subscribe(data => {
      this.check = true;
      this.empname = data.empname;
      this.mailid = data.mailid;
      this.age = data.age;
      this.qualification = data.qualification;
      this.experience = data.experience;
      this.contactnumber = data.contactnumber;
      this.gender = data.gender;
      this.maritalstatus = data.maritalstatus;
      this.children = data.children;
    });
  }
  insert(value) {
    this.service.onSubmit(value).subscribe(data => {
      this.toastr.success("Updated data successfully");
      this.check = true;
    })
  }



}

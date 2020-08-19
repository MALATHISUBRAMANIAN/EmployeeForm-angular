import { Component, OnInit } from '@angular/core';
import { qualification } from '../qualification.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registrationform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  empname: string;
  mailid: string;
  age: number;
  qualification: string;
  experience: number;
  contactnumber: number;
  gender: string;
  maritalstatus: string;
  children: number;
  defaultDropdown: number;
  showMsg: boolean = false;

  qualifications: qualification[] = [
    { id: 0, qualification: 'Choose your Qualification' },
    { id: 1, qualification: 'B.E' },
    { id: 2, qualification: 'B.Tech' },
    { id: 3, qualification: 'B.Sc' },
    { id: 4, qualification: 'M.Sc' },
    { id: 5, qualification: 'M.Tech' }

  ]
  constructor(private toastr: ToastrService,private employeeservice: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.defaultDropdown = 0;
  }
  insert(value) {

    this.employeeservice.onSubmit(value).subscribe(data => {
      this.toastr.success("Data inserted successfully");
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.router.navigate(['/edit',id]);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  email: string;
  password: string;
  confirmpassword: string;
  errorMessage: string;
  constructor(private service: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(value) {

    this.service.registerUser(value).subscribe(data => {
      this.router.navigate(['/']);

    }, error => {
      this.errorMessage = "User mail id is already registered";
    });
  }

}

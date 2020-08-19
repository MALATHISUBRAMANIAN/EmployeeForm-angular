import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  id: number;
  mailid: string;
  password: string;
  errorMsg: string;
  constructor(private service: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  loginUser(value) {

    this.service.loginUser(value).subscribe(data => {

      this.id = data;
      this.service.getEmployee(this.id).subscribe(data => {

        if (data != null) {
          this.router.navigate(['/edit', this.id]);
        }
        else {
          this.router.navigate(['/employee', this.id]);
        }
      });

    }, error => {
      this.errorMsg = "Username or Password is invalid!!";
    });
  }
}

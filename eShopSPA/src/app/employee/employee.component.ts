import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employee: IEmployee = {id: 0, Name: '', Email: '', Pasword: ''};

  SaveFormData(formData: NgForm) {

    this.employee = { 
                      id: 0,
                      Name: formData.value.name,
                      Email: formData.value.email,
                      Pasword: formData.value.password
                      };

    this.httpClinet.post('http://localhost:5000/api/employee', this.employee)
    .subscribe(
      (respose) => {
      console.log(respose);
       }
    );

    formData.resetForm();

  }
  constructor(private httpClinet: HttpClient) {   }

  ngOnInit() {
  }

}

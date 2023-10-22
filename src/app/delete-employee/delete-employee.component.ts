import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deleteEmployee();
    console.log("Deleted Employee with ID: " + this.id);
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.id).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    }, 
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}

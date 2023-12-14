import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Student } from "src/app/models/Student";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"]
})
export class StudentDetailsComponent implements OnInit {
  pageTitle = "Student Detail";
  errorMessage = "";
  student: Student | undefined;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    try {
      const param = this.route.snapshot.paramMap.get("id");
      if (param) {
        const id = parseInt(param);
        this.getStudent(id);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  getStudent(id: number): void {
    this.studentService.getStudent(id).subscribe(
      response => (this.student = response.result as Student),
      error => (this.errorMessage = error)
    );
  }

  onBack(): void {
    this.router.navigate(["/students"]);
  }
}
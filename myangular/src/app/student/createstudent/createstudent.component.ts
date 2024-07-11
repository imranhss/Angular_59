import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit {

  locations: Location[] = [];
  students: StudentModel[] = [];
  studentForm!: FormGroup;
  student: StudentModel = new StudentModel();


  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService,
    private formBuilder: FormBuilder
  ) {

  }


  ngOnInit(): void {
    this.loadLocation();

    this.studentForm=this.formBuilder.group({
        name:[''],
        email:[''],
        cellNo:[''],
        location: [null]

    });



  }



  loadLocation() {
    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: err => {
          console.log(err);
        }

      });

  }

  createStudent() {

    this.student.name=this.studentForm.value.name;
    this.student.email=this.studentForm.value.email;
    this.student.cellNo=this.studentForm.value.cellNo;
    this.student.location=this.studentForm.value.location;
    

    this.studentService.createStudent(this.student)
      .subscribe({
        next: res => {
          this.loadLocation();
          this.studentForm.reset();

        },

        error: err => {

          console.log(err);
        }

      });


  }




}

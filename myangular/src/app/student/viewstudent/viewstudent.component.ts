import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';
import { error } from 'console';
import { StudentModel } from '../student.model';
import { Location } from '../../location/location.model';
import { forkJoin } from 'rxjs';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {

  
  students: any;
  locations: any;

  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService,

  ) { }



  

  ngOnInit(): void {
      this.locations=this.locationService.getLocationForStudent();
      this.students=this.studentService.viewAllStudent();
  }

  

  



  

}




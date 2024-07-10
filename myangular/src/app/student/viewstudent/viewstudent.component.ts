import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';
import { error } from 'console';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {
  students: any;
  locations: any;

  constructor(
    private service: StudentserviceService,
    private locationService: LocationService,

  ) { }

  ngOnInit(): void {
    this.loadStudents();


    this.locationService.getAllLocation().subscribe(locations => {
      this.locations = locations;
    });


  }


  loadStudents() {
    this.service.viewAllStudent().subscribe(

      {

        next: students => {
          this.students = students
        },
        error: error => {
          console.error('Error fetching students', error);

        }
      }


    );
  }

  getLocationName(locationId: string): string {
    if (locationId) {
      const location = this.locations.find(
        (loc: { id: string; }) => loc.id === locationId
      );
      return location ? location.name : 'Unknown';
    }
    return 'Unknown';
  }



}

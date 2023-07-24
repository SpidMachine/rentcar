import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarService} from "./car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CHLEN';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      console.log(value)
    })
  }
}

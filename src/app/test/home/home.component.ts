import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe((data:  Array<Item>) => {
      this.items  =  data;
    }, (err) => {
      console.log(err);
    });
  }

}

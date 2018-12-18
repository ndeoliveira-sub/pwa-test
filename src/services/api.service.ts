import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  dataURL  =  ' https://nflarrest.com/api/v1/crime';

  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient.get(this.dataURL);
  }

}

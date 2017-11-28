import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ShareDataService {

  data: any = [];

  constructor() { }

  setdata(data) {
    if (data) {
      this.data = data;
      this.updateData();
    }
  }

  updateData(): Observable<any> {
    // this.data = data || false;
    return this.data;
  }

}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(environment.enpoints.user.list);
  }

  add(form){
    return this.httpClient.post(environment.enpoints.user.add,
      {
        name: form.name
      }  
    );
  }
}

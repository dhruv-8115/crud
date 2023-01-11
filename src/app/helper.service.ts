import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient, private route: Router) { }
  signup(data: any) {
    this.http.post('http://localhost:5400/user-register', data).subscribe(r => {
      console.log(r);
      localStorage.setItem("user", JSON.stringify(r))
      this.route.navigate(['list']);

    })
  }
  getdata() {


    let user = localStorage.getItem('user');
    let data = user && JSON.parse(user);
    return this.http.get(`http://localhost:5400/user-list?id=${data.id}`)
  }
  edit(data: any, id: any) {
    this.http.patch(`http://localhost:5400/user-list?id=${id}`, data).subscribe(r => {

    })
  }
  delete(id: any) {
    this.http.delete(`http://localhost:5400/user-list?id=${id}`)
  }
}

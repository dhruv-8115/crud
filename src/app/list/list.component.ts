import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user: any;
  constructor(private helper: HelperService) { }

  ngOnInit(): void {
    this.helper.getdata().subscribe(r => {
      this.user = r;
      // console.log(this.user)

    })
  }
  edit(data: any, id: any) {
    this.helper.edit(data, id);

  }
  delete(id: any) {
    this.helper.delete(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Comments } from '../modules/placeholder';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comment: Comments;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    return this.service.returnGet().subscribe((comment: Comments) => {
       console.log(comment);
       this.comment = comment;
    }, (error) => console.log(error)
    )
  }
}

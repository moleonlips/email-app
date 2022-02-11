import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-mess-list',
  templateUrl: './mess-list.component.html',
  styleUrls: ['./mess-list.component.css']
})
export class MessListComponent implements OnInit {

  constructor(
    private services: SharedService,
    private activatedRoute: ActivatedRoute,
  ) { }

  listMess: any = []

  curUser = JSON.parse(localStorage.getItem('curUser')!)

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.listMess = this.services
        .getMessages(params['param'], this.curUser)
        .sort((a, b) => {
          return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0)
        })
    })
  }

}

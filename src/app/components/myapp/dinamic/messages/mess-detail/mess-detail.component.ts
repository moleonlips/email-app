import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-mess-detail',
  templateUrl: './mess-detail.component.html',
  styleUrls: ['./mess-detail.component.css']
})
export class MessDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private services: SharedService
  ) { }

  message: any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.message = this.services.getMessageDetails(params['param']);
    })
  }
}

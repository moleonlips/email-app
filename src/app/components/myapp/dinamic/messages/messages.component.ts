import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    private service: SharedService,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) { }

  crf = ''

  folders: any = this.service.folders

  ngOnInit(): void {
    this.service.curFolder.subscribe(data => this.crf = data)

    if (this.actRoute.children.length === 0) {
      this.router.navigate([`/myapp/messages/${this.folders[0]}`])
    }
  }
}

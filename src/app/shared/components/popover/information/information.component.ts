import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  statusColors: any[] = [
    {
      color: 'success',
      text: 'Approved'
    },
    {
      color: 'warning',
      text: 'Pending'
    },
    {
      color: 'danger',
      text: 'Rejected'
    },
    {
      color: 'secondary',
      text: 'Update Request Pending'
    }
  ]

  constructor() { }

  ngOnInit() {}

}

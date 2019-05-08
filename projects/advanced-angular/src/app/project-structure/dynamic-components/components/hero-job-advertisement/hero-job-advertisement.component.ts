import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fg-hero-job-advertisement',
  templateUrl: './hero-job-advertisement.component.html',
  styleUrls: ['./hero-job-advertisement.component.scss']
})
export class HeroJobAdvertisementComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}

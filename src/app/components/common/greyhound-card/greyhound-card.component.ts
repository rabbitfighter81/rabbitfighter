import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greyhound-card',
  templateUrl: './greyhound-card.component.html',
  styleUrls: ['./greyhound-card.component.scss']
})
export class GreyhoundCardComponent implements OnInit {

  @Input() public name: string;
  @Input() public born: string;
  @Input() public passed: string;
  @Input() public image: string;
  @Input() public descriptions: string[];

  constructor() {}

  ngOnInit() {
  }

  like(): void {
    console.log('Liking ', this.name);
  }

  share(): void {
    console.log('Sharing ', this.name);
  }

}

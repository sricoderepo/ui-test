import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-block',
  templateUrl: './flow-block.component.html',
  styleUrls: ['./flow-block.component.css']
})
export class FlowBlockComponent implements OnInit {
  @Input('block') block;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-block-column',
  templateUrl: './flow-block-column.component.html',
  styleUrls: ['./flow-block-column.component.css']
})
export class FlowBlockColumnComponent implements OnInit {
  @Input('columnData') columnConfigurationData;
  columnConfigurationName;
  columnConfiguration;
  
  constructor() {
   }

  ngOnInit() {
    this.columnConfigurationName = this.columnConfigurationData.name;
    this.columnConfiguration = this.columnConfigurationData.columnItems;
  }

}

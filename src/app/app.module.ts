import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileBlockComponent } from './profile-block/profile-block.component';
import { FlowBlockComponent } from './flow-block/flow-block.component';
import { FlowBlockColumnComponent } from './flow-block/flow-block-column/flow-block-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBlockComponent,
    FlowBlockComponent,
    FlowBlockColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { OutputComponent } from './output/output.component';

import { ParentChildComponent } from './parent-child/parent-child.component';

@NgModule({
  declarations: [AppComponent, OutputComponent, ParentChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 
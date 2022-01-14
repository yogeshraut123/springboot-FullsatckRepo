import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuleModule } from './module/module.module';
import{HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './Shared/common.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,ModuleModule,HttpClientModule,ReactiveFormsModule
  ],
  
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

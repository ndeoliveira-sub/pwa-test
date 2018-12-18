import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TestRoutingModule } from './test-routing.module';
import { ApiService } from '../../services/api.service';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    ApiService
  ]
})
export class TestModule { }

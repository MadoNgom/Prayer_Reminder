import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ComponentsModule {}

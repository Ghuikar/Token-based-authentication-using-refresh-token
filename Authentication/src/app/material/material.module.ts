import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



const components=[
  MatCardModule,
  MatFormFieldModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule

    ],
    exports:[
      components
    ]
})
export class MaterialModule { }

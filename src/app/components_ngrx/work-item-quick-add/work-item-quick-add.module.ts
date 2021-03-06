import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';

import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InfotipModule } from '../infotip/infotip.module';
import { WorkItemQuickAddComponent } from './work-item-quick-add.component';

@NgModule({
  imports:      [ BsDropdownModule.forRoot(), CommonModule, FormsModule, InfotipModule ],
  declarations: [ WorkItemQuickAddComponent ],
  exports:      [ WorkItemQuickAddComponent ],
  providers:    [ BsDropdownConfig ]
})
export class WorkItemQuickAddModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule, MatCheckboxModule } from "@angular/material";

const materialModules = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules]
})
export class MaterialModule {}

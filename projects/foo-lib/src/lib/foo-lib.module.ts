import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooLibComponent } from "./foo-lib.component";
import { MybuttonComponent } from "./mybutton/mybutton.component";

@NgModule({
  declarations: [FooLibComponent, MybuttonComponent],
  imports: [CommonModule],
  exports: [FooLibComponent, MybuttonComponent]
})
export class FooLibModule {}

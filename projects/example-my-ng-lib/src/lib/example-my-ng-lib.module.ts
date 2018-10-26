import { NgModule } from '@angular/core';
import { ExampleMyNgLibComponent } from './example-my-ng-lib.component';
import { ExampleMyNgLibNewComponentComponent } from './example-my-ng-lib-new-component/example-my-ng-lib-new-component.component';

@NgModule({
  imports: [
  ],
  declarations: [ExampleMyNgLibComponent, ExampleMyNgLibNewComponentComponent],
  exports: [ExampleMyNgLibComponent, ExampleMyNgLibNewComponentComponent]
})
export class ExampleMyNgLibModule { }

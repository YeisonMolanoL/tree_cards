import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { IssuesRoutingModule } from '../routes/issues-routing.module';



@NgModule({
  declarations: [
    IssuesComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    IssuesRoutingModule
  ]
})
export default class IssuesModule { }

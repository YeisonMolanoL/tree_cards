import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Step } from '../../core/models/Step.model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements AfterViewInit {
  @Input() step!: Step;
  @Input() depth: number = 0;

  @ViewChild('nodeCard') nodeCardRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
      console.log('this.nodeCardRef :>> ', this.nodeCardRef);
  }
}

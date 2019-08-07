import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stop-training',
  template: `
    <h1 mat-dialog-title>Are you sure {{ name }}?</h1>
    <mat-dialog-content>
      <p>You already got {{ data.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
  `,
  styles: [``]
})
export class StopTrainingComponent implements OnInit {
  @Input() data;
  @Input() name;

  constructor() {}

  ngOnInit() {}
}

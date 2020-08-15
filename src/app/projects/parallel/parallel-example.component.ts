import {Component} from '@angular/core';
import {ParallelExampleService} from './parallel-example.service';

@Component({
  selector: 'fw-parallel-example',
  templateUrl: './parallel-example.component.html',
  styleUrls: ['./parallel-example.component.css']
})

export class ParallelExampleComponent {
  exampleInput = '';
  exampleResult = 'oi';
  errorMsg = '';

  constructor(private ParallelExampleService: ParallelExampleService) {
  }

  runExample(): void {
    this.ParallelExampleService.getResponse('').subscribe({
      next: res => this.exampleResult = res,
      error: err => {
        this.errorMsg = err;
        this.exampleResult = '';
      }
    });
  }
}

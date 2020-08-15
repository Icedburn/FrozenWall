import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ParallelExampleService {
  constructor(private http: HttpClient) {}
  private projectUrl = 'http://localhost:9999/';

  private static handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getResponse(textInput: string): Observable<string> {
    return this.http.get<string>(this.projectUrl + textInput)
      .pipe(
        tap(data => console.log('ParallelResponse: ' + data)),
        catchError(ParallelExampleService.handleError)
      );
  }
}

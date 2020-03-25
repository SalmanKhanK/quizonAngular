import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employe } from './employe';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  baseurl='http://localhost:3000';
    postMethod(User):Observable<Employe[]>{
      return this.http.post<Employe[]>(this.baseurl+'/client/',JSON.stringify(User),{
        headers : new HttpHeaders({
          'Content-Type':'application/json'
       })
      }).pipe(
        retry(1),
        catchError(this.errorHandl)
      )
     
    }
    getMethod():Observable<Employe[]>{
      return this.http.get<Employe[]>(this.baseurl+'/client/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }
  putMethod(id, data): Observable<Employe[]> {
      return this.http.put<Employe[]>(this.baseurl + '/client/' + id, data,{
        headers : new HttpHeaders({
          'Content-Type':'application/json'
       })
      }) .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
     
    }
    postMethodId(id,User):Observable<Employe[]>{
      return this.http.post<Employe[]>(this.baseurl+'/client/'+id,JSON.stringify(User),{
        headers : new HttpHeaders({
          'Content-Type':'application/json'
       })
      }).pipe(
        retry(1),
        catchError(this.errorHandl)
      )
     
    }
    errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private apiUrl = 'http://localhost:5000/api/prayer';
  constructor(private http: HttpClient) {}
  getAllPrayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

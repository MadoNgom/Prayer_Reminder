import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prayer } from '../model/prayer-interf';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private apiUrl = 'http://localhost:5000/api/prayer';

  constructor(private http: HttpClient) {}
  getAllPrayers(): Observable<{ status: number; data: Prayer[] }> {
    return this.http.get<{ status: number; data: Prayer[] }>(`${this.apiUrl}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../services/reminder-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  prayers: any[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.getPrayers();
  }

  getPrayers(): void {
    this.reminderService.getAllPrayers().subscribe((response) => {
      this.prayers = response.data;
    });
  }
}

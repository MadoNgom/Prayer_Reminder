import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../services/reminder-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  prayers: any[] = [];

  currentTime: string | undefined;
  showForm: boolean = false;
  isEditing: boolean = false;
  editedItemId: number | null = null;
  // TO ADD PRAYER
  name: string = '';
  completeAt: string = '';
  isComplete: boolean = false;
  prayerId: number = 0;
  // USE HTTP CLIENT MODULE
  constructor(private http: HttpClient) {}
  //LOAD DATA WHEN THE PAGE LOAD
  ngOnInit(): void {
    this.getAll();
    this.getCurrentTime();
  }
  // TO GET ALL PRAYER FROM THE SERVER
  getAll() {
    this.http
      .get('http://localhost:5000/api/prayer')
      .subscribe((result: any) => {
        this.prayers = result.data;
        console.log(result.data);
      });
  }
  // TO GET THE TIME
  getCurrentTime(): void {
    const now = new Date();
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    this.currentTime = `${hours}:${minutes}`;
  }
  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  // TO DELETE AN ITEM
  waitToDelete(item: any) {
    // WAIT FOR FEW SECONDS BEFOR ACTUALLY DELETING THE ITEM
    setTimeout(() => {
      this.deleteItem(item);
    }, 2000);
  }
  // FUNCTION THAT DELETE THE ITEM
  deleteItem(item: any) {
    this.http
      .delete(`http://localhost:5000/api/prayer/delete/${item.id}`)
      .subscribe((result: any) => {
        console.log(result);
        // Remove the deleted item from the prayers array
        this.prayers = this.prayers.filter((prayer) => prayer.id !== item.id);
      });
  }
  // HANDLE BUTTON CLICKED FUNCTION ACTION TO DO EITHER ADDING OR EDITING
  handleButtonClick() {
    if (this.isEditing) {
      this.saveChanges();
    } else {
      this.addItem();
    }
  }

  // FUNCTION TO ADD
  addItem() {
    let itemData = {
      name: this.name,
      completeAt: this.completeAt,
      isComplete: this.isComplete,
    };
    console.log('Prayer added');
    this.http
      .post('http://localhost:5000/api/prayer/add', itemData)
      .subscribe((result: any) => {
        console.log(result);
        this.prayers.push(result.data);
        // Reset input fields after adding the item
        this.name = '';
        this.completeAt = '';
      });
  }

  // TO EDIT AN ITEM
  toggleForm(): void {
    this.showForm = !this.showForm;
    this.clearForm();
  }

  toggleEditForm(item: any): void {
    if (item) {
      this.setPrayer(item); // Populate form fields with item data
      this.isEditing = true;
      this.editedItemId = item.id;
    } else {
      this.isEditing = false;
      this.editedItemId = null;
      this.clearForm();
    }
  }

  clearForm(): void {
    this.name = '';
    this.completeAt = '';
  }

  setPrayer(data: any): void {
    this.name = data.name;
    this.completeAt = data.completeAt;
  }
  saveChanges(): void {
    if (this.isEditing && this.editedItemId !== null) {
      let itemData = {
        name: this.name,
        completeAt: this.completeAt,
        isComplete: this.isComplete, // Assuming you want to keep isComplete from the original data
      };

      this.http
        .put(
          `http://localhost:5000/api/prayer/edit/${this.editedItemId}`,
          itemData
        )
        .subscribe((result: any) => {
          console.log(result);
          // Optionally, you can update the local data array with the edited item
          const editedItemIndex = this.prayers.findIndex(
            (prayer) => prayer.id === this.editedItemId
          );
          if (editedItemIndex !== -1) {
            this.prayers[editedItemIndex] = {
              ...this.prayers[editedItemIndex],
              ...itemData,
            };
          }
          this.toggleEditForm(null); // Clear the form and exit editing mode
        });
    }
  }
}

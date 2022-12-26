import { Component, OnInit } from '@angular/core';

interface DirectoryItem {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public directory: DirectoryItem[] = [];
  public new_entry: DirectoryItem = {
    name: '',
    phone: '',
  };

  ngOnInit(): void {
    const in_memory_directory = localStorage.getItem('directory');
    if (in_memory_directory) this.directory = JSON.parse(in_memory_directory);
  }

  addNewItemToDirectory(): void {
    this.directory.push(this.new_entry);
    localStorage.setItem('directory', JSON.stringify(this.directory));
    this.new_entry = {
      name: '',
      phone: '',
    };
  }

  removeItemFromDirectory(index: number): void {
    this.directory.splice(index, 1);
    localStorage.setItem('directory', JSON.stringify(this.directory));
  }
}

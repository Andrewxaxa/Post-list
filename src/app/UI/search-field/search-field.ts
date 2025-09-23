import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClearButton } from '../clear-button/clear-button';
import { SearchIcon } from '../icons/search-icon/search-icon';

@Component({
  selector: 'app-search-field',
  imports: [FormsModule, ClearButton, SearchIcon],
  templateUrl: './search-field.html',
  styleUrl: './search-field.css',
})
export class SearchField {
  readonly label = input<string>('Search');
  readonly searchChange = output<string>();

  search = signal<string>('');

  onSearchChange(value: string): void {
    this.search.set(value);
    this.searchChange.emit(value);
  }

  onClear(): void {
    this.search.set('');
    this.searchChange.emit('');
  }
}

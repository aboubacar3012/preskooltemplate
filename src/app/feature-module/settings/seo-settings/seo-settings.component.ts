import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatLegacyChipInputEvent as MatChipInputEvent } from '@angular/material/legacy-chips';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import { MatLegacyAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/legacy-autocomplete';

@Component({
  selector: 'app-seo-settings',
  templateUrl: './seo-settings.component.html',
  styleUrls: ['./seo-settings.component.scss'],
})
export class SeoSettingsComponent{
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  Keyword: string[] = ['Lorem', 'Ipsum'];
  allFruits: string[] = [];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.Keyword.push(value);
    }

    // Clear the input value
    event.chipInput?.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(Keyword: string): void {
    const index = this.Keyword.indexOf(Keyword);

    if (index >= 0) {
      this.Keyword.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Keyword.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }
}

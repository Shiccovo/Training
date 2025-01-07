import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-select-all',
  standalone: false,
  
  templateUrl: './select-all.component.html',
  styleUrl: './select-all.component.scss'
})
export class SelectAllComponent implements OnInit {
  itemList: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  form!: FormGroup;

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      selectAll: new FormControl(false),
      items: this.fb.array([]),
    });
    this.initItems();

    this.form.get('selectAll')?.valueChanges.subscribe((val: boolean) => {
      this.checkUncheckAll(val);
    });

    this.items.valueChanges.subscribe((vals: boolean[]) => {
      this.updateSelectAll(vals);
    });
  }

  initItems(): void {
    const arr = this.itemList.map(() => new FormControl(false));
    this.form.setControl('items', this.fb.array(arr));
  }

  checkUncheckAll(isChecked: boolean): void {
    this.items.controls.forEach((ctrl) => ctrl.setValue(isChecked));
  }

  updateSelectAll(vals: boolean[]): void {
    const allSelected = vals.every((v) => v === true);
    if (this.form.get('selectAll')?.value !== allSelected) {
      this.form.get('selectAll')?.setValue(allSelected, { emitEvent: false });
    }
  }

  clearAll(): void {
    this.form.get('selectAll')?.setValue(false);
    this.checkUncheckAll(false);
  }

  get selectedValues(): string[] {
    return this.items.value
      .map((v: boolean, i: number) => (v ? this.itemList[i] : null))
      .filter((x: string | null) => x !== null) as string[];
  }
}

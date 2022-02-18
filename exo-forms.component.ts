import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrls: ['./exo-forms.component.css']
})
export class ExoFormsComponent implements OnInit {
  form = new FormGroup({
    'nomproduit' : new FormControl(),
    'prixproduit' : new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const message = this.form.value.nomproduit;
    alert(message);

  }
}

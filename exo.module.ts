import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormGroup, FormsModule} from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ExoProduitsComponent } from './components/exo-produits/exo-produits.component';
import { ExoChildrenComponent } from './components/exo-children/exo-children.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoEnfant2Component } from './components/exo-enfant2/exo-enfant2.component';
import { ExoChildren2Component } from './components/exo-children2/exo-children2.component';
import { ExoFormsComponent } from './components/exo-forms/exo-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent,
    ExoProduitsComponent,
    ExoChildrenComponent,
    ExoParentComponent,
    ExoEnfant2Component,
    ExoChildren2Component,
    ExoFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }

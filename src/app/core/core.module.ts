import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
// import { EffectsModule } from '@ngrx/effects';
// import { SesionEffects } from './sesion.effects';
import { StoreModule } from '@ngrx/store';
import { sesionFeatureKey, reducer } from './state/sesion.reducer';

@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    PaginaNoEncontradaComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forFeature(sesionFeatureKey, reducer),
    // EffectsModule.forFeature([SesionEffects])
  ],
  providers: [
    SesionService
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class CoreModule {}

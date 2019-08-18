import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import {SampleModule} from './sample/sample.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { WithEventsComponent } from './with-events/with-events.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { IfComponent } from './if/if.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './reverse.pipe';
import { AppRoutesModule } from './app-routes/app-routes.module';
import {RouterModule,Routes} from '@angular/router';
import { MessengerAppComponent } from './messenger-app/messenger-app.component';
 
const myRouteConfig:Routes=[{path:"Pipes",component:PipesComponent},{path:"If/:id",component:IfComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    WithEventsComponent,
    RegistrationComponent,
    IfComponent,
    PipesComponent,
    ReversePipe,
    MessengerAppComponent
    
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutesModule,
    RouterModule.forRoot(myRouteConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//imports for components to be readible in file
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';


// Must put components into the declarations list for app to read
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

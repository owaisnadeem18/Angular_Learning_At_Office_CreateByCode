import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from "./my-component/my-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent , MyComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'props-understanding';
}

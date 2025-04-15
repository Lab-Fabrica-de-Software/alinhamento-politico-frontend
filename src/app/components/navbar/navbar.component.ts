import { Component, Input } from '@angular/core';
import { User } from "../../core/models/user";

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo: string = "";

  @Input()
  user: User = {} as User;
}

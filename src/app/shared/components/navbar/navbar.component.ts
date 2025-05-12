import { Component, Input } from '@angular/core';
import { User } from "../../../core/models/user";

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo = "";
  searchInput = "";

  @Input()
  user: User = {} as User;

  search() {
    console.log(this.searchInput);
  }

  onRedirectNotifications () {
    window.location.href = "/notifications";
  }

  onSelectOption(event: Event) {
    const target = event.target as HTMLSelectElement;
    const page = target.value;

    if (!page) {
      return;
    }

    window.location.href = page;
  }
}

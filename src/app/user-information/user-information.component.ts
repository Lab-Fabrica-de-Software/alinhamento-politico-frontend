import { Component, Input } from '@angular/core'
import { User } from '../core/models/user'

@Component({
  selector: 'app-user-information',
  standalone: false,
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent {
  @Input()
  user!: User;

  @Input()
  actionDate?: Date;

  @Input()
  isHorizontal: boolean = false;

  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  get timePassed(): string | undefined {
    if (this.actionDate) {
      const now = new Date();
      const diffMs = now.getTime() - this.actionDate.getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);
      const diffMonths = now.getMonth() - this.actionDate.getMonth() +
        (12 * (now.getFullYear() - this.actionDate.getFullYear()));

      if (diffMins < 60) {
        return `Há ${diffMins} minuto${diffMins === 1 ? '' : 's'}`;
      }
      if (diffHours < 24) {
        return `Há ${diffHours} hora${diffHours === 1 ? '' : 's'}`;
      }
      if (diffDays < 30) {
        return `Há ${diffDays} dia${diffDays === 1 ? '' : 's'}`;
      }
      if (now.getFullYear() === this.actionDate.getFullYear()) {
        return `Há ${diffMonths} m${diffMonths === 1 ? 'ê' : 'e'}s${diffMonths === 1 ? '' : 'es'}`;
      }

      return this.actionDate.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    }

    return undefined;
  }
}

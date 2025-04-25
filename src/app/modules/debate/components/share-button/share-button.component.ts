import { Component, inject, Input, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-share-button',
  standalone: false,
  templateUrl: './share-button.component.html',
  styleUrl: './share-button.component.css'
})
export class ShareButtonComponent {
	
  @Input() size?: string = '1rem';
  @Input() color?: string = '#000';

  private modalService = inject(NgbModal);

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
	}
}

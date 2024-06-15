import { Component,  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToasterService } from 'src/app/core/core.index';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
 
export class NotificationComponent  {
  modalRef?: BsModalRef;
  modalRef2?: BsModalRef;
  constructor(public modalService: BsModalService,private toast: ToasterService) { }
  openModal(template: TemplateRef<string>) {
    this.modalRef = this.modalService.show(template);
  }
  cancel(): void {
    this.toast.typeError('Your Imaginary file is safe :)', 'Canceled');
  }
  confirm(): void {
    this.toast.typeSuccess('Your Imaginary file is removed :)', 'Completed');
  }

  public typeSuccess() {
    this.toast.typeSuccess('Have fun storming the castle!', 'Toaster fun!');
  }
  public typeInfo() {
    this.toast.typeInfo('Have fun storming the castle!', 'Toaster fun!');
  }

  public typeWarning() {
    this.toast.typeWarning('Have fun storming the castle!', 'Toaster fun!');
  }

  public typeError() {
    this.toast.typeError('Have fun storming the castle!', 'Toaster fun!');
  }

}

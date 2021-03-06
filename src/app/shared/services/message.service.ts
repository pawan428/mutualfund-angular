import { Injectable, EventEmitter, Output } from '@angular/core';
import { ResponseModel } from 'src/app/models/response';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ThemeSettingComponent } from 'src/app/components/_layout/theme-setting/theme-setting.component';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  @Output() globalMessage: EventEmitter<ResponseModel> = new EventEmitter();

  constructor() { }
  reset() {
    this.globalMessage.next(null);
  }
  showMessage(error) {
    let em: ResponseModel = error;
    if (error.status === 0 || error.status === 500) {
      em.message = "Internal Server Error"; //set common error
    }
    if (error.ok) { // for success
      setTimeout(() => {
        this.reset()
      }, 3000);
    }
    else { // for http error response
      em.message = error.error;
    }
    this.globalMessage.next(em);
  }
}

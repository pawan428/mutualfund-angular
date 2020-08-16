import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { error } from 'protractor';
import { throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';

@Injectable()
export class UsernameValidator {

    debouncer: any;

    constructor(private loaderService: LoaderService, private userService: UserService, private errorService: ErrorService) {

    }

    checkAvailability(control: FormControl): any {

        clearTimeout(this.debouncer);
        let ref = this;
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.loaderService.show('Checking Availability', false);
                this.userService.getUserByEmail(control.value).subscribe(avl => {
                    if (avl) {
                        resolve({ 'emailInUse': true });
                    }
                    else {
                        resolve(null);
                    }
                    ref.loaderService.hide();
                }
                , err => {
                    ref.loaderService.hide();
                    this.errorService.catchError(err);

                })
            }, 1000);
        })
    }

}

import { ComponentDriver } from 'angular-unit-component-driver';
import { AddWordFormComponent } from './add-word-form.component';

export class AddWordFormComponentDriver extends ComponentDriver<AddWordFormComponent> {
    get formElement() {
        return this.querySelector('.my-form');
    }

    get buttonElements() {
        return this.querySelectorAll<HTMLButtonElement>('button')
    }
}
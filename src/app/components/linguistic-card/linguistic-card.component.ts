import { Component, OnInit,Input, OnChanges, SimpleChanges, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileBasedAnimationConfig } from 'src/app/models/FileBasedAnimationConfig';
import { FileBasedAvatarFiles } from 'src/app/models/FileBasedAvatarFiles';
import { FileMetadata } from 'src/app/models/FileMetadata';
import { Word } from 'src/app/models/word';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/client.service';
import { StemmingBasedTranslationParams } from 'src/app/models/StemmingBasedTranslationParams';
import { Status } from '../../models/status';
import { handleVars } from 'src/app/models/VarsHandler';

@Component({
  selector: 'app-linguistic-card',
  templateUrl: './linguistic-card.component.html',
  styleUrls: ['./linguistic-card.component.css']
})
export class LinguisticCardComponent implements OnInit,OnChanges {
    checkForSave() {
    if(this.form.touched && this.form.valid) {
      return false;
    } else {
      return true;
    }
  }


  form: FormGroup<any>;
  @Input() word: Partial<Word> = {} ;
  @ViewChild('content') content : any;
  @Output() saveEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();

  fileURL: any;

  isTouched() {
    return this.form.touched;
  }

  callWarning(){
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				switch (result) {
          case 'ok':
            this.form.reset();
            this.cancelEvent.emit();
            break;
          case 'cancel':
            console.log('return');
            break;
        }
			},
			(reason) => {
				console.log(`return`);
			},
		);
  }

  cancel(dialog : any) {

    this.modalService.open(dialog, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				switch (result) {
          case 'ok':
            this.form.reset();
            this.cancelEvent.emit();
            break;
          case 'cancel':
            console.log('return');
            break;
        }
			},
			(reason) => {
				console.log(`return`);
			},
		);
  }



  submitForm() {
    if(this.form.valid) {
      this.word.title = this.form.get('title')?.value;
      this.word.definition = this.form.get('definition')?.value;
      (this.word.translationParams as StemmingBasedTranslationParams).variations = handleVars(this.form.get('variations')?.value);
      this.word.notes = this.form.get('notes')?.value;
      this.word.validation = {"BATCH_ID":{
        ...this.getStatusFromValidationState()
      }}
      // this.word.validation = this.form.get('validatetion')?.value; //
      this.client.updateWord(this.word).subscribe(
        (data) => {
          this.updateForm(this.form);
          this.saveEvent.emit();
        }
      )
    }
    console.log(this.word);
  }
  getStatusFromValidationState(): { notes?: string | undefined; status: import("../../models/status").Status; } {
    switch(this.form.get('validate')?.value) {
      case true:
        return {status : Status.approved , notes : this.form.get('notes')?.value};
      case false:
        return {status: Status.rejected, notes : this.form.get('notes')?.value}
      default:
        return {status : Status.pending, notes : this.form.get('notes')?.value}
    }
  }
  updateForm(form: FormGroup<any>) {
    form.markAsPristine();
    form.markAsUntouched();
  }

  constructor(private fb : FormBuilder,private client :ClientService, private router  : Router,private modalService : NgbModal) {
    this.fileURL = (((this.word.sign?.animation as FileBasedAnimationConfig).avatars["a289ee5f-9a73-44db-b802-44e1ae596cd1"]as FileBasedAvatarFiles).webp?.['_720x720'] as FileMetadata ).url;
    
      this.form = this.fb.group({
        title : ['' , Validators.required],
        definition : ['', Validators.required],
        variations : [[], Validators.required],
        notes : [''],
        validate: [false]
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["word"].currentValue.title) {
      this.form.get('title')?.setValue(changes["word"].currentValue.title);
      this.form.get('definition')?.setValue(changes["word"].currentValue.definition);
      this.form.get('variations')?.setValue((changes["word"].currentValue.translationParams).variations);
      this.form.get('notes')?.setValue(changes["word"].currentValue.notes);
      this.form.get('validate')?.setValue(this.getValidationState(changes["word"].currentValue.validation));
    }
  }

  getValidationState(validation: any): any {
    if(validation) {
      if(validation.BATCH_ID?.status === Status.approved) {
        return true;
      } else if(validation.BATCH_ID.status === Status.rejected) {
        return false;
      } else {
        return null;
      }
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}

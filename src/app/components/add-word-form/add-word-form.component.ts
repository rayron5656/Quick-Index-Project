import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileBasedAnimationConfig } from 'src/app/models/FileBasedAnimationConfig';
import { StemmingBasedTranslationParams } from 'src/app/models/StemmingBasedTranslationParams';
import { Word } from 'src/app/models/word';
import { ClientService } from 'src/app/services/client.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-word-form',
  templateUrl: './add-word-form.component.html',
  styleUrls: ['./add-word-form.component.css']
})
export class AddWordFormComponent implements OnInit {

  fileName: string = "please select a file";
  
  fileUrl: string = "please select a file";

  stagedAvatar = "a289ee5f-9a73-44db-b802-44e1ae596cd1";
  deafultAvatar = "5f123ef5-2852-4d48-b355-a6f14485c750";

  searchForm: FormGroup;
  
  form: FormGroup ;
  
  stemmingBasedTranslationParams: StemmingBasedTranslationParams = {
    type: 'stemming-based',
    variations: [],
    baseForm: '' //title
  };
  
  newAnimationConfig : FileBasedAnimationConfig = {
    type: 'file-based',
    avatars: { 
      '5f123ef5-2852-4d48-b355-a6f14485c750' : {
        webp : {
          _720x720 : {
            url: '',
            name: '',
            createdAt: 0,
          },
        }
      }
    },
    supportedAvatars: ["5f123ef5-2852-4d48-b355-a6f14485c750"]
  }
  
  word : Word = {
  _id : "",
  spokenLanguageId : "023a7327-d866-499c-b1cd-61b4faab3ae1",
  signLanguageId : "fb802e-6584-464f-ae7c-0e39252ecd6d",
  definition : "",
  status : "",
  categories : [""],
  title : "",
  validation : {},
  sign :{
    animation : this.newAnimationConfig as FileBasedAnimationConfig,
  },
  translationParams :  this.stemmingBasedTranslationParams as StemmingBasedTranslationParams,
  createdAt : 0,
  updatedBy : "",
  notes : "",
  }


  
  uploadFile($event: Event) {
  const element = $event.currentTarget as HTMLInputElement;
  let file: FileList | null = element.files;
  console.log(file);
  if (file) {
    this.clientService.uploadFileToStaged(this.createFormData(file[0])).subscribe((res : any) => {
      console.log(res);
      this.fileName = res.fileName;
      this.fileUrl = res.url;
      this.form.patchValue({
        fileName: this.fileName,
        fileUrl: this.fileUrl
        
      });
    });
  }
}

createFormData(arg0: File): FormData {
    const formData = new FormData();
    formData.append('file', arg0);
    console.log(formData);
    return formData;
  }
  
  
  
  constructor(
    public fb: FormBuilder,
    private clientService: ClientService
  ) { 
    
    this.form = this.fb.group({
      fileName:   [{value: 'please select a file', disabled: true},Validators.required],
      fileUrl : [{value: 'please select a file', disabled: true},Validators.required],
      definition : ["",Validators.required],
      status : ["",Validators.required],
      categories : ["",Validators.required],
      title : ["",Validators.required],
      updatedBy : [""],
      variations : [],
      baseForm : [""]
    });
    
    
    this.searchForm = this.fb.group({
      search: [""]
    });
    
    this.form.valueChanges.subscribe(() => {
      if (this.word.sign && this.word.translationParams && this.newAnimationConfig.avatars['5f123ef5-2852-4d48-b355-a6f14485c750'].webp && this.newAnimationConfig.avatars['5f123ef5-2852-4d48-b355-a6f14485c750'].webp['_720x720']) {
        this.fileName = this.form.get('fileName')?.value;
        this.fileUrl = this.form.get('fileUrl')?.value;
        this.word.title = this.form.get('title')?.value;
        this.word.definition = this.form.get('definition')?.value;
        this.word.status = this.form.get('status')?.value;
        this.word.categories = this.form.get('categories')?.value.split(',');
        this.stemmingBasedTranslationParams.variations = this.form.get('variations')?.value?.split(',').map((variation: string) => variation.trim());
        this.stemmingBasedTranslationParams.baseForm = this.form.get('baseForm')?.value.length > 0? this.form.get('baseForm')?.value :  this.form.get('title')?.value;
        this.word.translationParams = this.stemmingBasedTranslationParams;
        this.newAnimationConfig.avatars['5f123ef5-2852-4d48-b355-a6f14485c750'].webp["_720x720"]['url'] = this.form.get('fileUrl')?.value;
        this.newAnimationConfig.avatars['5f123ef5-2852-4d48-b355-a6f14485c750'].webp["_720x720"]['name'] = this.form.get('fileName')?.value;
        this.word.sign.animation = this.newAnimationConfig
        this.word.updatedBy = "ron patashnik";
        this.word.createdAt = Date.now();
        this.word._id = uuidv4();
      }
      console.log(this.word);
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.word);
    this.clientService.addWord(this.word).subscribe((res : any) => {
      console.log(res);
      location.reload();
    });
  }

}

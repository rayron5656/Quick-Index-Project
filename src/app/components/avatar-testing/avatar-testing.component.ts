import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from 'src/app/models/word';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-avatar-testing',
  templateUrl: './avatar-testing.component.html',
  styleUrls: ['./avatar-testing.component.css']
})
export class AvatarTestingComponent implements OnInit {
  form: FormGroup;

  safetyBool : boolean = true;

  load1: boolean = true;
  load2: boolean = true;
  load3: boolean = true;
  load4: boolean = true;
  load5:  boolean = true;

  thereIs : any
  toYou : any
  lots : any
  work : any
  toDo : any

  submitForm() {
    console.log("submitForm");
    this.setSafety();
    this.clientService.updateWord(this.thereIs).subscribe((res : any) => {
      this.clientService.updateWord(this.toYou).subscribe((res : any) => {
        this.clientService.updateWord(this.lots).subscribe((res : any) => {
          this.clientService.updateWord(this.work).subscribe((res : any) => {
            this.clientService.updateWord(this.toDo).subscribe((res : any) => {
              this.setSafety();
              console.log("done");
              console.log(this.form.get('avatarId')?.value);
              this.form.reset();
              this.ngOnInit();
            });
          });
        });
      });
    });
  }


  


  setSafety(){
    this.safetyBool = !this.safetyBool;
  }

  uploadFileThereIs($event: Event) {
    this.load1 = false;
    var id = "00739587-7dd2-47c0-b2e4-e01c51bfa3b2";
    console.log("there is");
    const element = $event.currentTarget as HTMLInputElement;
    let file: FileList | null = element.files;
    console.log(file);
    if (file) {
    this.clientService.uploadFileToTesting(this.createFormData(file[0])).subscribe((res : any) => {
      console.log(res);
      this.thereIs.sign.animation.supportedAvatars.push(this.form.get('avatarId')?.value);
      this.thereIs.sign.animation.avatars[this.form.get('avatarId')?.value] = {
        webp : {
          _720x720 : {
            url: res.url,
            name: res.fileName,
            createdAt : Date.now()
        }
      }};
      console.log("this.thereIs");
      console.log(this.thereIs);
      this.load1 = true;
    });
  }
}
uploadFiletoYou($event: Event) {
  this.load2 = false;
  var id = "9077d017-f9a7-4058-be33-69c673bd022a";
  console.log("to you");
  const element = $event.currentTarget as HTMLInputElement;
  let file: FileList | null = element.files;
  console.log(file);
  if (file) {
  this.clientService.uploadFileToTesting(this.createFormData(file[0])).subscribe((res : any) => {
    console.log(res);
    this.toYou.sign.animation.supportedAvatars.push(this.form.get('avatarId')?.value);
    this.toYou.sign.animation.avatars[this.form.get('avatarId')?.value] = {
      webp : {
        _720x720 : {
          url: res.url,
          name: res.fileName,
          createdAt : Date.now()
      }
    }};
    console.log("this.toYou");
    console.log(this.toYou);
    this.load2 = true;
  });
}
}
uploadFileLots($event: Event) {
  this.load3 = false;
  var id = "19c05570-0f55-4108-9e70-b1a5f72b7ccc";
  console.log("lots");
  const element = $event.currentTarget as HTMLInputElement;
  let file: FileList | null = element.files;
  console.log(file);
  if (file) {
  this.clientService.uploadFileToTesting(this.createFormData(file[0])).subscribe((res : any) => {
    console.log(res);
    this.lots.sign.animation.supportedAvatars.push(this.form.get('avatarId')?.value);
    this.lots.sign.animation.avatars[this.form.get('avatarId')?.value] = {
      webp : {
        _720x720 : {
          url: res.url,
          name: res.fileName,
          createdAt : Date.now()
      }
    }};
    console.log("this.lots");
    console.log(this.lots);
    this.load3 = true;
  });
}
}
uploadFileWork($event: Event) {
  this.load4 = false;
  var id = "d7ec5e13-9303-4da8-8f57-4fb444371578";
  console.log("work");
  const element = $event.currentTarget as HTMLInputElement;
  let file: FileList | null = element.files;
  console.log(file);
  if (file) {
  this.clientService.uploadFileToTesting(this.createFormData(file[0])).subscribe((res : any) => {
    console.log(res);
    this.work.sign.animation.supportedAvatars.push(this.form.get('avatarId')?.value);
    this.work.sign.animation.avatars[this.form.get('avatarId')?.value] = {
      webp : {
        _720x720 : {
          url: res.url,
          name: res.fileName,
          createdAt : Date.now()
      }
    }};
    console.log("this.work");
    console.log(this.work);
    this.load4 = true;
  });
}
}

uploadFileToDo($event: Event) {
  this.load5 = false;
  var id = "6fd2652c-2334-42ca-9fec-7a5d7a529b38";
  console.log("to do");
  const element = $event.currentTarget as HTMLInputElement;
  let file: FileList | null = element.files;
  console.log(file);
  if (file) {
  this.clientService.uploadFileToTesting(this.createFormData(file[0])).subscribe((res : any) => {
    console.log(res);
    this.toDo.sign.animation.supportedAvatars.push(this.form.get('avatarId')?.value);
    this.toDo.sign.animation.avatars[this.form.get('avatarId')?.value] = {
      webp : {
        _720x720 : {
          url: res.url,
          name: res.fileName,
          createdAt : Date.now()
      }
    }};
    console.log("this.toDo");
    console.log(this.toDo);
    this.load5 = true;
  });
}
}

  createFormData(arg0: File): FormData {
    const formData = new FormData();
    formData.append('file', arg0);
    console.log(formData);
    return formData;
  }

  constructor(private clientService : ClientService, private fb : FormBuilder) {
    this.form = this.fb.group({
      avatarId : ["",Validators.required],
    })
  }

  ngOnInit(): void {
    this.clientService.getWordByTitle("יש").subscribe((res : any) => {
      this.thereIs = res;
      console.log(this.thereIs);
    });
    this.clientService.getWordByTitle("לכם").subscribe((res : any) => {
      this.toYou = res;
      console.log(this.toYou);
    });
    this.clientService.getWordByTitle("המון").subscribe((res : any) => {
      this.lots = res;
      console.log(this.lots);
    });
    this.clientService.getWordByTitle("עבודה").subscribe((res : any) => {
      this.work = res;
      console.log(this.work);
    });
    this.clientService.getWordByTitle("לעשות").subscribe((res : any) => {
      this.toDo = res;
      console.log(this.toDo);
    });
  }
}

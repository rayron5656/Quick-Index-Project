import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AddWordFormComponent } from './add-word-form.component';

describe('AddWordFormComponent', () => {
  let component: AddWordFormComponent;
  let fixture: ComponentFixture<AddWordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordFormComponent ],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 8 controls', () => {
    expect(component.form.controls['fileUrl']).toBeTruthy();
    expect(component.form.controls['fileName']).toBeTruthy();
    expect(component.form.controls['definition']).toBeTruthy();
    expect(component.form.controls['status']).toBeTruthy();
    expect(component.form.controls['categories']).toBeTruthy();
    expect(component.form.controls['title']).toBeTruthy();
    expect(component.form.controls['variations']).toBeTruthy();
    expect(component.form.controls['updatedBy']).toBeTruthy();
    expect(component.form.controls['fileUrl'].disabled).toBe(true);
    expect(component.form.controls['fileName'].disabled).toBe(true);
    expect(component.form.controls['fileUrl'].value).toBe("please select a file");
    expect(component.form.controls['fileName'].value).toBe("please select a file");
    expect(component.form.controls['definition'].value).toBe("");
    expect(component.form.controls['status'].value).toBe("");
    expect(component.form.controls['categories'].value).toBe("");
    expect(component.form.controls['title'].value).toBe("");
    expect(component.form.controls['variations'].value).toBe(null);
    expect(component.form.controls['updatedBy'].value).toBe('');
  });

  it('fileName should be equal to control fileName',() =>{
    component.form.controls['fileName'].setValue('test');
    expect(component.fileName).toBe('test');
  });

  it('fileUrl should be equal to control fileUrl',() =>{
    component.form.controls['fileUrl'].setValue('test');
    expect(component.fileUrl).toBe('test');
  });

  it('should create formData',() =>{
    const formData = new FormData();
    formData.append('file', new File(['test'], 'test'));
    expect(component.createFormData(new File(['test'], 'test'))).toEqual(formData);
  })

  it('should emit event after file dropped',() =>{
    const fileDropArea = document.getElementById('fileDropArea');
    expect(fileDropArea).toBeTruthy();
    if (fileDropArea?.eventListeners != undefined) {
      const event = new Event('fileDropped');
      fileDropArea.dispatchEvent(event);
    }
  })

});

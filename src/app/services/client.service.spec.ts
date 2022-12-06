import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        HttpTestingController,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ClientService);
    
  });

  it('should be created', inject([HttpTestingController,ClientService],(httpMock: HttpTestingController, clientService: ClientService) =>{
    expect(clientService).toBeTruthy();
  }));
});

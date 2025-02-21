import { TestBed } from '@angular/core/testing';

import { NgUiService } from './ng-ui.service';

describe('NgUiService', () => {
  let service: NgUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

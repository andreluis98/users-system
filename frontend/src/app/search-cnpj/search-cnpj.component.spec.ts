import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCnpjComponent } from './search-cnpj.component';

describe('SearchCnpjComponent', () => {
  let component: SearchCnpjComponent;
  let fixture: ComponentFixture<SearchCnpjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCnpjComponent]
    });
    fixture = TestBed.createComponent(SearchCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

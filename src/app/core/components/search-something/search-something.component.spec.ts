import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSomethingComponent } from './search-something.component';

describe('SearchSomethingComponent', () => {
  let component: SearchSomethingComponent;
  let fixture: ComponentFixture<SearchSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

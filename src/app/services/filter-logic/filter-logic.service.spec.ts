import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLogicService } from './filter-logic.service';

describe('FilterLogicService', () => {
  let component: FilterLogicService;
  let fixture: ComponentFixture<FilterLogicService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterLogicService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterLogicService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

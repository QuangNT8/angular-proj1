import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProfileAdComponent } from './hero-profile-ad.component';

describe('HeroProfileAdComponent', () => {
  let component: HeroProfileAdComponent;
  let fixture: ComponentFixture<HeroProfileAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroProfileAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProfileAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

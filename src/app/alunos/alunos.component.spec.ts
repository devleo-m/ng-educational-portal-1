import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosComponent } from './alunos.component';

describe('AlunosComponent', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecursoComponent } from './detallecurso.component';

describe('DetallecursoComponent', () => {
  let component: DetallecursoComponent;
  let fixture: ComponentFixture<DetallecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallecursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

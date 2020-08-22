import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GamelistComponent } from './gamelist.component';

describe('GamelistComponent', () => {
  let component: GamelistComponent;
  let fixture: ComponentFixture<GamelistComponent>;
  let service: GamelistComponent;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelistComponent ],
      imports: [ HttpClientModule ],
      providers: [GamelistComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(GamelistComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

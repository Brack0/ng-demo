import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SvgRegistryService } from '../../services/svg-registry.service';
import { Svg } from '../../svg';
import { SvgSymbolsComponent } from './svg-symbols.component';

describe('SvgSymbolsComponent', () => {
  let component: SvgSymbolsComponent;
  let fixture: ComponentFixture<SvgSymbolsComponent>;
  let svgRegistryService: SvgRegistryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgSymbolsComponent],
      providers: [
        {
          provide: SvgRegistryService,
          useValue: {
            getSvgs: () => of([]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSymbolsComponent);
    component = fixture.componentInstance;
    svgRegistryService = TestBed.inject(SvgRegistryService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should be empty when no svg loaded', () => {
      fixture.detectChanges();
      expect(fixture.nativeElement.innerHTML).toEqual('');
    });

    it('should have one svg in HTML when one svg loaded', () => {
      svgRegistryService.getSvgs = () => of([{ name: 'svg1', data: '<svg>1</svg>' }] as unknown as Svg[]);
      fixture.detectChanges();
      expect(fixture.nativeElement.innerHTML).toEqual('<svg>1</svg>');
    });

    it('should have multiple svg in HTML when multiple svg loaded', () => {
      svgRegistryService.getSvgs = () =>
        of([
          { name: 'svg1', data: '<svg>1</svg>' },
          { name: 'svg2', data: '<svg>2</svg>' },
          { name: 'svg3', data: '<svg>3</svg>' },
        ] as unknown as Svg[]);
      fixture.detectChanges();
      expect(fixture.nativeElement.innerHTML).toEqual('<svg>1</svg><svg>2</svg><svg>3</svg>');
    });
  });
});

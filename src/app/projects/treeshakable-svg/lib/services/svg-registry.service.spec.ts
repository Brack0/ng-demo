import { TestBed } from '@angular/core/testing';
import { Svg } from '../svg';
import { SvgRegistryService } from './svg-registry.service';

describe('SvgRegistryService', () => {
  let svgRegistryService: SvgRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgRegistryService],
    });
    svgRegistryService = TestBed.inject(SvgRegistryService);
  });

  describe('registerSvgs', () => {
    it('should register new SVGs', (done) => {
      svgRegistryService.registerSvgs([
        { name: 'svg1', data: '<svg>1</svg>' },
        { name: 'svg2', data: '<svg>2</svg>' },
        { name: 'svg3', data: '<svg>3</svg>' },
      ] as unknown as Svg[]);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      svgRegistryService['registry'].subscribe((registry) => {
        expect(registry as unknown).toEqual({
          svg1: {
            name: 'svg1',
            data: '<svg>1</svg>',
          },
          svg2: {
            name: 'svg2',
            data: '<svg>2</svg>',
          },
          svg3: {
            name: 'svg3',
            data: '<svg>3</svg>',
          },
        });
        done();
      });
    });
  });

  describe('getSvgs', () => {
    it('should get existing SVGs', (done) => {
      svgRegistryService.registerSvgs([
        { name: 'svg1', data: '<svg>1</svg>' },
        { name: 'svg2', data: '<svg>2</svg>' },
        { name: 'svg3', data: '<svg>3</svg>' },
      ] as any);
      svgRegistryService.getSvgs().subscribe((svgs) => {
        expect(svgs as unknown).toEqual([
          { name: 'svg1', data: '<svg>1</svg>' },
          { name: 'svg2', data: '<svg>2</svg>' },
          { name: 'svg3', data: '<svg>3</svg>' },
        ]);
        done();
      });
    });
  });
});

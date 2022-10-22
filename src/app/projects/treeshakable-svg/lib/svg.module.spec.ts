/* eslint-disable max-classes-per-file */
import { Component, NgModule, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscription } from 'rxjs';

import { SvgRegistryService } from './services/svg-registry.service';
import { Svg } from './svg';
import { SvgModule } from './svg.module';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection, @angular-eslint/use-component-selector
@Component({ template: "{{'test' }}" })
class TestComponent {}

@NgModule({
  declarations: [TestComponent],
})
class TestModule {}

@NgModule({
  imports: [
    TestModule,
    SvgModule.forRoot([{ name: 'svgRoot', data: '<svg>root</svg>' }] as unknown as Svg[]),
    RouterModule.forChild([{ path: '', component: TestComponent }]),
  ],
})
class SvgRootModule {}

@NgModule({
  imports: [
    TestModule,
    SvgModule.forChild([{ name: 'svg1', data: '<svg>1</svg>' }] as unknown as Svg[]),
    RouterModule.forChild([{ path: '', component: TestComponent }]),
  ],
})
class SvgChild1Module {}

@NgModule({
  imports: [
    TestModule,
    SvgModule.forChild([{ name: 'svg2', data: '<svg>2</svg>' }] as unknown as Svg[]),
    RouterModule.forChild([{ path: '', component: TestComponent }]),
  ],
})
class SvgChild2Module {}

@NgModule({
  imports: [SvgModule.forChild([{ name: 'svgImported', data: '<svg>imported</svg>' }] as unknown as Svg[])],
})
class SvgImportedModule {}

@NgModule({
  imports: [
    SvgImportedModule,
    SvgModule.forChild([{ name: 'svg3', data: '<svg>3</svg>' }] as unknown as Svg[]),
    TestModule,
    RouterModule.forChild([{ path: '', component: TestComponent }]),
  ],
})
class SvgChild3Module {}

describe('SvgModule', () => {
  let svgRegistryService: SvgRegistryService;
  let router: Router;
  let ngZone: NgZone;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SvgModule.forRoot([{ name: 'svgRoot', data: '<svg>root</svg>' }] as unknown as Svg[]),
        RouterTestingModule.withRoutes([
          { path: 'root', loadChildren: () => SvgRootModule },
          { path: 'child1', loadChildren: () => SvgChild1Module },
          { path: 'child2', loadChildren: () => SvgChild2Module },
          { path: 'child3', loadChildren: () => SvgChild3Module },
        ]),
      ],
      teardown: { destroyAfterEach: false },
    });
    svgRegistryService = TestBed.inject(SvgRegistryService);
    router = TestBed.inject(Router);
    ngZone = TestBed.inject(NgZone);

    subscription = new Subscription();
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  it('should register root SVGs', (done) => {
    subscription.add(
      svgRegistryService.getSvgs().subscribe((svgs) => {
        expect(svgs as unknown).toEqual([
          {
            name: 'svgRoot',
            data: '<svg>root</svg>',
          },
        ]);
        done();
      })
    );
  });

  it('should throw error when multiple forRoot call', (done) => {
    ngZone.run(() => {
      router.navigateByUrl('/root').catch((err) => {
        expect(err.message).toBe(
          'SvgModule.forRoot() called twice. Submodules and lazy-loaded submodules should use SvgModule.forChild() instead.'
        );
        done();
      });
    });
  });

  it('should register SVGs from lazy-loaded module', (done) => {
    ngZone.run(async () => {
      await router.navigateByUrl('/child1');
      subscription.add(
        svgRegistryService.getSvgs().subscribe((svgs) => {
          expect(svgs as unknown).toEqual([
            {
              name: 'svgRoot',
              data: '<svg>root</svg>',
            },
            { name: 'svg1', data: '<svg>1</svg>' },
          ]);
          done();
        })
      );
    });
  });

  it('should register SVGs from multiple lazy-loaded module', (done) => {
    ngZone.run(async () => {
      await router.navigateByUrl('/child1');
      await router.navigateByUrl('/child2');
      subscription.add(
        svgRegistryService.getSvgs().subscribe((svgs) => {
          expect(svgs as unknown).toEqual([
            {
              name: 'svgRoot',
              data: '<svg>root</svg>',
            },
            { name: 'svg1', data: '<svg>1</svg>' },
            { name: 'svg2', data: '<svg>2</svg>' },
          ]);
          done();
        })
      );
    });
  });

  it('should register SVGs from imported module', (done) => {
    ngZone.run(async () => {
      await router.navigateByUrl('/child3');

      subscription.add(
        svgRegistryService.getSvgs().subscribe((svgs) => {
          expect(svgs as unknown).toEqual([
            {
              name: 'svgRoot',
              data: '<svg>root</svg>',
            },
            { name: 'svgImported', data: '<svg>imported</svg>' },
            { name: 'svg3', data: '<svg>3</svg>' },
          ]);
          done();
        })
      );
    });
  });
});

import { CommonModule } from '@angular/common';
import type { ModuleWithProviders } from '@angular/core';
import { Inject, InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { SvgSymbolsComponent } from './components/svg-symbols/svg-symbols.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgRegistryService } from './services/svg-registry.service';
import type { Svg } from './svg';

export const SVG_FORROOT_GUARD = new InjectionToken<void>('SVG_FORROOT_GUARD');
export const SVGS = new InjectionToken<Svg[][]>('SVGS');

@NgModule({
  imports: [CommonModule],
  exports: [SvgComponent, SvgSymbolsComponent],
  declarations: [SvgComponent, SvgSymbolsComponent],
})
export class SvgModule {
  constructor(
    svgRegistry: SvgRegistryService,
    @Inject(SVGS) svgsInjected: Svg[][],
    @Optional()
    @Inject(SVG_FORROOT_GUARD)
    _guard: unknown
  ) {
    svgRegistry.registerSvgs(svgsInjected.flat());
  }

  /**
   * Creates and configures a module with all the SVG providers and components.
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [SvgModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param svgs An array of `SVG` objects that define the SVGs used in the application.
   */
  public static forRoot(svgs: Svg[]): ModuleWithProviders<SvgModule> {
    return {
      ngModule: SvgModule,
      providers: [
        SvgRegistryService,
        { provide: SVGS, useValue: svgs, multi: true },
        {
          provide: SVG_FORROOT_GUARD,
          useFactory: provideForRootGuard,
          deps: [[SvgRegistryService, new Optional(), new SkipSelf()]],
        },
      ],
    };
  }

  /**
   * Creates a module with all the SVG components and a provider registering SVGs,
   * without creating a new SvgRegistryService.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [SvgModule.forChild(SVGs)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param svgs An array of `SVG` objects that define the SVGs used in the module.
   */
  public static forChild(svgs: Svg[]): ModuleWithProviders<SvgModule> {
    return {
      ngModule: SvgModule,
      providers: [{ provide: SVGS, useValue: svgs, multi: true }],
    };
  }
}

/**
 * Prevent duplicate SvgModule.forRoot() call in the app
 */
export function provideForRootGuard(svgRegistryService?: SvgRegistryService): string {
  if (svgRegistryService) {
    throw new Error(
      `SvgModule.forRoot() called twice. Submodules and lazy-loaded submodules should use SvgModule.forChild() instead.`
    );
  }
  return 'guarded';
}

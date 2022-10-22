import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgDemoSvg, Svg } from '../svg';

/**
 * Key-value data structure to ease duplication handling
 */
type SvgRegistry = Partial<Record<NgDemoSvg, Svg>>;

@Injectable()
export class SvgRegistryService {
  private registry = new BehaviorSubject<SvgRegistry>({});

  /**
   * Register new SVGs in the app
   * @param svgs Array of SVG to add in the app
   */
  public registerSvgs(svgs: Svg[]): void {
    const registry = this.registry.getValue();

    svgs.forEach((svg) => {
      registry[svg.name] = svg;
    });

    this.registry.next(registry);
  }

  /**
   * A observable that emits an event every time the value of the loaded SVGs changes
   */
  public getSvgs(): Observable<Svg[]> {
    return this.registry.pipe(map((registry) => Object.values(registry)));
  }
}

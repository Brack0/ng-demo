import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SvgRegistryService } from '../../services/svg-registry.service';

@Component({
  selector: 'ts-svg-symbol',
  template: '',
  styles: [':host { display: none }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSymbolsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(private elementRef: ElementRef, private svgRegistry: SvgRegistryService) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.svgRegistry.getSvgs().subscribe((svgs) => {
        /**
         * Inject SVGs in vanilla JS to avoid a lot of complexity.
         *
         * Explanation on the Angular way :
         * Since SVG are sanitized by Angular binding, we need to bypass with the DOMSanitizer.
         * Therefore, as it generates `SafeHtml`, only property binding could be used (cf. error "SafeValue must use [property]=binding").
         * Thus, additionnals tags (div) must be used to handle "sanitized SVG" within [innerHTML] property.
         * This solution implies a lot of code while generating useless tags in the document, don't waste time on it.
         */
        this.elementRef.nativeElement.innerHTML = svgs.map((svg) => svg.data).join('');
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

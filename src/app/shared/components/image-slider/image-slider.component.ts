import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private rd2: Renderer2) {
  }

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySecond = 2;
  // TODO
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef | undefined;
  selectedIndex = 0;
  intervalId: number | undefined;

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.intervalBySecond <= 0) {
      return;
    }

    if (!this.imgSlider) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider!.nativeElement, 'scrollLeft',
        this.getIndex(++this.selectedIndex) * (this.imgSlider!.nativeElement.scrollWidth / this.sliders.length));
    }, this.intervalBySecond * 1000)
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev: Event) {
    // TODO remember
    const target = ev.target as HTMLImageElement;
    const ratio =
      target.scrollLeft / (target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}

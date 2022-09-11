import { IState } from "../models/IState";
import { getTemplate } from "../utils/getTemplate";

export class Slider {
  slider: HTMLElement | null;
  state: IState;
  currentClientX: number = 0;
  constructor(selector: string, state: IState) {
    this.slider = document.getElementById(selector);
    this.state = {
      ...state,
      width: state.width || 375,
    };
    this.render(this.state);
    this.listen();
  }

  private render = (state: IState) => {
    if (this.slider) {
      this.slider.innerHTML = getTemplate(state);
    }
  };

  private update = (props: IState) => {
    this.state = {
      ...this.state,
      ...props,
    };
    this.render(this.state);
  };

  listen = () => {
    this.slider?.addEventListener("mousedown", this.mouseDownHandler);
    this.slider?.addEventListener("mouseup", this.mouseUpHandler);
  };

  mouseDownHandler = (ev: MouseEvent) => {
    if ((ev.target as HTMLElement)?.dataset.type === "resize") {
      this.slider?.addEventListener("mousemove", this.moveHandler);
    }

    this.currentClientX = ev.clientX;
  };

  mouseUpHandler = () => {
    this.slider?.removeEventListener("mousemove", this.moveHandler);
  };

  moveHandler = (ev: MouseEvent) => {
    const changedClientX = this.currentClientX - ev.clientX;
    this.currentClientX = ev.clientX;
    const sliderRect = this.slider?.getBoundingClientRect();

    console.log(sliderRect, this.currentClientX);

    if (sliderRect) {
      if (sliderRect.right <= this.currentClientX) {
        return;
      }
      if (this.currentClientX <= sliderRect.left) {
        return;
      }
    }

    this.update({ width: this.state.width - changedClientX });
  };
}

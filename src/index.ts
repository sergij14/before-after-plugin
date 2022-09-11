import { getTemplate } from "./utils/getTemplate";

class Slider {
  slider: HTMLElement | null;
  state: string;
  constructor(selector: string, state: string) {
    this.slider = document.getElementById(selector);
    this.state = state;
    this.render(this.state);
  }

  private render(state: string) {
    if (this.slider) {
      this.slider.innerHTML = getTemplate(state);
    }
  }

  moveHandler() {}

  mouseUpHandler() {}

  mouseDownHandler() {}
}

const slider = new Slider("slider", "");

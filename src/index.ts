import { getTemplate } from "./utils/getTemplate";

class Slider {
  slider: HTMLElement | null;
  state: string;
  constructor(selector: string, state: string) {
    this.slider = document.getElementById(selector);
    this.state = state;
    this.render(this.state);
    this.listen();
  }

  private render = (state: string) => {
    if (this.slider) {
      this.slider.innerHTML = getTemplate(state);
    }
  };

  listen = () => {
    this.slider?.addEventListener("mousedown", this.mouseDownHandler);
    this.slider?.addEventListener("mouseup", this.mouseUpHandler);
  };

  mouseDownHandler = (ev: Event) => {
    console.log('downnadler');

    if ((ev.target as HTMLElement)?.dataset.type === "resize") {
      this.slider?.addEventListener("mousemove", this.moveHandler);
    }
  };

  mouseUpHandler = () => {
    console.log('uphnadler');

    this.slider?.removeEventListener("mousemove", this.moveHandler);
  };

  moveHandler = () => {
    console.log('movehnadler');
    
  };
}

const slider = new Slider("slider", "");

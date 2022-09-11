import { IState } from "../models/IState";

export const getTemplate = (state: IState) => {
  return `
        <div class="slider__before"></div>
          <div class="slider__after" style="width: ${state.width}px">
             <div class="slider__resize" data-type="resize"></div>
        </div>
    `;
};

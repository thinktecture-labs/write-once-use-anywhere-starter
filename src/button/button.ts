import { CSSResult, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './button.styles';
import { ButtonType, BUTTON_TYPE_CLASSES } from './button.type';

@customElement('tt-button')
export class TtButton extends LitElement {
  private _type: ButtonType = 'text';
  static override styles: CSSResult = buttonStyles;

  @property()
  set type(type: ButtonType) {
    this._type = type;
    this.addTypeStyle(type);
  }
  get type() {
    return this._type;
  }

  override render() {
    return html`
      <button>
        <slot name="prefix"></slot>
        <span><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `;
  }

  private addTypeStyle(type: ButtonType): void {
    BUTTON_TYPE_CLASSES.forEach((bType) => {
      this.classList.remove(bType);
    });
    this.classList.add(`type-${type}`);
  }
}
//For propper type checking
declare global {
  interface HTMLElementTagNameMap {
    'tt-button': TtButton;
  }
}

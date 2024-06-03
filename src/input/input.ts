import { customElement, queryAssignedElements } from 'lit/decorators.js';
import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { inputStyles } from './input.styles';

@customElement('tt-input')
export class TtInput extends LitElement {
  @queryAssignedElements({ selector: 'label' })
  slottedLabel!: ReadonlyArray<HTMLLabelElement | undefined>;

  static override styles: CSSResult = inputStyles;

  override render(): TemplateResult {
    return html`
      <slot name="label"></slot>
      <div class="input-box">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  private handleSlotChange(): void {
    const [label] = this.slottedLabel;
    if (label) {
      label.setAttribute('slot', 'label');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tt-input': TtInput;
  }
}

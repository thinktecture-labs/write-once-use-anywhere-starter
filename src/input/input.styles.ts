import { css, CSSResult } from 'lit';

export const inputStyles: CSSResult = css`:host {
  display: grid;
  grid-template-rows: auto auto;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.2rem;
  color: var(--tt-input-text-color, #000);
}

::slotted(label) {
  font-size: 0.8rem;
  font-weight: bold;
}

.input-box {
  display: inline-flex;
  border: 2px solid var(--tt-primary, #ff584f);
  border-radius: 5px;
  background-color: var(--tt-input-background-color);
  padding: 0.2rem;
  min-width: 170px;
}

.input-box ::slotted(input) {
  border: none;
  background-color: transparent;
  margin: 0;
  border-radius: 5px;
  font-size: 1rem;
  order: 1;
}

::slotted(input:focus-visible) {
  border: none;
  background-color: transparent;
  outline: none;
}

::slotted(span) {
  font-size: 0.8rem;
  order: 3;
}
`;
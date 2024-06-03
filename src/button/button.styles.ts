import { css, CSSResult } from 'lit';

export const buttonStyles: CSSResult = css`button {
  position: relative;
  z-index: 0;
  user-select: none;
  cursor: pointer;
  font: 500 0.875rem/1.25rem var(--md-sys-font-family);
  letter-spacing: 0.00625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid transparent;
  background: none;
  height: 2.25rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 0.5rem;
  border-radius: var(--md-sys-border-radius-xs);
  color: var(--md-sys-color-primary);
}
button:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: 0;
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
@media (hover) {
  button:hover {
    position: relative;
    z-index: 0;
  }
  button:hover:after {
    pointer-events: none;
    content: "";
    z-index: -1;
    opacity: var(--md-sys-state-hover-alpha);
    position: absolute;
    background-color: var(--color-overlay, currentColor);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
    transform: scale(1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  }
}
button:focus, button.has-focus {
  position: relative;
  z-index: 0;
}
button:focus:after, button.has-focus:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-focused-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button:active {
  position: relative;
  z-index: 0;
}
button:active:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-pressed-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button.dragged {
  position: relative;
  z-index: 0;
  z-index: 800;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 3px 14px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 5px 5px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
  position: relative;
  z-index: 0;
  position: relative;
  z-index: 0;
  z-index: 800;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 3px 14px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 5px 5px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
}
button.dragged:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0.06;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button.dragged:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-dragged-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button.dragged:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0.06;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button.selected {
  position: relative;
  z-index: 0;
}
button.selected:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-selected-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
button.disabled, button[disabled] {
  position: relative;
  z-index: 0;
  opacity: var(--md-sys-state-disabled-alpha);
  cursor: default;
}
button.disabled:after, button[disabled]:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: 0;
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-outlined) button {
  border: 1px solid var(--md-sys-color-surface-emphasis-2);
}
:host-context(.type-filled) button {
  --primary-constrast-patch: 1;
  position: relative;
  z-index: 0;
  user-select: none;
  cursor: pointer;
  --md-sys-color-surface: var(--md-sys-color-primary);
  --md-sys-color-on-surface: var(--md-sys-color-on-primary);
  --color-overlay: white;
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
:host-context(.type-filled) button:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: 0;
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
@media (hover) {
  :host-context(.type-filled) button:hover {
    position: relative;
    z-index: 0;
  }
  :host-context(.type-filled) button:hover:after {
    pointer-events: none;
    content: "";
    z-index: -1;
    opacity: var(--md-sys-state-hover-alpha);
    position: absolute;
    background-color: var(--color-overlay, currentColor);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
    transform: scale(1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  }
}
:host-context(.type-filled) button:focus, :host-context(.type-filled) button.has-focus {
  position: relative;
  z-index: 0;
}
:host-context(.type-filled) button:focus:after, :host-context(.type-filled) button.has-focus:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-focused-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button:active {
  position: relative;
  z-index: 0;
}
:host-context(.type-filled) button:active:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-pressed-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button.dragged {
  position: relative;
  z-index: 0;
  z-index: 800;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 3px 14px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 5px 5px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
  position: relative;
  z-index: 0;
  position: relative;
  z-index: 0;
  z-index: 800;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 3px 14px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 5px 5px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
}
:host-context(.type-filled) button.dragged:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0.06;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button.dragged:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-dragged-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button.dragged:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0.06;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button.selected {
  position: relative;
  z-index: 0;
}
:host-context(.type-filled) button.selected:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: var(--md-sys-state-selected-alpha);
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-filled) button.disabled, :host-context(.type-filled) button[disabled] {
  position: relative;
  z-index: 0;
  opacity: var(--md-sys-state-disabled-alpha);
  cursor: default;
}
:host-context(.type-filled) button.disabled:after, :host-context(.type-filled) button[disabled]:after {
  pointer-events: none;
  content: "";
  z-index: -1;
  opacity: 0;
  position: absolute;
  background-color: var(--color-overlay, currentColor);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-elevated) button {
  position: relative;
  z-index: 0;
  z-index: 100;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 2px 1px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 1px 3px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
  background-color: var(--md-sys-color-surface);
}
:host-context(.type-elevated) button:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0.01;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
:host-context(.type-elevated) button[disabled] {
  position: relative;
  z-index: 0;
  z-index: 0;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, var(--md-sys-shadow-key-alpha)), 0px 0px 0px rgba(0, 0, 0, var(--md-sys-shadow-ambient-alpha)), 0px 0px 0px rgba(0, 0, 0, var(--md-sys-shadow-ambient-2-alpha));
}
:host-context(.type-elevated) button[disabled]:before {
  pointer-events: none;
  content: "";
  z-index: var(--highlight-content);
  opacity: 0;
  position: absolute;
  background-color: var(--md-sys-color-highlight);
  transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
  transform: scale(1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
}
`;
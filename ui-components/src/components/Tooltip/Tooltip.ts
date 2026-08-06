import { LitElement, html, css } from 'lit';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export class Tooltip extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      position: { type: String },
    };
  }

  private _text = '';
  private _position: TooltipPosition = 'top';

  get text() { return this._text; }
  set text(value: string) {
    const old = this._text;
    this._text = value;
    this.requestUpdate('text', old);
  }

  get position() { return this._position; }
  set position(value: TooltipPosition) {
    const old = this._position;
    this._position = value;
    this.requestUpdate('position', old);
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .wrapper {
      display: inline-block;
      position: relative;
    }

    .tooltip {
      position: absolute;
      background: #1b263b;
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      font-family: system-ui, sans-serif;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 100;
    }

    .wrapper:hover .tooltip {
      opacity: 1;
    }

    .top {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .bottom {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .left {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    .right {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }
  `;

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
        <div class="tooltip ${this.position}">${this.text}</div>
      </div>
    `;
  }
}

customElements.define('zen-tooltip', Tooltip);

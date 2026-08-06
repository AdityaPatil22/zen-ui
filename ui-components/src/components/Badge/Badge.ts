import { LitElement, html, css } from 'lit';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export class Badge extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
      size: { type: String },
    };
  }

  private _variant: BadgeVariant = 'default';
  private _size: BadgeSize = 'medium';

  get variant() { return this._variant; }
  set variant(value: BadgeVariant) {
    const old = this._variant;
    this._variant = value;
    this.requestUpdate('variant', old);
  }

  get size() { return this._size; }
  set size(value: BadgeSize) {
    const old = this._size;
    this._size = value;
    this.requestUpdate('size', old);
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    span {
      display: inline-flex;
      align-items: center;
      font-family: system-ui, sans-serif;
      font-weight: 500;
      border-radius: 9999px;
      line-height: 1;
    }

    .small { padding: 2px 8px; font-size: 12px; }
    .medium { padding: 4px 12px; font-size: 14px; }
    .large { padding: 6px 16px; font-size: 16px; }

    .default { background: #e2e8f0; color: #1b263b; }
    .success { background: #dcfce7; color: #166534; }
    .warning { background: #fef9c3; color: #854d0e; }
    .error { background: #fee2e2; color: #991b1b; }
    .info { background: #dbeafe; color: #1e40af; }
  `;

  render() {
    return html`
      <span class="${this.size} ${this.variant}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('zen-badge', Badge);

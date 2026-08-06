import { LitElement, html, css } from 'lit';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export class ZenAlert extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
      dismissible: { type: Boolean },
    };
  }

  private _variant: AlertVariant = 'info';
  private _dismissible = false;

  get variant() { return this._variant; }
  set variant(v: AlertVariant) { const o = this._variant; this._variant = v; this.requestUpdate('variant', o); }

  get dismissible() { return this._dismissible; }
  set dismissible(v: boolean) { const o = this._dismissible; this._dismissible = v; this.requestUpdate('dismissible', o); }

  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    .alert {
      padding: 14px 18px;
      border-radius: 8px;
      font-size: 14px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .info { background: #dbeafe; color: #1e40af; }
    .success { background: #dcfce7; color: #166534; }
    .warning { background: #fef9c3; color: #854d0e; }
    .error { background: #fee2e2; color: #991b1b; }

    .content {
      flex: 1;
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      padding: 0;
      color: inherit;
      opacity: 0.6;
    }

    .close-btn:hover {
      opacity: 1;
    }
  `;

  private _dismiss() {
    this.dispatchEvent(new CustomEvent('zen-dismiss', {
      bubbles: true,
      composed: true,
    }));
    this.remove();
  }

  render() {
    return html`
      <div class="alert ${this.variant}">
        <div class="content">
          <slot></slot>
        </div>
        ${this.dismissible ? html`
          <button class="close-btn" @click="${this._dismiss}">&times;</button>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('zen-alert', ZenAlert);

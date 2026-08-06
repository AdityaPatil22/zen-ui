import { LitElement, html, css } from 'lit';

export class Modal extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      heading: { type: String },
    };
  }

  private _open = false;
  private _heading = '';

  get open() { return this._open; }
  set open(value: boolean) {
    const old = this._open;
    this._open = value;
    this.requestUpdate('open', old);
  }

  get heading() { return this._heading; }
  set heading(value: string) {
    const old = this._heading;
    this._heading = value;
    this.requestUpdate('heading', old);
  }

  static styles = css`
    :host {
      font-family: system-ui, sans-serif;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .modal {
      background: white;
      border-radius: 12px;
      width: min(480px, 90vw);
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #e2e8f0;
    }

    .header h2 {
      margin: 0;
      font-size: 18px;
      color: #1b263b;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #64748b;
      padding: 4px;
      line-height: 1;
    }

    .close-btn:hover {
      color: #1b263b;
    }

    .body {
      padding: 20px;
    }

    .footer {
      padding: 16px 20px;
      border-top: 1px solid #e2e8f0;
    }
  `;

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('zen-close', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="overlay ${this.open ? 'open' : ''}" @click="${this._onOverlayClick}">
        <div class="modal" @click="${(e: Event) => e.stopPropagation()}">
          <div class="header">
            <h2>${this.heading}</h2>
            <button class="close-btn" @click="${this._close}">&times;</button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  private _onOverlayClick() {
    this._close();
  }
}

customElements.define('zen-modal', Modal);

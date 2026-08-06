import { LitElement, html, css } from 'lit';

export type InputVariant = 'default' | 'filled';

export class ZenInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      placeholder: { type: String },
      value: { type: String },
      type: { type: String },
      variant: { type: String },
      disabled: { type: Boolean },
      error: { type: String },
    };
  }

  private _label = '';
  private _placeholder = '';
  private _value = '';
  private _type = 'text';
  private _variant: InputVariant = 'default';
  private _disabled = false;
  private _error = '';

  get label() { return this._label; }
  set label(v: string) { const o = this._label; this._label = v; this.requestUpdate('label', o); }

  get placeholder() { return this._placeholder; }
  set placeholder(v: string) { const o = this._placeholder; this._placeholder = v; this.requestUpdate('placeholder', o); }

  get value() { return this._value; }
  set value(v: string) { const o = this._value; this._value = v; this.requestUpdate('value', o); }

  get type() { return this._type; }
  set type(v: string) { const o = this._type; this._type = v; this.requestUpdate('type', o); }

  get variant() { return this._variant; }
  set variant(v: InputVariant) { const o = this._variant; this._variant = v; this.requestUpdate('variant', o); }

  get disabled() { return this._disabled; }
  set disabled(v: boolean) { const o = this._disabled; this._disabled = v; this.requestUpdate('disabled', o); }

  get error() { return this._error; }
  set error(v: string) { const o = this._error; this._error = v; this.requestUpdate('error', o); }

  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #1b263b;
      margin-bottom: 6px;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      font-size: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.15s ease;
      box-sizing: border-box;
      color: #1b263b;
    }

    input:focus {
      border-color: #1b263b;
    }

    input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f8fafc;
    }

    input.filled {
      background: #f1f5f9;
      border-color: transparent;
    }

    input.filled:focus {
      border-color: #1b263b;
    }

    input.has-error {
      border-color: #ef4444;
    }

    .error-text {
      font-size: 13px;
      color: #ef4444;
      margin-top: 4px;
    }
  `;

  private _onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('zen-input', {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    }));
  }

  render() {
    const classes = [
      this.variant === 'filled' ? 'filled' : '',
      this.error ? 'has-error' : '',
    ].filter(Boolean).join(' ');

    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <input
        type="${this.type}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        ?disabled="${this.disabled}"
        class="${classes}"
        @input="${this._onInput}"
      />
      ${this.error ? html`<div class="error-text">${this.error}</div>` : ''}
    `;
  }
}

customElements.define('zen-input', ZenInput);

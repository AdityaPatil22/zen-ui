import { LitElement, html, css } from 'lit';

export interface TabItem {
  label: string;
  content: string;
}

export class ZenTabs extends LitElement {
  static get properties() {
    return {
      tabs: { type: Array },
      activeIndex: { type: Number, attribute: 'active-index' },
    };
  }

  private _tabs: TabItem[] = [];
  private _activeIndex = 0;

  get tabs() { return this._tabs; }
  set tabs(value: TabItem[]) {
    const old = this._tabs;
    this._tabs = value;
    this.requestUpdate('tabs', old);
  }

  get activeIndex() { return this._activeIndex; }
  set activeIndex(value: number) {
    const old = this._activeIndex;
    this._activeIndex = value;
    this.requestUpdate('activeIndex', old);
  }

  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
    }

    .tab-list {
      display: flex;
      border-bottom: 2px solid #e2e8f0;
      gap: 4px;
    }

    .tab-button {
      padding: 10px 20px;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #64748b;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
      transition: all 0.15s ease;
    }

    .tab-button:hover {
      color: #1b263b;
    }

    .tab-button.active {
      color: #1b263b;
      border-bottom-color: #1b263b;
    }

    .tab-panel {
      padding: 16px 4px;
    }
  `;

  private _selectTab(index: number) {
    this.activeIndex = index;
    this.dispatchEvent(new CustomEvent('zen-tab-change', {
      bubbles: true,
      composed: true,
      detail: { index },
    }));
  }

  render() {
    return html`
      <div class="tab-list" role="tablist">
        ${this.tabs.map((tab, i) => html`
          <button
            class="tab-button ${i === this.activeIndex ? 'active' : ''}"
            role="tab"
            aria-selected="${i === this.activeIndex}"
            @click="${() => this._selectTab(i)}"
          >${tab.label}</button>
        `)}
      </div>
      <div class="tab-panel" role="tabpanel">
        ${this.tabs[this.activeIndex]?.content ?? ''}
      </div>
    `;
  }
}

customElements.define('zen-tabs', ZenTabs);

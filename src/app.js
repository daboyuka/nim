require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

require("./main.css");

import {render} from 'lit-html';
import {LitElement, property, html, css, customElement} from 'lit-element';

const hamburger = '🍔';

@customElement('nim-counters')
export class NimCounters extends LitElement {
    @property({type: Array}) counts = [0];

    static get styles() {
        return css`
            .base { display: flex; font-size: 3vw; }
        `;
    }
    render() {
        console.log(typeof this.counts)
        return html`
            ${this.counts.map((c, i) => html`
                <div class="base">
                    ${this.counts.length > 1 ? html`
                        <div class="base" style="flex: 0 0 3em; justify-content: flex-end;">Pile ${i+1}</div>
                    ` : null}
                    <div class="base" style="flex: 1 0 0; justify-content: flex-end;">${hamburger.repeat(c)}</div>
                    <div class="base" style="flex: 0 0 3em; justify-content: flex-end; align-items: center;">${c}</div>
                </div>
            `)}
        `;
    }
}

render(html`
    <div class="container d-flex h-100">
    <div class="row w-100 align-self-center border" style="padding: 0.5em;"> 
        <nim-counters counts="[3,4]" name="bob" class="w-100"/>
    </div>
    </div>
`, document.body)

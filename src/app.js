require('bootstrap')

require("./main.css")

import {html, render} from 'lit-html';

render(html`
    <div class="container">
    <h1>Hello world</h1>  
    </div>
`, document.body)

import { html } from 'https://unpkg.com/lit-html?module';

import { getParlours } from '../src/api/data.js';

const allParloursTemplate = (data) => html`
<section class="my-cars">
    <h1>All</h1>
    <div class="my-collection">

        ${data.length ? html`${data.map(parlourTemplate)}` : html`<p class="no-cars">No parlours in database.</p>`}

    </div>
</section>`;

const parlourTemplate = (parlour) => html`
<div>
    <p>Name: ${parlour.parlourName}</p>
    <p>City: ${parlour.city}</p>
    <p>Machine: ${parlour.machine}</p>
    <p>Machine SN: ${parlour.machineSN}</p>
    <p>Applicator: ${parlour.applicator}</p>
    <p>Applicator SN: ${parlour.applicatorSN}</p>
    <p>Description ${parlour.description}</p>
    <!-- <img alt="no-pic" src=${parlour.city}> -->
</div>
<div>
    <a class="btn" href="/edit/${parlour.objectId}">Edit</a>
</div>
`;

export async function allParloursPage(ctx) {
    const [data] = await getParlours();

    ctx.render(allParloursTemplate(data));
}
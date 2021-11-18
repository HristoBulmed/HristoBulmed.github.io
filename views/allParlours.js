import { html } from 'https://unpkg.com/lit-html?module';

import { getParlours } from '../src/api/data.js';

const allParloursTemplate = (data) => html`
<section>

    <table cellspacing="0" class="table">
        <tr class="row">
            <td class="cell-top">NAME</td>
            <td class="cell-top">CITY</td>
            <td class="cell-top">MACHINE</td>
            <td class="cell-top">MACHINE SN</td>
            <td class="cell-top">APPLICATOR</td>
            <td class="cell-top">APPLICATOR SN</td>
            <td class="cell-top">DESCRIPTION</td>
        </tr>
        ${data.length ? html`${data.map(parlourTemplate)}` : ''}

    </table>
</section>`;

const parlourTemplate = (parlour) => html`
<tr class="row">
    <td class="cell">${parlour.parlourName}</td>
    <td class="cell">${parlour.city}</td>
    <td class="cell">${parlour.machine}</td>
    <td class="cell">${parlour.machineSN}</td>
    <td class="cell">${parlour.applicator}</td>
    <td class="cell">${parlour.applicatorSN}</td>
    <td class="cell">${parlour.description}</td>
    <td class="cell"><a class="btn" href="/edit/${parlour.objectId}">Edit</a></td>
</tr>`;

export async function allParloursPage(ctx) {
    if (!sessionStorage.getItem('username')) {
        ctx.page.redirect('/');
        return
    }
    const [data] = await getParlours();

    ctx.render(allParloursTemplate(data));
}
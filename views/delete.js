import { deleteParlourById } from '../src/api/data.js';


export async function deletePage(ctx) {
    if (!sessionStorage.getItem('username')) {
        ctx.page.redirect('/');
        return
    }

    const parlourId = ctx.params.id;
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await deleteParlourById(parlourId);
        ctx.page.redirect('/allParlours');
    }
}


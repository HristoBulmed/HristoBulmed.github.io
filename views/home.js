import { html } from 'https://unpkg.com/lit-html?module';

const homeTemplate = () => html`
<section class="home">

    <img src="/images/home.png" alt="no pic">
    <p>
        <a href="/login">Login</a>
    </p>
</section>`;

export async function homePage(ctx) {
    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        ctx.page.redirect('/allParlours')
    } else {
        ctx.render(homeTemplate());
    }
}

{/* <a href="/login">Login</a> or <a href="/register">register</a> */ }

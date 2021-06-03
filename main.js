// DOM Element Selection
const contentDiv = document.querySelector('#contents');

// Component Section
const home = `
<section class="content">
    <div class="product">
        <img src="src/Mangos.jpg" alt="a funny ad">
        <div class="product-text">
            <div class="product-title">
                A nice Drink <br> 6,90€
            </div>
            <div class="product-description">
                <p>It is a really nice drink. trust me I'm an engineer</p>
            </div>  
        </div>
    </div>
</section>
`;

const contact = `
<section class="content">
    <h3>Contact</h3>
</section>
`;

const gallery = `
<section class="content">
    <h3>Gallery</h3>
</section>
`;

const imprint = `
<section class="content">
    <h3>Imprint</h3>
</section>
`;

const products = `
<section class="content">
    <h3>Products</h3>
</section>
`;

// Routes Section
const routes = {
    '/': home,
    '/index.html': home,
    '/contact': contact,
    '/gallery': gallery,
    '/imprint': imprint,
    '/products': products
};

// Actions
// insert start page when the website is loaded
contentDiv.innerHTML = routes[window.location.pathname];

// navigate to a new url and render the associated page
const navigate = (route) => {
    window.history.pushState(
        {},
        route,
        window.location.origin + route
        )
        contentDiv.innerHTML = routes[route];
}

// change the page when the user clicks on the back button in the browser
window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
}
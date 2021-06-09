// DOM Element Selection
const contentDiv = document.querySelector('#contents');

// Component Section
const home = `
<h2 class="product-heading">Products</h2>
<section class="content">
    <div class="product">
        <img class="product-image" src="src/Mangos.jpg" alt="some red juice">
        <div class="product-text">
            <div class="product-title">
                A nice Drink <br> 6.90$
            </div>
            <div class="product-description">
                <p>It is a really nice drink. trust me I'm an engineer</p>
            </div>  
        </div>
    </div>
    <div class="product">
        <img class="product-image" src="src/orange.jpg" alt="orange juice">
        <div class="product-text">
            <div class="product-title">
                A cheap Drink <br> 4.20$
            </div>
            <div class="product-description">
                <p>It is a really cheap drink. trust me I'm a bartender </p>
            </div>  
        </div>
    </div>
    <div class="product">
        <img class="product-image" src="src/normal.jpg" alt="cucumber salad juice">
        <div class="product-text">
            <div class="product-title">
                A wtf Drink <br> 5.00$
            </div>
            <div class="product-description">
                <p>Why would you drink that? seriously? </p>
            </div>  
        </div>
    </div>
    <div class="product">
        <img class="product-image" src="src/red.jpg" alt="normal juice">
        <div class="product-text">
            <div class="product-title">
                The normal juice <br> 5.55$
            </div>
            <div class="product-description">
                <p>Looks actually great. Just 5.55$! </p>
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
// DOM Element Selection
const contentDiv = document.querySelector('#contents');

// Component Section
const home = `
<h2 class="product-heading">Products</h2>
<section class="content">
    <div class="product" onclick="navigate('/redJuice'); return false;">
        <img class="product-image" src="src/Mangos.jpg" alt="some red juice">
        <div class="product-text">
            <div class="product-title">
                A nice drink <br> 6.90$
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
                A cheap drink <br> 4.20$
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
                A cucumber drink <br> 5.00$
            </div>
            <div class="product-description">
                <p>Why would you drink that? seriously? it's just cucumber 🥒 </p>
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
                <p>Looks actually great and tastes better than it looks. Just 5.55$! </p>
            </div>  
        </div>
    </div>
</section>
`;

const contact = `
<h2>Contact</h2>
<section class="content">
    <div class="contact">
        <img src="src/contact.gif" alt="please don't call me :(">
    </div>
</section>
`;

const gallery = `
<h2>Gallery</h2>
<section class="content image-grid">
    <img class="product-image image-gallery" src="src/red.jpg" alt="normal juice">
    <img class="product-image image-gallery" src="src/orange.jpg" alt="orange juice">
    <img class="product-image image-gallery" src="src/normal.jpg" alt="cucumber salad juice">
    <img class="product-image image-gallery" src="src/red.jpg" alt="normal juice">
    <img class="product-image image-gallery" src="src/red.jpg" alt="normal juice">
    <img class="product-image image-gallery" src="src/normal.jpg" alt="cucumber salad juice">
    <img class="product-image image-gallery" src="src/orange.jpg" alt="orange juice">
</section>
`;

const imprint = `
<section class="content imprint">
    <h2>Imprint</h2>
    <h3>Privacy and NSA stuff</h3>
    <img src="src/privacy.webp" alt="WE REALLY DO DECLARE PRIVACY">
    <h4>Hear what our customers have to say about privacy</h4>
    <q>I HaVe NOthING To HiDe</q>
    <p>- Mr Riglin</p>
</section>
`;

const redJuice = `
<section class="content juice-pages">
    <h2>Red Juice</h2>
    <div class="contact">
        <img class="product-image main-image" src="src/Mangos.jpg" alt="some red juice">
        <dl>
            <dt>Ingredients</dt>
            <dd>200ml orange 🍊</dd>
            <dd>100ml water 💧</dd>
            <dd>100ml strawberry juice 🍓</dd>
            <dd>100ml politicians spit 🕴</dd>
        </dl>
    </div>
</section>
`;

// Routes Section
const routes = {
    '/': home,
    '/index.html': home,
    '/contact': contact,
    '/gallery': gallery,
    '/imprint': imprint,
    '/products': home,
    '/redJuice': redJuice
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
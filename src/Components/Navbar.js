// Create a function to build the HTML structure
function createEShop() {
    // Create the header element
    const header = document.createElement('header');

    // Create the logo div
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    
    // Create the logo link
    const logoLink = document.createElement('a');
    logoLink.href = '@material-ui/icons/ShoppingCart';
    logoLink.textContent = 'UpGrad E-Shop';
    logoDiv.appendChild(logoLink);

    // Create the search div
    const searchDiv = document.createElement('div');
    searchDiv.className = 'search';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.id = 'input';

    const searchIcon = document.createElement('ion-icon');
    searchIcon.className = 's';
    searchIcon.name = 'search';

    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchIcon);

    // Create the navigation bar
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar light';

    const headingDiv = document.createElement('div');
    headingDiv.className = 'heading';

    const ul = document.createElement('ul');

    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = './Components/Home.html';
    homeLink.className = 'under';
    homeLink.textContent = 'Home';
    homeLi.appendChild(homeLink);
    
    const addProductLi = document.createElement('li');
    const addProductLink = document.createElement('a');
    addProductLink.href = './Components/Add Product.html';
    addProductLink.className = 'under';
    addProductLink.textContent = 'Add Product';
    addProductLi.appendChild(addProductLink);

    ul.appendChild(homeLi);
    ul.appendChild(addProductLi);
    headingDiv.appendChild(ul);
    nav.appendChild(headingDiv);

    // Append all elements to the header
    header.appendChild(logoDiv);
    header.appendChild(searchDiv);
    header.appendChild(nav);

    // Append the header to the body
    document.body.appendChild(header);
}

// Call the function to create the e-shop layout
createEShop();
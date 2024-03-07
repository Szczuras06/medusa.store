// PRODUKTY !!!
const products = [
    { productId:"hk416d", title: 'Heckler a Koch HK416 D', category: 'weapons', price: '475.000 Kč',  image: 'guns/hekler.png', status: 'Bestseller', shortcut: "hk", show:"yes"},
    { productId: "glock17", title: 'Glock-17', category: 'weapons', price: '160.000 Kč',  image: 'guns/glock.png', status: 'Bestseller', show:"yes", },
    { productId: "ak47",title: 'AK47', category: 'weapons', price: '475.000 Kč', image: 'guns/ak47.png', status: 'Bestseller',show:"yes" },
    { productId: "vrazda",title: 'Vražda', category: 'services', price: '3.500.000 Kč',  image: 'image7.jpg', status: 'Bestseller',show:"no" },
    { productId: "unos",title: 'Únos', category: 'services', price: '1.000.00 Kč',  image: 'services/unos.jpg',show:"no" },
    { productId: "remington870ae",title: 'Remington 870AE', category: 'weapons', price: '395.000Kč', image: 'guns/mosin.png',show:"yes"  },
    { productId: "kacpdw",title: 'KAC PDW', category: 'weapons', price: '395.000 Kč',  image: 'guns/Hekler.png',show:"yes",},
    { productId: "krissvector",title: 'KRISS Vector', category: 'weapons', price: '300.000Kč', image: 'guns/Smg.png',show:"yes"  },
    { productId: "mosinnagantm1891",title: 'Mosin Nagant M1891', category: 'weapons', price: '525.000Kč',  image: 'guns/Sniper.png',show:"yes"  },
    { productId: "remingtonm700",title: 'Remington M700', category: 'weapons', price: '1.250.000Kč', image: 'guns/Sniper.png',show:"yes"  },
    { productId: "colt1911",title: 'Colt 1911', category: 'weapons', price: '150.000 Kč',  image: 'guns/glock.png' ,show:"yes" },
    { productId: "kokain",title: 'Kokain', category: 'drugs', price: 'XXX',  image: 'drugs/kokain.jpg',show:"yes",stock:"outofstock"  },
    { productId: "pcp",title: 'PCP', category: 'drugs', price: 'XXX',  image: 'drugs/pcp.jpg',show:"yes",stock:"outofstock"  },
    { productId: "xanax",title: 'Xanax', category: 'drugs', price: 'XXX',  image: 'drugs/xanax.jpg',show:"yes",stock:"outofstock"  },
    { productId: "morfium",title: 'Morfium', category: 'drugs', price: 'XXX',  image: 'drugs/morfium.jpg',show:"yes",stock:"outofstock"  },
    { productId: "houbicky",title: 'Houbičky', category: 'drugs', price: 'XXX',  image: 'drugs/houbicky.jpg',show:"yes",stock:"outofstock"  },
    { productId: "marihuana",title: 'Marihuana', category: 'drugs', price: 'XXX',  image: 'drugs/Marihuana.jpg',show:"yes",stock:"outofstock" },
    { productId:"metamfetamin",title:"Metamfetamin",category:"drugs",price:"xxx",image:"drugs/metamfetamin.jpg",show:"yes",stock:"outofstock"},
    { productId:"epinefrin",title:"Epinefrin",category:"drugs",price:"xxx",image:"drugs/epinefrin.jpg",show:"yes",stock:"outofstock"},
    { productId:"extaze",title:"Extáze",category:"drugs",price:"xxx",image:"drugs/extaze.jpg",show:"yes",stock:"outofstock"},
    { productId:"heroin",title:"Heroin",category:"drugs",price:"xxx",image:"drugs/heroin.jpg",show:"yes",stock:"outofstock"},
    { productId: "services",title: 'SERVICES', category: 'services', price: '$100',  image: 'image7.jpg',show:"no",stock:"outofstock" },
    { productId: "services",title: 'SERVICES', category: 'services', price: '$120', image: 'image8.jpg',show:"no",stock:"outofstock" },
    { productId: "services",title: 'SERVICES', category: 'services', price: '$90', image: 'image9.jpg',show:"no",stock:"outofstock" },
    { productId: "rp",title: 'NEDOSTUPNÉ', category: 'documents', price: '$0', image: 'image9.jpg',show:"no" },
    { productId: "ammo.hk416d", title: "Zásobník do HK416D", category:"ammo", price:"XXX", image:"", show:"yes", stock:"yes"},
    { productId: "ammo.glock17", title: "Zásobník do Glock 17", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.ak47", title: "Zásobník do AK47", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.remington870ae", title: "Zásobník do Remington 870AE", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.kacpdw", title: "Zásobník do KacPDW", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.remingtonm700", title: "Zásobník do Remington M700", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.mosinnagantm1891", title: "Zásobník do Mosin Nagan M1891", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.colt1911", title: "Zásobník do Colt 1911", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "ammo.krissvector", title: "Zásobník do Kriss Vector", category:"ammo", price:"xxx", image:"", show:"yes", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},
    { productId: "", title: "", category:"", price:"", image:"", show:"", stock:""},

];

// productId: "kacpdw" = cena apod.
// category: 'weapons' = zařadí se do kategorie podle HTML
// stock:"outofstock" = červený rámeček + nápis
// show:"yes" = produkt se zobrazí

function selectCategory(category) {
    const categoryOptions = document.querySelectorAll('.category-option');
    categoryOptions.forEach(option => {
        option.classList.remove('selected');
    });
    const selectedOption = document.querySelector(`.category-option[data-category="${category}"]`);
    selectedOption.classList.add('selected');
    renderProducts(category);
}

function addAddToCartButton(product, productIndex) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.onmouseover = function () {
        zvetsitProdukt(this);
    };
    productDiv.onmouseout = function () {
        zmensitProdukt(this);
    };

    if (product.status === 'Bestseller') {
        productDiv.style.borderColor = '#1ba769';

        const bestsellerLabel = document.createElement('div');
        bestsellerLabel.classList.add('Bestseller-label');
        bestsellerLabel.textContent = 'Nejprodávanější';
        productDiv.appendChild(bestsellerLabel);
    }

    if (product.stock=== 'outofstock') {
        productDiv.style.borderColor = 'red';

        const outofstockLabel = document.createElement('div');
        outofstockLabel.classList.add('outofstock-label');
        outofstockLabel.textContent = 'Nedostupné';
        productDiv.appendChild(outofstockLabel);

    }
    function zvetsitProdukt(element) {
        element.classList.add('zvetseno');
    }
    
    function zmensitProdukt(element) {
        element.classList.remove('zvetseno');
    }

    const image = document.createElement('img');
    image.src = product.image;
    productDiv.appendChild(image);
    image.style.alignItems = 'center';

    const title = document.createElement('p');
    title.textContent = `${product.title}`;
    productDiv.appendChild(title);

    const price = document.createElement('p');
    price.textContent = ` ${product.price}`;
    productDiv.appendChild(price);
    price.style.color = 'gold';
    price.style.fontWeight = 'bold';
    price.style.fontSize = '22px';
    price.style.margin = '20px ';


    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = 'Přidat do košíku';
    addToCartButton.dataset.productId = product.productId; // Add product ID to the button
    addToCartButton.onclick = function () {
        if (product.stock === 'outofstock') {
            // Productid = přidat do košíku oný produkt
            alert('This product is currently out of stock.');
        } else {
            addToCart(product.productId);
        }
    };
    productDiv.appendChild(addToCartButton);

    const productContainer = document.querySelector('.product-container');
    productContainer.appendChild(productDiv);
}

function renderProducts(category = 'all') {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';

    const filteredProducts = (category === 'all')
        ? products.filter(product => product.show.toLowerCase() === 'yes')
        : products.filter(product => product.category === category && product.show.toLowerCase() === 'yes');

    filteredProducts.forEach((product, index) => {
        addAddToCartButton(product, index);
    });
}


function openCompleteForm() {
    const completeForm = document.getElementById('complete-form');
    completeForm.style.display = 'block';
}


function submitForm() {
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const delivery = document.getElementById('delivery').value;
    const orderNumber = generateOrderNumber();
    const notification = document.getElementById('notification');
    const notificationTitle = notification.querySelector('h2');
    const notificationContent = notification.querySelector('p');

    notificationTitle.textContent = 'Úspěšná objednávka';
    notificationContent.textContent = `Děkujeme za vaši objednávku.\n Číslo objednávky: ${orderNumber}.\n Brzy se vám ozveme s dalšími informacemi.`;
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 17500);

    document.getElementById('number').value = '';
    document.getElementById('email').value = '';
    document.getElementById('delivery').value = '';
    document.getElementById('complete-form').style.display = 'none';

    const cartMessage = `**Anonmail:** ${email}\n**Number:** ${number}\n**Delivery Option:** ${delivery}\n**Order Number:** ${orderNumber}\n\n**Cart Items:**\n${getCartProducts()}`;

    const embed = {
        title: 'New Purchase',
        color: 0x3498db, // Barva Embedu - posílán jakožto zpráva
        description: cartMessage,
        timestamp: new Date(),
        footer: {
            text: 'Powered by LemonGate🍋',
        },
    };

    document.getElementById("number").value = ""
    document.getElementById('email').value = "";
    document.getElementById('delivery').value = "";
    document.getElementById('complete-form').style.display = 'none';

    // Vymaže itemy z košíku
    cartItems = [];
    updateCart();

    const webhookUrl = 'https://discord.com/api/webhooks/1205267570337386496/DKoqVvAlK1wrm4YdJiVuYp8X1_YxZcy1VyGm_eLMwF9hBqoH_GM28-w6k8s8S6-EyoRK';

    // DISCORD WEEBHOOK
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            embeds: [embed],
        }),
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to send data to Discord webhook');
        }
    })
    .catch(error => {
        console.error('Error while sending data to Discord webhook:', error);
    });
}

function getCartProducts() {
    
    return cartItems.map(item => `${item.title} - ${item.price}`).join(',');
}

let cartItems = [];

function addToCart(productId) {
    const product = products.find(p => p.productId === productId);
    cartItems.push({ productId: product.productId, title: product.title, price: product.price });
    updateCart();
}

function removeCartItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    let total = 0;
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.title} - ${item.price} <button onclick="removeCartItem(${index})">Odebrat</button>`;
        cartItemsElement.appendChild(listItem);

        total += parseInt(item.price.replace(/\D/g, ''), 10);
    });

    cartTotalElement.textContent = `${total} Kč`;
}

function toggleCart() {
    const cart = document.querySelector('.cart');
    cart.style.display = (cart.style.display === 'none' || cart.style.display === '') ? 'block' : 'none';
}

function generateOrderNumber() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${timestamp}-${random}`;
}

updateCart();
renderProducts();




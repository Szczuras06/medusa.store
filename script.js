// celá stránka je napsaná přes uživatele "davis2115"
// PRODUKTY !!!
const products = [
    { productId: "hk416d", title: 'Heckler a Koch HK416 D', category: 'weapons', price: '55 NC',  image: 'guns/hk416d.png', status: 'Bestseller', shortcut: "hk", show:"yes"},
    { productId: "glock17", title: 'Glock-17', category: 'weapons', price: '22 NC',  image: 'guns/Glock.png', status: 'Bestseller', show:"yes", },
    { productId: "ak47",title: 'AK47', category: 'weapons', price: '55 NC', image: 'guns/AK47.png', status: 'Bestseller',show:"yes" },
    { productId: "remington870ae",title: 'Remington 870AE', category: 'weapons', price: '45 NC', image: 'guns/remington870ae.png',show:"yes"  },
    { productId: "kacpdw",title: 'KAC PDW', category: 'weapons', price: '50 NC',  image: 'guns/kacpdw.png',show:"yes",},
    { productId: "krissvector",title: 'KRISS Vector', category: 'weapons', price: '40NC', image: 'guns/krissvector.png',show:"yes"  },
    { productId: "mp7",title: '	Heckler a Koch MP7', category: 'weapons', price: '40NC', image: 'guns/uzi.png',show:"yes"  },
    { productId: "mosinnagantm1891",title: 'Mosin Nagant M1891', category: 'weapons', price: '50 NC',  image: 'guns/mosinnagantm1891.png',show:"yes"  },
    { productId: "remingtonm700",title: 'Remington M700', category: 'weapons', price: '125 NC', image: 'guns/remingtonm700.png',show:"yes"  },
    { productId: "colt1911",title: 'Colt 1911', category: 'weapons', price: '22.5 NC',  image: 'guns/Colt.png' ,show:"yes" },
    { productId: "unos",title: 'Únos', category: 'services', price: '0 NC',  image: 'services/unos.jpg',show:"yes", individualni:"true" ,stock:"outofstock"},
    { productId: "vrazda",title: 'Vražda', category: 'services', price: '0 NC',  image: 'services/vrazda.jpg',show:"yes",individualni:"true",stock:"outofstock" },
    { productId: "banka",title: 'Pytle z Banky', category: 'services', price: '30 NC',  image: 'services/banka.png',show:"yes",stock:"outofstock" },
    { productId: "kokain",title: 'Kokain', category: 'drugs', price: '1 NC',  image: 'drugs/kokain.png',show:"yes",stock:"outofstock"  },
    { productId: "xanax",title: 'Xanax', category: 'drugs', price: '2.5 NC',  image: 'drugs/xanax.png',show:"yes",stock:"outofstock"  },
    { productId: "morfium",title: 'Morfium', category: 'drugs', price: '0.9 NC',  image: 'drugs/morfium.png',show:"yes",stock:"outofstock"  },
    { productId: "houbicky",title: 'Houbičky', category: 'drugs', price: '0.9 NC',  image: 'drugs/houbicky.png',show:"yes",stock:"outofstock"  },
    { productId: "marihuana",title: 'Marihuana', category: 'drugs', price: '0.3 NC',  image: 'drugs/marihuana.png',show:"yes",stock:"outofstock" },
    { productId: "metamfetamin",title:"Metamfetamin",category:"drugs",price:"0.7 NC",image:"drugs/kokain.png",show:"yes",stock:"outofstock"},
    { productId: "epinefrin",title:"Epinefrin",category:"drugs",price:"1 NC",image:"drugs/epinefrin.png",show:"yes",stock:"outofstock"},
    { productId: "extaze",title:"Extáze",category:"drugs",price:"0.7 NC",image:"drugs/extaze.png",show:"yes",stock:"outofstock"},
    { productId: "heroin",title:"Heroin",category:"drugs",price:"0.7 NC",image:"drugs/heroin.png",show:"yes",stock:"outofstock"},
    { productId: "pcp",title: 'PCP', category: 'drugs', price: '0.7 NC',  image: 'drugs/pcp.png',show:"yes",stock:"outofstock"  },
    { productId: "services",title: 'SERVICES', category: 'services', price: '$100',  image: 'image7.jpg',show:"no",stock:"outofstock" },
    { productId: "services",title: 'SERVICES', category: 'services', price: '$120', image: 'image8.jpg',show:"no",stock:"outofstock" },
    { productId: "services",title: 'SERVICES', category: 'services', price: '$90', image: 'image9.jpg',show:"no",stock:"outofstock" },
    { productId: "psaodznak", title: "PSA odznak", category:"documents", price:"75 NC", image:"documents/psaodznak.png", show:"yes", stock:"outofstock"},
    { productId: "artodznak", title: "ART odznak", category:"documents", price:"100 NC", image:"documents/artodznak.png", show:"yes", stock:"outofstock"},
    { productId: "hzsodznak", title: "HZS odznak", category:"documents", price:"50 NC", image:"documents/hzsodznak.png", show:"yes", stock:"outofstock"},
    { productId: "zzslegitimace", title: "ZZS legitimace", category:"documents", price:"45 NC", image:"documents/zzslegitimace.png", show:"yes", stock:"outofstock"},
    { productId: "docarlegitimace", title: "DOCAR legitimace", category:"documents", price:"45 NC", image:"documents/docarlegitimace.png", show:"yes", stock:"outofstock"},
    { productId: "ammo.hk416d", title: "Zásobník do HK416D", category:"ammo", price:"10 NC", image:"ammo/hk416d.png", show:"yes", stock:"yes"},
    { productId: "ammo.glock17", title: "Zásobník do Glock 17", category:"ammo", price:"4.5 NC", image:"ammo/glock17.png", show:"yes", stock:""},
    { productId: "ammo.ak47", title: "Zásobník do AK47", category:"ammo", price:"10 NC", image:"ammo/ak47.png", show:"yes", stock:""},
    { productId: "ammo.remington870ae", title: "Zásobník do Remington 870AE", category:"ammo", price:"10 NC", image:"ammo/remington870ae.png", show:"yes", stock:""},
    { productId: "ammo.kacpdw", title: "Zásobník do KacPDW", category:"ammo", price:"9 NC", image:"ammo/kacpdw.png", show:"yes", stock:""},
    { productId: "ammo.remingtonm700", title: "Zásobník do Remington M700", category:"ammo", price:"12.5 NC", image:"ammo/remingtonm700.png", show:"yes", stock:""},
    { productId: "ammo.mosinnagantm1891", title: "Zásobník do Mosin Nagan M1891", category:"ammo", price:"10 NC", image:"ammo/mosinnagan.png", show:"yes", stock:""},
    { productId: "ammo.colt1911", title: "Zásobník do Colt 1911", category:"ammo", price:"4.5 NC", image:"ammo/colt1911.png", show:"yes", stock:""},
    { productId: "ammo.krissvector", title: "Zásobník do Kriss Vector", category:"ammo", price:"10 NC", image:"ammo/krissvector.png", show:"yes", stock:""},
    { productId: "ammo.uzi", title: "Zásobník do Heckler a Koch MP7", category:"ammo", price:"10 NC", image:"ammo/uzi.png", show:"yes", stock:""},
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
    
    if (product.individualni=== 'true') {
        productDiv.style.borderColor = 'orange';
    
        const individualniLabel = document.createElement('div');
        individualniLabel.classList.add('individualni-label');
        individualniLabel.textContent = 'Individuální';
        productDiv.appendChild(individualniLabel); 
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
    const nick = document.getElementById('nick').value;
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

    document.getElementById('nick').value = '';
    document.getElementById('number').value = '';
    document.getElementById('email').value = '';
    document.getElementById('delivery').value = '';
    document.getElementById('complete-form').style.display = 'none';
    

    const cartMessage = `**LemonGate nick:** ${nick} \n**Anonmail:** ${email}\n**Number:** ${number}\n**Delivery Option:** ${delivery}\n**Order Number:** ${orderNumber}\n\n**Cart Items:**\n${getFormattedCartProducts()}`;

    const embed = {
        title: 'New Purchase',
        color: 0x3498db, // Barva Embedu - posílán jakožto zpráva
        description: cartMessage,
    
        timestamp: new Date(),
        footer: {
            text: 'Powered by LemonGate🍋',
        },
    
        
    };

    function getFormattedCartProducts() {
        const cartProducts = getCartProducts().split(','); 
        return cartProducts.map(product => `• ${product.trim()}`).join('\n'); 
    }



    document.getElementById('nick').value = "";
    document.getElementById("number").value = "";
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

    cartTotalElement.textContent = `${total} NC`;
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




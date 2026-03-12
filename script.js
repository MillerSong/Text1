/* ============================================
   SUKARA RESTAURANTE - Main JavaScript
   Website Independente e Profissional
   ============================================ */

// ============================================
// MENU DATA - Complete menu extracted from images
// ============================================
const menuData = {
    pizzas: [
        { id: 'p1', name: 'Margherita', description: 'Molho de tomate e queijo mozzarella', price: 13000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p2', name: 'Hawaiian', description: 'Molho de tomate, fiambre de peru, ananás e queijo mozzarella', price: 14000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p3', name: 'Pollo', description: 'Molho de tomate, queijo mozzarella, tiras de frango, pimenta verde, cogumelo', price: 15000, image: 'assets/images/menu-pizzas.jpg', popular: true },
        { id: 'p4', name: 'BBQ', description: 'Molho de tomate, queijo mozzarella, carne moída, pimenta verde e cogumelo', price: 16000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p5', name: 'Tonno', description: 'Molho de tomate, queijo mozzarella, atum, cebola, azeitona preta', price: 15000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p6', name: 'Chikenista', description: 'Molho de tomate, queijo mozzarella, cebola e frango grelhado na brasa', price: 15000, image: 'assets/images/menu-pizzas.jpg', popular: true },
        { id: 'p7', name: '4 Estações', description: 'Combinação de 4 pizzas: Margherita, Vegetal, BBQ, Pollo', price: 15000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p8', name: 'Vegetariana', description: 'Molho de tomate, queijo mozzarella, cebola, pimenta verde, azeitona, beringela, courgette, tomate', price: 14000, image: 'assets/images/menu-pizzas.jpg' },
        { id: 'p9', name: 'Picanha', description: 'Molho de tomate, queijo mozzarella, picanha fatiada, feijão preto, cebola caramelizada', price: 17000, image: 'assets/images/menu-pizzas.jpg', popular: true }
    ],
    hamburgers: [
        { id: 'h1', name: 'Deluxe', description: 'Carne, queijo, alface, tomate, cebola, pimento verde e molho de cocktail', price: 6000, image: 'assets/images/menu-burgers.jpg' },
        { id: 'h2', name: 'Supreme', description: 'Carne, fiambre de peru, queijo, ovo, alface, tomate, cebola, pimento verde e molho de cocktail', price: 7000, image: 'assets/images/menu-burgers.jpg', popular: true },
        { id: 'h3', name: 'Big', description: 'Duas camadas de carne, queijo, alface e molho de cocktail', price: 10500, image: 'assets/images/menu-burgers.jpg' },
        { id: 'h4', name: 'Libanês', description: 'Carne, batatas fritas, ketchup e salada de repolho', price: 6000, image: 'assets/images/menu-burgers.jpg' },
        { id: 'h5', name: 'Chikenista', description: 'Frango grelhado na brasa desfiado, molho Chikenista picante', price: 5500, image: 'assets/images/menu-burgers.jpg', popular: true },
        { id: 'h6', name: 'Crispy', description: 'Peito de frango panado, queijo mozzarella, alface e molho de cocktail', price: 6000, image: 'assets/images/menu-burgers.jpg' },
        { id: 'h7', name: 'Picanha', description: 'Picanha fatiada, queijo, feijão preto, alface, cebola caramelizada e molho de feijão', price: 7000, image: 'assets/images/menu-burgers.jpg' }
    ],
    chickenista: [
        { id: 'c1', name: 'Chikenista Frango Inteiro', description: 'Inclui 2 molhos (Original, Picante, Beirut)', price: 15000, image: 'assets/images/menu-chickenista.jpg', popular: true },
        { id: 'c2', name: 'Chikenista Meio Frango', description: 'Inclui 1 molho (Original, Picante, Beirut)', price: 7750, image: 'assets/images/menu-chickenista.jpg' },
        { id: 'c3', name: 'Chikenista Sandwich', description: 'Frango grelhado na brasa desfiado, batatas fritas, molho picante no pão árabe', price: 3850, image: 'assets/images/menu-chickenista.jpg' },
        { id: 'c4', name: 'Chikenista Quesadilla', description: 'Frango grelhado na brasa desfiado, queijo, molho picante e batatas fritas', price: 6000, image: 'assets/images/menu-chickenista.jpg' },
        { id: 'c5', name: 'Tawouk', description: 'Peito de frango, salada de repolho, picles, molho e batatas fritas', price: 3850, image: 'assets/images/menu-chickenista.jpg' },
        { id: 'c6', name: 'Chikenista Frango Inteiro (No Prato)', description: 'Inclui 2 molhos + 2 acompanhamentos', price: 19000, image: 'assets/images/menu-chickenista.jpg', popular: true },
        { id: 'c7', name: 'Chikenista Meio Frango (No Prato)', description: 'Inclui 1 molho + 2 acompanhamentos', price: 11000, image: 'assets/images/menu-chickenista.jpg' }
    ],
    beirut: [
        { id: 'b1', name: 'Fajita de Frango', description: 'Peito de frango, queijo mozzarella e molho de abacate/BBQ', price: 4500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'b2', name: 'Fajita de Carne', description: 'Carne lombo, queijo mozzarella e molho', price: 5500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'b3', name: 'Picanha Picasso', description: 'Picanha fatiada, queijo, feijão preto, alface, molho de feijão, cebola caramelizada', price: 6800, image: 'assets/images/menu-beirut.jpg', popular: true },
        { id: 'b4', name: 'Fajita Mix', description: 'Carne lombo, peito de frango, queijo, alface, molho', price: 5550, image: 'assets/images/menu-beirut.jpg' },
        { id: 'b5', name: 'Picasso Atumar', description: 'Atum, alface, milho e maionese', price: 4500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'b6', name: 'Crispy Picasso', description: 'Peito de frango, queijo, alface, milho e maionese', price: 4500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'b7', name: 'Shawarma de Frango', description: 'Peito de frango, picles, batata frita e molho de alho', price: 3500, image: 'assets/images/menu-beirut.jpg' }
    ],
    manakish: [
        { id: 'm1', name: 'Zaatar', description: 'Feito com tomilho e semente de sésamo', price: 3500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'm2', name: 'Lamh Baajin "Sfiha"', description: 'Feito com carne moída, tomate, cebola e tempero', price: 5000, image: 'assets/images/menu-beirut.jpg' },
        { id: 'm3', name: 'Três Queijos', description: 'Feito com queijo akawi, queijo mozzarella e queijo flamingo', price: 5500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'm4', name: 'Queijo Akawi Al Naka', description: 'Feito com queijo al naka', price: 7500, image: 'assets/images/menu-beirut.jpg' },
        { id: 'm5', name: 'Manoushe Zaatar e Queijo', description: 'Feito com queijo e tomilho', price: 7000, image: 'assets/images/menu-beirut.jpg' },
        { id: 'm6', name: 'Za\'Queijo', description: 'Feito com queijo al naka e tomilho', price: 10000, image: 'assets/images/menu-beirut.jpg', popular: true },
        { id: 'm7', name: 'Vegetariano', description: 'Feito com tomate, cebola, pimento verde', price: 4000, image: 'assets/images/menu-beirut.jpg' }
    ],
    salads: [
        { id: 's1', name: 'Primavera', description: 'Alface, pepino, tomate, cenoura, pimento verde e vermelho, milho doce', price: 4500, image: 'assets/images/menu-saladas.jpg' },
        { id: 's2', name: 'Atumar', description: 'Alface, atum, ovo cozido, cenoura, azeitonas, milho doce e cebola', price: 6850, image: 'assets/images/menu-saladas.jpg', popular: true },
        { id: 's3', name: 'Pollo', description: 'Alface, peito de frango, pepino, tomate, milho doce e cebola', price: 5500, image: 'assets/images/menu-saladas.jpg' }
    ],
    tostas: [
        { id: 't1', name: 'Tosta de Queijo', description: 'Queijo flamingo', price: 3500, image: 'assets/images/menu-tostas.jpg' },
        { id: 't2', name: 'Tosta Mista', description: 'Queijo flamingo e fiambre de peru', price: 4000, image: 'assets/images/menu-tostas.jpg' },
        { id: 't3', name: 'Tosta Atum', description: 'Atum, tomate, milho e maionese', price: 4000, image: 'assets/images/menu-tostas.jpg' },
        { id: 't4', name: 'Club Sandwich', description: 'Queijo flamingo, fiambre de peru, alface e tomate, acompanhado de batatas fritas', price: 6500, image: 'assets/images/menu-tostas.jpg', popular: true },
        { id: 't5', name: 'Club Sukara', description: 'Peito de frango, queijo, fiambre, ovo, alface, tomate e molho, acompanhado de batatas fritas', price: 6850, image: 'assets/images/menu-tostas.jpg' },
        { id: 't6', name: 'Torrada', description: 'Torrada na manteiga', price: 2500, image: 'assets/images/menu-tostas.jpg' }
    ],
    omeletes: [
        { id: 'o1', name: 'Omelete Mista', description: 'Ovo, fiambre de peru e queijo', price: 6500, image: 'assets/images/menu-tostas.jpg' },
        { id: 'o2', name: 'Omelete Vegetariano', description: 'Ovo, queijo, tomate, cebola, pimento verde, milho doce', price: 6000, image: 'assets/images/menu-tostas.jpg' },
        { id: 'o3', name: 'Omelete Cogumelo', description: 'Ovo, cogumelo e queijo', price: 6000, image: 'assets/images/menu-tostas.jpg' },
        { id: 'o4', name: 'Omelete com Atum', description: 'Ovo, atum e queijo', price: 5500, image: 'assets/images/menu-tostas.jpg' },
        { id: 'o5', name: 'Omelete Espinafre', description: 'Ovo, espinafre e queijo', price: 3850, image: 'assets/images/menu-tostas.jpg' }
    ],
    miniaturas: [
        { id: 'mi1', name: 'Mini Pizza', description: 'Pequena pizza artesanal', price: 450, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi2', name: 'Mini Espinafre', description: 'Pastel de espinafre', price: 450, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi3', name: 'Mini Lamh Baajiin', description: 'Pastel de carne', price: 450, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi4', name: 'Mini Zaatar', description: 'Com tomilho e sésamo', price: 450, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi5', name: 'Mini Queijo Mozzarella', description: 'Com queijo mozzarella', price: 450, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi6', name: 'Chamuça Vegetariana', description: 'Pastel vegetariano', price: 850, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi7', name: 'Chamuça Frango', description: 'Pastel de frango', price: 1000, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi8', name: 'Chamuça Carne', description: 'Pastel de carne', price: 1000, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi9', name: 'Pizza Roll', description: 'Rolinho de pizza', price: 1500, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi10', name: 'Mini Fajita de Frango', description: 'Pequena fajita de frango', price: 1800, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi11', name: 'Mini Fajita de Carne', description: 'Pequena fajita de carne', price: 2000, image: 'assets/images/menu-miniaturas.jpg' },
        { id: 'mi12', name: 'Mini Hambúrguer', description: 'Pequeno hambúrguer', price: 2000, image: 'assets/images/menu-miniaturas.jpg' }
    ],
    bebidas: [
        { id: 'bq1', name: 'Chá Natural', description: 'Limão ou gengibre', price: 1500, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq2', name: 'Chá (Pacote)', description: 'Chá de pacote', price: 1000, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq3', name: 'Espresso', description: 'Café espresso', price: 1150, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq4', name: 'Espresso Duplo', description: 'Dose dupla de espresso', price: 2800, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq5', name: 'Espresso Descafeinado', description: 'Café sem cafeína', price: 1300, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq6', name: 'Meia Leite', description: 'Café com leite', price: 1850, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'bq7', name: 'Capuccino', description: 'Café capuccino', price: 2300, image: 'assets/images/menu-bebidas.jpg', popular: true },
        { id: 'bq8', name: 'Galão', description: 'Café galão', price: 2300, image: 'assets/images/menu-bebidas.jpg' }
    ],
    refrigerantes: [
        { id: 'r1', name: 'Gasosa (Lata 330ml)', description: 'Coca Cola, Coca Cola Zero, Fanta, Sprite, Sumol', price: 1100, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'r2', name: 'Sumos (Pacote 220ml)', description: 'Gardenia', price: 700, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'r3', name: 'Água Mineral (500ml)', description: 'Água pura', price: 600, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'r4', name: 'Água Tónica (Lata 330ml)', description: 'Tónica', price: 1300, image: 'assets/images/menu-bebidas.jpg' },
        { id: 'r5', name: 'Red Bull (Lata 330ml)', description: 'Energético', price: 3300, image: 'assets/images/menu-bebidas.jpg' }
    ],
    sumos: [
        { id: 'sn1', name: 'Detox Verde', description: 'Couve, gengibre, hortelã, coentro, maçã e ananás', price: 4850, image: 'assets/images/menu-bebidas.jpg', popular: true },
        { id: 'sn2', name: 'Laranja', description: 'Sumo de laranja natural', price: 3500, image: 'assets/images/menu-bebidas.jpg' }
    ],
    pratos: [
        { id: 'pr1', name: 'Fajita de Frango no Prato', description: 'Acompanhado de arroz, salada de repolho e batatas fritas', price: 10000, image: 'assets/images/menu-pratos.jpg' },
        { id: 'pr2', name: 'Fajita de Carne no Prato', description: 'Acompanhado de arroz, salada de repolho e batatas fritas', price: 11000, image: 'assets/images/menu-pratos.jpg' },
        { id: 'pr3', name: 'Picanha no Prato', description: 'Acompanhado de arroz, feijão preto, salada de repolho e batatas fritas', price: 12000, image: 'assets/images/menu-pratos.jpg', popular: true },
        { id: 'pr4', name: 'Crispy Strips (9 pedaços)', description: 'Tiras de frango panado acompanhado de batatas fritas e salada de repolho', price: 8500, image: 'assets/images/menu-pratos.jpg' },
        { id: 'pr5', name: 'Chicken Escalope', description: 'Peito de frango panado acompanhado de salada de repolho e batatas fritas', price: 8500, image: 'assets/images/menu-pratos.jpg' }
    ]
};

// Category names mapping
const categoryNames = {
    pizzas: 'Pizzas',
    hamburgers: 'Hambúrgueres',
    chickenista: 'Frango Chikenista',
    beirut: 'Sabor do Líbano',
    manakish: 'Manakish',
    salads: 'Saladas',
    tostas: 'Tostas',
    omeletes: 'Omeletes',
    miniaturas: 'Miniaturas',
    bebidas: 'Bebidas Quentes',
    refrigerantes: 'Refrigerantes',
    sumos: 'Sumos Naturais',
    pratos: 'Pratos do Dia'
};

// ============================================
// CART FUNCTIONALITY
// ============================================
let cart = JSON.parse(localStorage.getItem('sukaraCart')) || [];

function saveCart() {
    localStorage.setItem('sukaraCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(item, quantity = 1) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }
    
    saveCart();
    showNotification(`${item.name} adicionado ao carrinho!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
}

function updateQuantity(itemId, quantity) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = quantity;
            saveCart();
        }
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function formatPrice(price) {
    return price.toLocaleString('pt-AO') + ' Kz';
}

// ============================================
// CART UI
// ============================================
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total-amount');
    
    if (cartCount) {
        const count = getCartCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-basket"></i>
                    <p>O seu carrinho está vazio</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <p class="cart-item-price">${formatPrice(item.price)}</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn cart-decrease" data-id="${item.id}">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn cart-increase" data-id="${item.id}">+</button>
                            <button class="cart-item-remove" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners
            cartItems.querySelectorAll('.cart-decrease').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const item = cart.find(i => i.id === id);
                    if (item) updateQuantity(id, item.quantity - 1);
                });
            });
            
            cartItems.querySelectorAll('.cart-increase').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const item = cart.find(i => i.id === id);
                    if (item) updateQuantity(id, item.quantity + 1);
                });
            });
            
            cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.closest('.cart-item-remove').dataset.id;
                    removeFromCart(id);
                });
            });
        }
    }
    
    if (cartTotal) {
        cartTotal.textContent = formatPrice(getCartTotal());
    }
}

function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showNotification('O carrinho está vazio!', 'error');
        return;
    }
    
    const phoneNumber = '244948909000';
    
    let message = '*🍽️ NOVO PEDIDO - SUKARA*\n\n';
    message += '*Itens do Pedido:*\n\n';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        message += `• ${item.quantity}x ${item.name}\n`;
        message += `  ${formatPrice(item.price)} cada = ${formatPrice(itemTotal)}\n\n`;
    });
    
    message += `*TOTAL: ${formatPrice(getCartTotal())}*\n\n`;
    message += 'Obrigado pela preferência! 🙏';
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ============================================
// MENU RENDERING
// ============================================
function renderMenu(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;
    
    let items = [];
    
    if (category === 'all') {
        Object.values(menuData).forEach(categoryItems => {
            items = items.concat(categoryItems);
        });
    } else if (menuData[category]) {
        items = menuData[category];
    }
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <div>
                        <h3 class="menu-item-title">${item.name}</h3>
                    </div>
                    <span class="menu-item-price">${formatPrice(item.price)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-display" data-id="${item.id}">1</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="btn-add-cart" data-id="${item.id}">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    const quantities = {};
    
    menuGrid.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            quantities[id] = (quantities[id] || 1) - 1;
            if (quantities[id] < 1) quantities[id] = 1;
            document.querySelector(`.quantity-display[data-id="${id}"]`).textContent = quantities[id];
        });
    });
    
    menuGrid.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            quantities[id] = (quantities[id] || 1) + 1;
            document.querySelector(`.quantity-display[data-id="${id}"]`).textContent = quantities[id];
        });
    });
    
    menuGrid.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.btn-add-cart').dataset.id;
            const qty = quantities[id] || 1;
            
            let item = null;
            for (const category of Object.values(menuData)) {
                item = category.find(i => i.id === id);
                if (item) break;
            }
            
            if (item) {
                addToCart(item, qty);
                quantities[id] = 1;
                document.querySelector(`.quantity-display[data-id="${id}"]`).textContent = 1;
            }
        });
    });
}

// ============================================
// CATEGORY FILTERING
// ============================================
function initCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            mobileOverlay.classList.add('open');
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('open');
        });
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('open');
        });
    }
}

// ============================================
// GALLERY LIGHTBOX
// ============================================
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('open');
        });
    });
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('open');
        });
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('open');
            }
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// FORM HANDLING
// ============================================
function initForms() {
    const reservationForm = document.querySelector('.reservation-form');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(reservationForm);
            const data = Object.fromEntries(formData);
            
            const phoneNumber = '244948909000';
            let message = '*🍽️ NOVA RESERVA - SUKARA*\n\n';
            message += `*Nome:* ${data.nome}\n`;
            message += `*Telefone:* ${data.telefone}\n`;
            message += `*Data:* ${data.data}\n`;
            message += `*Hora:* ${data.hora}\n`;
            message += `*Pessoas:* ${data.pessoas}\n`;
            if (data.mensagem) {
                message += `*Mensagem:* ${data.mensagem}\n`;
            }
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
            
            showNotification('Reserva enviada com sucesso!');
            reservationForm.reset();
        });
    }
}

// ============================================
// QR CODE GENERATION
// ============================================
function generateQRCode() {
    const qrContainer = document.querySelector('.qr-container');
    if (!qrContainer) return;
    
    const currentUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'menu.html';
    
    if (typeof QRCode !== 'undefined') {
        qrContainer.innerHTML = '';
        new QRCode(qrContainer, {
            text: currentUrl,
            width: 200,
            height: 200,
            colorDark: '#0A0A0A',
            colorLight: '#FFFFFF',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initCategoryFilters();
    initGallery();
    initScrollAnimations();
    initForms();
    updateCartUI();
    generateQRCode();
    
    // Cart toggle
    const cartToggle = document.querySelector('.cart-toggle');
    const cartClose = document.querySelector('.cart-close');
    const cartOverlay = document.querySelector('.cart-overlay');
    const btnWhatsapp = document.querySelector('.btn-whatsapp');
    
    if (cartToggle) cartToggle.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    if (btnWhatsapp) btnWhatsapp.addEventListener('click', sendWhatsAppOrder);
    
    // Render menu if on menu page
    if (document.querySelector('.menu-grid') && window.location.pathname.includes('menu.html')) {
        renderMenu('all');
    }
});

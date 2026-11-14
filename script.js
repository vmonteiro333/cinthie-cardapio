
/* Cinthiê Confeitaria — catálogo de 28 produtos */

const INSTAGRAM = 'https://www.instagram.com/cinthieconfeitaria/';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'bolos-caseiros', label: 'Bolos caseiros' },
  { id: 'bolos-confeitados', label: 'Bolos confeitados' },
  { id: 'doces-sobremesas', label: 'Doces e sobremesas' },
  { id: 'bebidas', label: 'Bebidas' }
];

const categoryLabel = Object.fromEntries(
  categories.map(c => [c.id, c.label])
);

const categoryShort = {
  'bolos-caseiros': 'BOLO CASEIRO',
  'bolos-confeitados': 'BOLO CONFEITADO',
  'doces-sobremesas': 'DOCES E SOBREMESAS',
  'bebidas': 'BEBIDAS'
};

function createPlaceholderImage(name, category) {
  const label = (categoryShort[category] || 'CINTHIÊ').replace(/&/g, 'E');
  const title = (name.length > 30 ? name.slice(0, 30) + '…' : name).replace(/&/g, 'e');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2f251a"/><stop offset="1" stop-color="#12100e"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><rect x="28" y="28" width="544" height="544" rx="44" fill="none" stroke="#a98353" stroke-width="4"/><text x="300" y="210" text-anchor="middle" font-family="Georgia,serif" font-size="44" fill="#e0bb84">${label}</text><text x="300" y="308" text-anchor="middle" font-family="Georgia,serif" font-size="28" fill="#f5e7d3">${title}</text><path d="M190 398c50 26 170 26 220 0" fill="none" stroke="#d2aa71" stroke-width="8" stroke-linecap="round"/><path d="M224 452c36 18 116 18 152 0" fill="none" stroke="#d2aa71" stroke-width="6" stroke-linecap="round"/></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function item(id, category, name, price, description, image = null) {
  return {
    id, category, name, price, description,
    details: description,
    image: image || createPlaceholderImage(name, category),
    badge: categoryLabel[category]
  };
}

const products = [
  item('coca-cola-lata', 'bebidas', 'Coca Cola Lata', 7, 'Lata de refrigerante Coca Cola.', './assets/coca-cola-lata.webp'),
  item('guarana-zero', 'bebidas', 'Guaraná antártica zero', 7, 'Refrigerante Guaraná Antarctica Zero.', './assets/guarana-antartica-zero.webp'),
  item('suco-del-valle', 'bebidas', 'Suco de pêssego Del Valle', 8, 'Suco Del Valle sabor pêssego em lata.', './assets/suco-del-valle-pessego.webp'),
  item('schweppes', 'bebidas', 'Schweppes', 9, 'Lata de Schweppes Citrus.', './assets/schweppes-citrus.webp'),

  item('bolo-cenoura-ganache', 'bolos-caseiros', 'Bolo caseiro pequeno de cenoura com ganache de chocolate', 28, 'Bolo caseiro pequeno de cenoura, finalizado com ganache de chocolate.', './assets/bolo-cenoura-ganache.webp'),
  item('bolo-formigueiro-grande', 'bolos-caseiros', 'Bolo caseiro de formigueiro grande', 30, 'Bolo caseiro tamanho grande sabor formigueiro.', './assets/bolo-formigueiro-grande.webp'),
  item('bolo-mesclado-pequeno', 'bolos-caseiros', 'Bolo caseiro mesclado pequeno', 20, 'Bolo caseiro pequeno no sabor mesclado.', './assets/bolo-mesclado-pequeno.webp'),
  item('bolo-limao-cobertura', 'bolos-caseiros', 'Bolo caseiro de limão com cobertura', 40, 'Massa fofinha e cobertura de limão.', './assets/bolo-limao-cobertura.webp'),
  item('bolo-churros-pequeno', 'bolos-caseiros', 'Bolo de churros pequeno', 32, 'Bolo caseiro pequeno com proposta de churros.', './assets/bolo-churros-pequeno.webp'),

  item('bolo-ninho-nutella', 'bolos-confeitados', 'Bolo confeitado de ninho com nutella', 115, 'Bolo confeitado com massa macia, recheio de ninho e Nutella.', './assets/bolo-ninho-nutella.webp'),
  item('bolo-floresta-branca', 'bolos-confeitados', 'Bolo confeitado de floresta Branca', 98, 'Bolo confeitado no sabor floresta branca.', './assets/bolo-floresta-branca.webp'),
  item('bolo-ninho-morango', 'bolos-confeitados', 'Bolo confeitado de ninho com morango', 98, 'Bolo confeitado com recheio de ninho e morango.', './assets/bolo-ninho-morango.webp'),
  item('bolo-ninho-trufado', 'bolos-confeitados', 'Bolo confeitado de ninho trufado', 98, 'Bolo confeitado de ninho trufado.', './assets/bolo-ninho-trufado.webp'),
  item('bolo-doce-leite-morango', 'bolos-confeitados', 'Bolo confeitado de doce de leite com morango', 98, 'Massa macia e fofinha com recheio de doce de leite e morango.', './assets/bolo-doce-leite-morango.webp'),

  item('bolo-pote-ninho-morango', 'doces-sobremesas', 'Bolo de pote de ninho com morango', 15, 'Bolo de pote com creme de ninho e morango.', './assets/bolo-pote-ninho-morango.webp'),
  item('coxinha-pistache', 'doces-sobremesas', 'Coxinha de pistache (unidade)', 12, 'Doce tipo coxinha com recheio de pistache.', './assets/coxinha-pistache.webp'),
  item('coxinha-morango', 'doces-sobremesas', 'coxinha de morango (unidade)', 10, 'Doce tipo coxinha com morango.', './assets/coxinha-morango.webp'),
  item('mousse-maracuja-chocolate', 'doces-sobremesas', 'Mousse de maracujá com chocolate', 9, 'Sobremesa gelada de mousse de maracujá com chocolate.', './assets/mousse-maracuja-chocolate.webp'),
  item('brigadeiro-tradicional', 'doces-sobremesas', 'Brigadeiro tradicional', 7, 'Brigadeiro tradicional vendido por unidade.', './assets/brigadeiro-tradicional.webp'),
  item('brigadeiro-meio-amargo', 'doces-sobremesas', 'Brigadeiro meio amargo', 7, 'Brigadeiro meio amargo vendido por unidade.', './assets/brigadeiro-meio-amargo.webp'),
  item('casadinho', 'doces-sobremesas', 'casadinho', 7, 'Doce casadinho vendido por unidade.', './assets/casadinho.webp'),
  item('brigadeiro-pistache', 'doces-sobremesas', 'Brigadeiro de Pistache', 8, 'Brigadeiro de pistache vendido por unidade.', './assets/brigadeiro-pistache.webp'),
  item('bicho-de-pe', 'doces-sobremesas', 'Bicho de pé', 7, 'Doce bicho de pé vendido por unidade.', './assets/bicho-de-pe.webp'),
  item('cheesecake', 'doces-sobremesas', 'Cheesecake', 10, 'Cheesecake em porção individual.', './assets/cheesecake.webp'),
  item('pudim-pequeno', 'doces-sobremesas', 'Pudim pequeno', 8, 'Pudim em porção individual.', './assets/pudim-pequeno.webp'),
  item('brownie-nutella', 'doces-sobremesas', 'Brownie de Nutella', null, 'Brownie de Nutella. O valor não estava totalmente visível na captura enviada.', './assets/brownie-nutella.webp'),
  item('brownie-ninho-nutella', 'doces-sobremesas', 'Brownie de Ninho com Nutella', 16, 'Brownie com cobertura de ninho e Nutella.', './assets/brownie-ninho-nutella.webp'),
  item('brownie-tradicional', 'doces-sobremesas', 'Brownie tradicional', null, 'Brownie tradicional. O valor não estava totalmente visível na captura enviada.', './assets/brownie-tradicional.webp')
];

const grid = document.querySelector('#products-grid');
const categoryContainer = document.querySelector('#categories');
const searchInput = document.querySelector('#product-search');
const sortSelect = document.querySelector('#sort-select');
const resultsCount = document.querySelector('#results-count');
const emptyState = document.querySelector('#empty-state');
const modalBackdrop = document.querySelector('#product-modal');
const modalClose = document.querySelector('#modal-close');

let activeCategory = 'todos';
let lastFocusedElement = null;

const money = v => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(v);

const displayPrice = v => typeof v === 'number' ? money(v) : 'Consultar';
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const esc = s => String(s).replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

function renderCategories() {
  categoryContainer.innerHTML = categories.map(c =>
    `<button type="button" class="category-btn" data-category="${c.id}" aria-pressed="${activeCategory === c.id}">${esc(c.label)}</button>`
  ).join('');
}

function filteredProducts() {
  const term = normalize(searchInput.value.trim());

  let list = products.filter(p =>
    normalize(p.name + ' ' + p.description + ' ' + categoryLabel[p.category]).includes(term)
  );

  if (sortSelect.value === 'name')
    list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  if (sortSelect.value === 'price-low')
    list.sort((a, b) =>
      ((a.price ?? 999999) - (b.price ?? 999999)) ||
      a.name.localeCompare(b.name, 'pt-BR')
    );

  if (sortSelect.value === 'price-high')
    list.sort((a, b) =>
      ((b.price ?? -1) - (a.price ?? -1)) ||
      a.name.localeCompare(b.name, 'pt-BR')
    );

  return list;
}

function renderProductCard(p) {
  return `<article class="product-card">
    <button type="button" class="product-media" data-details="${p.id}" aria-label="Ver detalhes de ${esc(p.name)}">
      <img src="${p.image}" alt="Imagem do produto: ${esc(p.name)}" loading="lazy" decoding="async">
      ${p.badge ? `<span class="product-badge">${esc(p.badge)}</span>` : ''}
    </button>
    <div class="product-content">
      <p class="product-category">${esc(categoryLabel[p.category])}</p>
      <h3>${esc(p.name)}</h3>
      <p class="product-desc">${esc(p.description)}</p>
      <div class="product-bottom">
        <div>
          <small>${typeof p.price === 'number' ? 'Preço' : 'Valor'}</small>
          <strong class="product-price">${displayPrice(p.price)}</strong>
        </div>
        <button type="button" class="product-more" data-details="${p.id}" aria-label="Detalhes de ${esc(p.name)}">Ver</button>
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const visible = filteredProducts();
  const term = normalize(searchInput.value.trim());
  const showGroupedView =
    !term &&
    sortSelect.value === 'featured';

  if (showGroupedView) {
    const grouped = categories
      .filter(c => c.id !== 'todos')
      .map(c => ({
        category: c,
        items: products.filter(p => p.category === c.id)
      }))
      .filter(group => group.items.length);

    grid.innerHTML = grouped.map(group => `
      <section class="category-group" id="section-${group.category.id}" aria-labelledby="label-${group.category.id}">
        <div class="category-group-header">
          <div>
            <p class="category-kicker">Categoria</p>
            <h2 id="label-${group.category.id}">${esc(group.category.label)}</h2>
          </div>
          <span class="category-total">${group.items.length} ${group.items.length === 1 ? 'item' : 'itens'}</span>
        </div>
        <div class="category-group-grid">
          ${group.items.map(renderProductCard).join('')}
        </div>
      </section>
    `).join('');
  } else {
    grid.innerHTML = `<div class="products-grid-flat">${visible.map(renderProductCard).join('')}</div>`;
  }

  resultsCount.textContent =
    visible.length + ' ' +
    (visible.length === 1 ? 'produto encontrado' : 'produtos encontrados');

  emptyState.hidden = visible.length !== 0;
}

function openProduct(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  lastFocusedElement = document.activeElement;

  document.querySelector('#modal-category').textContent = categoryLabel[p.category];
  document.querySelector('#modal-title').textContent = p.name;
  document.querySelector('#modal-description').textContent = p.details;
  document.querySelector('#modal-value').textContent = displayPrice(p.price);

  const image = document.querySelector('#modal-image');
  image.alt = 'Imagem do produto: ' + p.name;
  image.src = p.image;

  modalBackdrop.hidden = false;
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus();
}

categoryContainer.addEventListener('click', event => {
  const btn = event.target.closest('[data-category]');
  if (!btn) return;

  activeCategory = btn.dataset.category;
  searchInput.value = '';
  sortSelect.value = 'featured';
  renderCategories();
  renderProducts();
  const target = document.getElementById(
    activeCategory === 'todos' ? 'cardapio' : `section-${activeCategory}`
  );
  target?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start'
  });
});

grid.addEventListener('click', event => {
  const btn = event.target.closest('[data-details]');
  if (btn) openProduct(btn.dataset.details);
});

searchInput.addEventListener('input', renderProducts);
sortSelect.addEventListener('change', renderProducts);

document.querySelector('#reset-filters').addEventListener('click', () => {
  activeCategory = 'todos';
  searchInput.value = '';
  sortSelect.value = 'featured';
  renderCategories();
  renderProducts();
  searchInput.focus();
});

modalClose.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener('keydown', event => {
  if (modalBackdrop.hidden) return;

  if (event.key === 'Escape') closeModal();

  if (event.key === 'Tab') {
    const focusable = [
      ...modalBackdrop.querySelectorAll('a[href],button:not([disabled])')
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

renderCategories();
renderProducts();

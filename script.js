/* Cinthiê Confeitaria — protótipo NEXORA. Produtos, preços e fotos fictícios. */
const DEMO_MODE=true;
const INSTAGRAM='https://www.instagram.com/cinthieconfeitaria/';
const FALLBACK_IMAGE='./assets/bolo-ilustrativo.svg';
const categories=[{id:'todos',label:'Todos os doces'},{id:'confeitados',label:'Bolos confeitados'},{id:'caseiros',label:'Bolos caseiros'},{id:'sobremesas',label:'Sobremesas'},{id:'docinhos',label:'Docinhos'}];
const categoryLabel=Object.fromEntries(categories.map(c=>[c.id,c.label]));
const photo=id=>'https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=850';
const demo=(id,category,name,description,price,image,badge=null)=>({id,category,name,description,details:description+' Produto de demonstração para ilustrar o futuro cardápio da Cinthiê. Confirme sabores e disponibilidade com a confeitaria.',price,image:photo(image),badge});
const products=[
demo('bolo-brigadeiro','confeitados','Bolo Brigadeiro','Camadas de chocolate e cobertura cremosa de brigadeiro.',119.90,16777905,'Mais querido'),
demo('bolo-morangos','confeitados','Bolo de Morangos','Creme delicado, frutas frescas e um toque de encanto.',139.90,32397279,'Destaque'),
demo('bolo-festa','confeitados','Bolo de Celebração','Um bolo especial para deixar a festa ainda mais doce.',149.90,31482558),
demo('bolo-chocolate','confeitados','Bolo de Chocolate','Chocolate intenso, cobertura delicada e muito carinho.',129.90,15266219),
demo('caseiro-limao','caseiros','Bolo de Limão','Macio, perfumado e perfeito para o café da tarde.',39.90,18831570,'Caseirinho'),
demo('caseiro-cenoura','caseiros','Bolo de Cenoura','Receita aconchegante para compartilhar em família.',44.90,5742607),
demo('caseiro-chocolate','caseiros','Bolo Caseiro de Chocolate','Fofinho, com sabor de casa e vontade de repetir.',42.90,264892),
demo('caseiro-amendoas','caseiros','Bolo de Amêndoas','Sabor delicado para acompanhar uma boa conversa.',45.90,21820865),
demo('cheesecake','sobremesas','Cheesecake de Morango','Creme aveludado com calda de frutas vermelhas.',22.90,17324803,'Favorito'),
demo('fatia-chocolate','sobremesas','Fatia de Chocolate','A porção ideal para uma pausa deliciosa.',19.90,10849887),
demo('brownie','sobremesas','Brownie Especial','Casquinha delicada e interior de chocolate.',16.90,3259585),
demo('cupcakes','docinhos','Cupcakes Decorados','Pequenos, charmosos e cheios de personalidade.',12.90,36466310,'Para festas'),
demo('mini-brownie','docinhos','Mini Brownie','Um quadradinho de felicidade em cada mordida.',8.90,5386676),
demo('mini-bolo','docinhos','Mini Bolo Especial','Uma pequena celebração só para você.',24.90,35717253)
];
const grid=document.querySelector('#products-grid'), categoryContainer=document.querySelector('#categories'), searchInput=document.querySelector('#product-search'), sortSelect=document.querySelector('#sort-select'), resultsCount=document.querySelector('#results-count'), emptyState=document.querySelector('#empty-state'), modalBackdrop=document.querySelector('#product-modal'), modalClose=document.querySelector('#modal-close');
let activeCategory='todos',lastFocusedElement=null;
const money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v);
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function renderCategories(){categoryContainer.innerHTML=categories.map((c,i)=>'<button type="button" class="category-btn" data-category="'+c.id+'" aria-pressed="'+(activeCategory===c.id)+'"><span class="category-num">'+String(i).padStart(2,'0')+'</span>'+esc(c.label)+'</button>').join('');}
function filteredProducts(){const term=normalize(searchInput.value.trim());let list=products.filter(p=>(activeCategory==='todos'||p.category===activeCategory)&&normalize(p.name+' '+p.description+' '+categoryLabel[p.category]).includes(term));if(sortSelect.value==='name')list.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));if(sortSelect.value==='price-low')list.sort((a,b)=>a.price-b.price);if(sortSelect.value==='price-high')list.sort((a,b)=>b.price-a.price);return list;}
function renderProducts(){const visible=filteredProducts();grid.innerHTML=visible.map(p=>'<article class="product-card"><button type="button" class="product-media" data-details="'+p.id+'" aria-label="Ver detalhes de '+esc(p.name)+'"><img src="'+p.image+'" alt="Imagem ilustrativa: '+esc(p.name)+'" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=\''+FALLBACK_IMAGE+'\'">'+(p.badge?'<span class="product-badge">'+esc(p.badge)+'</span>':'')+'</button><div class="product-content"><p class="product-category">'+esc(categoryLabel[p.category])+'</p><h3>'+esc(p.name)+'</h3><p class="product-desc">'+esc(p.description)+'</p><div class="product-bottom"><div><small>Preço ilustrativo</small><strong class="product-price">'+money(p.price)+'</strong></div><button type="button" class="product-more" data-details="'+p.id+'" aria-label="Detalhes de '+esc(p.name)+'">Ver</button></div></div></article>').join('');resultsCount.textContent=visible.length+' '+(visible.length===1?'doce encontrado':'doces encontrados');emptyState.hidden=visible.length!==0;}
function openProduct(id){const p=products.find(item=>item.id===id);if(!p)return;lastFocusedElement=document.activeElement;document.querySelector('#modal-category').textContent=categoryLabel[p.category]+' / Exemplo';document.querySelector('#modal-title').textContent=p.name;document.querySelector('#modal-description').textContent=p.details;document.querySelector('#modal-value').textContent=money(p.price);const image=document.querySelector('#modal-image');image.alt='Imagem ilustrativa de '+p.name;image.onerror=()=>{image.onerror=null;image.src=FALLBACK_IMAGE};image.src=p.image;modalBackdrop.hidden=false;document.body.classList.add('modal-open');modalClose.focus();}
function closeModal(){modalBackdrop.hidden=true;document.body.classList.remove('modal-open');lastFocusedElement?.focus();}
categoryContainer.addEventListener('click',event=>{const btn=event.target.closest('[data-category]');if(!btn)return;activeCategory=btn.dataset.category;renderCategories();renderProducts();});
grid.addEventListener('click',event=>{const btn=event.target.closest('[data-details]');if(btn)openProduct(btn.dataset.details);});
searchInput.addEventListener('input',renderProducts);sortSelect.addEventListener('change',renderProducts);
document.querySelector('#reset-filters').addEventListener('click',()=>{activeCategory='todos';searchInput.value='';sortSelect.value='featured';renderCategories();renderProducts();searchInput.focus();});
modalClose.addEventListener('click',closeModal);
modalBackdrop.addEventListener('click',event=>{if(event.target===modalBackdrop)closeModal()});
document.addEventListener('keydown',event=>{if(modalBackdrop.hidden)return;if(event.key==='Escape')closeModal();if(event.key==='Tab'){const focusable=[...modalBackdrop.querySelectorAll('a[href],button:not([disabled])')];const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
renderCategories();renderProducts();
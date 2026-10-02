const menuData = [
  {id:"malfouf", name:"🥪 الملفوف", items:[
    {name:"MALFOUF MAKLOUB CHAWARMA", prices:[["300 DA",300]]},{name:"MALFOUF MAKLOUB POULET",prices:[["300 DA",300]]},{name:"MALFOUF MAKLOUB VIANDE HACHÉE",prices:[["350 DA",350]]},{name:"MALFOUF MAKLOUB PANACHÉ",prices:[["450 DA",450]]},{name:"MALFOUF MAKLOUB FOIE",prices:[["400 DA",400]]},{name:"MALFOUF MAKLOUB SPÉCIAL",prices:[["500 DA",500]]},{name:"MALFOUF TUNISIEN CHAWARMA",prices:[["300 DA",300]]},{name:"MALFOUF TUNISIEN POULET",prices:[["300 DA",300]]},{name:"MALFOUF TUNISIEN VIANDE HACHÉE",prices:[["300 DA",300]]},{name:"MALFOUF TUNISIEN PANACHÉ",prices:[["400 DA",400]]},{name:"MALFOUF TUNISIEN FOIE",prices:[["350 DA",350]]},{name:"MALFOUF TUNISIEN SPÉCIAL",prices:[["450 DA",450]]},{name:"EXTRA DOUBLE VIANDE",prices:[["+150 DA",150]]}
  ]},
  {id:"burger",name:"🍔 البرجر",items:[
    {name:"MIAM HAMBURGER — لحم مفروم طازج",prices:[["250 DA",250]]},{name:"BIG MIAM HAMBURGER — لحم مضاعف + جبن مضاعف",prices:[["300 DA",300]]},{name:"BIG CHIKEN HAMBURGER — سكالوب مفروم مضاعف + جبن",prices:[["300 DA",300]]},{name:"KING HAMBURGER — لحم مفروم طازج ثلاثي",prices:[["400 DA",400]]}
  ]},
  {id:"shawarma",name:"🌯 الشاورما والمطلوع",items:[
    {name:"SHAWARMA العربي",prices:[["250 DA",250]]},{name:"POULET العربي",prices:[["300 DA",300]]},{name:"VIANDE HACHÉE العربي",prices:[["350 DA",350]]},{name:"MERGAZ العربي",prices:[["350 DA",350]]},{name:"PANACHÉ العربي",prices:[["450 DA",450]]},{name:"FOIE العربي",prices:[["450 DA",450]]},{name:"SPECIAL العربي",prices:[["600 DA",600]]},
    {name:"MATLOU3 SHAWARMA",prices:[["300 DA",300]]},{name:"MATLOU3 POULET",prices:[["300 DA",300]]},{name:"MATLOU3 VIANDE HACHÉE",prices:[["300 DA",300]]},{name:"MATLOU3 FOIE",prices:[["350 DA",350]]},{name:"MATLOU3 PANACHÉ",prices:[["400 DA",400]]}
  ]},
  {id:"tacos",name:"🌮 التاكو",items:[
    {name:"TACOS CHAWARMA — Gratiné",prices:[["L",450],["XL",900]]},{name:"TACOS POULET — Gratiné",prices:[["L",450],["XL",900]]},{name:"TACOS VIANDE HACHÉE — Gratiné",prices:[["L",500],["XL",1000]]},{name:"TACOS MERGAZ — Gratiné",prices:[["L",500],["XL",1000]]},{name:"TACOS PANACHÉ — Gratiné",prices:[["L",550],["XL",1100]]},{name:"TACOS FOIE — Gratiné",prices:[["L",550],["XL",1100]]},{name:"TACOS SPÉCIAL — Gratiné",prices:[["L",700],["XL",1400]]},{name:"TACOS JIGA — Gratiné",prices:[["XL",2000]]},
    {name:"TACOS CHAWARMA — Classique",prices:[["L",400],["XL",800],["XXL",1600]]},{name:"TACOS POULET — Classique",prices:[["L",400],["XL",800],["XXL",1600]]},{name:"TACOS VIANDE HACHÉE — Classique",prices:[["L",450],["XL",900],["XXL",1800]]},{name:"TACOS MERGAZ — Classique",prices:[["L",450],["XL",900],["XXL",1800]]},{name:"TACOS PANACHÉ — Classique",prices:[["L",500],["XL",1000],["XXL",2000]]},{name:"TACOS FOIE — Classique",prices:[["L",500],["XL",1000],["XXL",2000]]},{name:"TACOS SPÉCIAL — Classique",prices:[["L",600],["XL",1200],["XXL",2400]]},
    {name:"TACOS CHAWARMA — Crispy",prices:[["500 DA",500]]},{name:"TACOS POULET — Crispy",prices:[["500 DA",500]]},{name:"TACOS VIANDE HACHÉE — Crispy",prices:[["650 DA",650]]},{name:"TACOS MERGAZ — Crispy",prices:[["550 DA",550]]},{name:"TACOS PANACHÉ — Crispy",prices:[["600 DA",600]]},{name:"TACOS FOIE — Crispy",prices:[["600 DA",600]]},{name:"TACOS SPÉCIAL — Crispy",prices:[["700 DA",700]]},{name:"EXTRA DOUBLE VIANDE",prices:[["+150 DA",150]]}
  ]},
  {id:"pizza",name:"🍕 البيتزا",items:[
    {name:"PIZZA MARGHERITA",prices:[["L",300],["XL",600],["XXL",1200]]},{name:"PIZZA VÉGÉTARIENNE",prices:[["L",450],["XL",900],["XXL",1800]]},{name:"PIZZA ORIENTALE",prices:[["L",500],["XL",1000],["XXL",2000]]},{name:"PIZZA PÊCHEUR",prices:[["L",500],["XL",1000],["XXL",2000]]},{name:"PIZZA CHIKEN",prices:[["L",500],["XL",1000],["XXL",2000]]},{name:"PIZZA NOSTRA",prices:[["L",650],["XL",1200],["XXL",2600]]},{name:"PIZZA 4 FROMAGES",prices:[["L",750],["XL",1500],["XXL",3000]]},{name:"PIZZA SPÉCIALE",prices:[["L",700],["XL",1400],["XXL",2800]]},{name:"PIZZA MAISON",prices:[["L",750],["XL",1500],["XXL",3000]]},{name:"PIZZA ROYALE",prices:[["L",900],["XL",1800],["XXL",3600]]},{name:"PIZZA 4 SAISONS",prices:[["L",750],["XL",1500],["XXL",3000]]},
    {name:"LA BOISÉE POULET",prices:[["L",600],["XL",1200],["XXL",2400]]},{name:"LA BOISÉE VIANDE HACHÉE",prices:[["L",650],["XL",1300],["XXL",2600]]},{name:"LA BOISÉE MERGAZ",prices:[["L",650],["XL",1300],["XXL",2600]]},{name:"LA BOISÉE 4 FROMAGES",prices:[["L",800],["XL",1600],["XXL",3200]]},{name:"LA BOISÉE FUMÉE",prices:[["L",750],["XL",1500],["XXL",3000]]},{name:"LA BOISÉE CREVETTE",prices:[["L",900],["XL",1800],["XXL",3600]]},
    {name:"PIZZA PANACHÉE — Maison",prices:[["L",600],["XL",1200],["XXL",2400]]},{name:"PIZZA 3 SAISONS THONE",prices:[["XL",1300],["XXL",2600]]},{name:"PIZZA MERGAZ — Maison",prices:[["XL",1300],["XXL",2600]]},{name:"LA BOISÉE 4 FROMAGES — Maison",prices:[["L",800],["XL",1300],["XXL",2600]]},{name:"PIZZA CHEF",prices:[["L",800],["XL",1600],["XXL",3200]]},{name:"PIZZA 3 VIANDES",prices:[["L",800],["XL",1600],["XXL",3200]]},{name:"PIZZA 4 SAISONS ROYAL",prices:[["L",750],["XL",1500],["XXL",3000]]},
    {name:"1/4 Pizza Poulet",prices:[["القطعة",200]]},{name:"Tranche Pizza",prices:[["القطعة",50]]},{name:"Suppléments Pizza",prices:[["L",250],["XL",350],["XXL",500]]}
  ]},
  {id:"sandwich",name:"🥪 السندويشات والشباتي",items:[
    {name:"SANDWICH PITA PIT CHAWARMA",prices:[["450 DA",450]]},{name:"SANDWICH PITA PIT ESCALOPE",prices:[["450 DA",450]]},{name:"SANDWICH PITA PIT VIANDE HACHÉE",prices:[["450 DA",450]]},{name:"SANDWICH PITA PIT POULET",prices:[["450 DA",450]]},{name:"SANDWICH PITA PIT FOIE",prices:[["500 DA",500]]},{name:"SANDWICH PITA PIT PANACHÉE",prices:[["500 DA",500]]},{name:"SANDWICH PITA PIT SPÉCIALE",prices:[["600 DA",600]]},
    {name:"SANDWICH SHAWARMA",prices:[["300 DA",300]]},{name:"SANDWICH ESCALOPE",prices:[["300 DA",300]]},{name:"SANDWICH VIANDE HACHÉE",prices:[["300 DA",300]]},{name:"SANDWICH POULET",prices:[["300 DA",300]]},{name:"SANDWICH FOIE",prices:[["350 DA",350]]},{name:"SANDWICH PANACHÉ",prices:[["400 DA",400]]},
    {name:"COMBO SHAWARMA / ESCALOPE / VIANDE HACHÉE / POULET",prices:[["350 DA",350]]},{name:"COMBO FOIE",prices:[["350 DA",350]]},
    {name:"CHAPATI THON",prices:[["300 DA",300]]},{name:"CHAPATI CHAWARMA",prices:[["300 DA",300]]},{name:"CHAPATI POULET",prices:[["300 DA",300]]},{name:"CHAPATI ESCALOPE",prices:[["300 DA",300]]},{name:"CHAPATI VIANDE HACHÉE",prices:[["300 DA",300]]},{name:"CHAPATI FOIE",prices:[["350 DA",350]]},{name:"CHAPATI PANACHE",prices:[["400 DA",400]]}
  ]},
  {id:"soufflee",name:"🥟 السوفلي والفاهيتا",items:[
    {name:"SOUFFLÉE CHAWARMA",prices:[["500 DA",500]]},{name:"SOUFFLÉE POULET",prices:[["550 DA",550]]},{name:"SOUFFLÉE VIANDE HACHÉE",prices:[["550 DA",550]]},{name:"SOUFFLÉE PANACHÉ",prices:[["650 DA",650]]},{name:"SOUFFLÉE FOIE",prices:[["600 DA",600]]},
    {name:"FAJITAS CHAWARMA",prices:[["L",450],["XL",900]]},{name:"FAJITAS POULET",prices:[["L",450],["XL",900]]},{name:"FAJITAS VIANDE HACHÉE",prices:[["L",500],["XL",1000]]},{name:"FAJITAS MERGAZ",prices:[["L",500],["XL",1000]]},{name:"FAJITAS PANACHÉ",prices:[["L",550],["XL",1100]]},{name:"FAJITAS FOIE",prices:[["L",550],["XL",1100]]}
  ]},
  {id:"plats",name:"🍟 البوتين والأطباق",items:[
    {name:"POUTINE POULET",prices:[["400 DA",400]]},{name:"POUTINE KRISPY",prices:[["400 DA",400]]},{name:"POUTINE VIANDE",prices:[["400 DA",400]]},{name:"POUTINE 3 FROMAGES",prices:[["400 DA",400]]},
    {name:"PLAT FRITE",prices:[["200 DA",200]]},{name:"PLAT SANS VIANDE",prices:[["350 DA",350]]},{name:"PLAT REGIME",prices:[["500 DA",500]]}
  ]},
  {id:"entrees",name:"🥟 المقبلات",items:[
    {name:"BOREK",prices:[["170 DA",170]]},{name:"KORNI",prices:[["170 DA",170]]},{name:"MINI TACOS",prices:[["170 DA",170]]},{name:"MINI SOUFFLÉE",prices:[["170 DA",170]]},{name:"PANÉ FRITE",prices:[["70 DA",70]]},{name:"KINTAKI",prices:[["200 DA",200]]},{name:"KRISPI",prices:[["400 DA",400]]}
  ]}
];

const foodImages = {
  malfouf:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85',
  burger:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  shawarma:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85',
  tacos:'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85',
  pizza:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85',
  sandwich:'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85',
  soufflee:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
  plats:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  entrees:'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85'
};

function imageFor(group,item){
  const n=item.name.toLowerCase();
  if(group.id==='pizza') {
    if(n.includes('crevette')) return 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85';
    return foodImages.pizza;
  }
  if(group.id==='plats' && n.includes('poutine')) return 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=85';
  if(group.id==='entrees' && n.includes('borek')) return 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85';
  return foodImages[group.id] || foodImages.malfouf;
}

let order = [];
const money = n => `${n.toLocaleString("fr-FR")} DA`;

function renderMenu(filter="all"){
  const products=document.getElementById("products");
  const groups=filter==="all"?menuData:menuData.filter(g=>g.id===filter);
  products.innerHTML=groups.flatMap(group=>group.items.map((item,idx)=>`
    <article class="product">
      <div class="product-img"><img src="${imageFor(group,item)}" alt="${item.name.replace(/"/g,'&quot;')}" loading="lazy"><span class="img-badge">${group.name.replace(/^[^\p{L}]*/u,'')}</span></div>
      <span class="eyebrow">${group.name.replace(/^[^\u0000-\u007F]+/,"").trim()}</span>
      <h3>${item.name}</h3>
      ${item.prices.length>1 ? `<div class="size-list">${item.prices.map((p,i)=>`<button class="size-btn" onclick="addToOrder('${escapeAttr(item.name+" ("+p[0]+")")}',${p[1]})">${p[0]} — ${money(p[1])}</button>`).join("")}</div>` :
      `<div class="price-row"><span class="price">${money(item.prices[0][1])}</span><button class="add" onclick="addToOrder('${escapeAttr(item.name)}',${item.prices[0][1]})">أضف للطلب</button></div>`}
    </article>`)).join("");
}

function escapeAttr(s){return s.replace(/\\/g,"\\\\").replace(/'/g,"\\'");}

function renderCategories(){
  const el=document.getElementById("categories");
  el.innerHTML=`<button class="cat active" data-filter="all">الكل</button>`+
    menuData.map(g=>`<button class="cat" data-filter="${g.id}">${g.name}</button>`).join("");
  el.querySelectorAll(".cat").forEach(btn=>btn.addEventListener("click",()=>{
    el.querySelectorAll(".cat").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.filter);
  }));
}

function addToOrder(name,price){
  order.push({name,price});
  updateCart();
}
function updateCart(){
  const total=order.reduce((s,x)=>s+x.price,0);
  document.getElementById("cartCount").textContent=order.length;
  document.getElementById("cartTotal").textContent=money(total);
}
function showOrder(){
  const box=document.getElementById("orderItems");
  if(!order.length){box.innerHTML="<p>لم تضف أي وجبة بعد.</p>";}
  else{
    box.innerHTML=order.map((x,i)=>`<div class="order-line"><span>${i+1}. ${x.name}</span><b>${money(x.price)}</b></div>`).join("");
  }
  document.getElementById("modalTotal").textContent=money(order.reduce((s,x)=>s+x.price,0));
  updateWhatsapp();
  const modal=document.getElementById("modal");
  modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
}
function closeOrder(){
  const modal=document.getElementById("modal");
  modal.classList.remove("show"); modal.setAttribute("aria-hidden","true");
}
function clearOrder(){order=[];updateCart();showOrder();}
function updateWhatsapp(){
  const phone=document.getElementById("branch").value;
  const lines=order.map((x,i)=>`${i+1}. ${x.name} — ${money(x.price)}`).join("\n");
  const total=order.reduce((s,x)=>s+x.price,0);
  const text=order.length?`السلام عليكم، أريد طلبًا من Pita Pit 2:\n${lines}\nالمجموع: ${money(total)}`:"السلام عليكم، أريد الاستفسار عن قائمة Pita Pit 2.";
  document.getElementById("whatsapp").href=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
document.getElementById("branch").addEventListener("change",updateWhatsapp);
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
renderCategories();renderMenu();

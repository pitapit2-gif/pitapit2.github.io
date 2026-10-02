const cart = [];
const whatsappNumber = "213799232810"; // رقم فرع العالية - عدله إذا كان رقم واتساب مختلفًا

function addToOrder(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").textContent = cart.length;
  const total = cart.reduce((s,i)=>s+i.price,0);
  document.getElementById("cartTotal").textContent = total + " دج";
}

function showOrder(){
  const box = document.getElementById("orderItems");
  if(!cart.length){
    box.innerHTML = '<p style="color:#89938d">لم تضف أي منتج بعد.</p>';
  } else {
    box.innerHTML = cart.map((item,i)=>`
      <div class="order-line">
        <span>${i+1}. ${item.name}</span>
        <strong>${item.price} دج</strong>
      </div>`).join("");
  }
  const total = cart.reduce((s,i)=>s+i.price,0);
  document.getElementById("modalTotal").textContent = total + " دج";
  const text = "السلام عليكم، أريد طلب:%0A" +
    cart.map((i,n)=>`${n+1}- ${i.name} (${i.price} دج)`).join("%0A") +
    `%0Aالمجموع: ${total} دج`;
  document.getElementById("whatsapp").href = `https://wa.me/${whatsappNumber}?text=${text}`;
  document.getElementById("modal").classList.add("show");
}
function closeOrder(){document.getElementById("modal").classList.remove("show");}

document.querySelectorAll(".cat").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".cat").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    document.querySelectorAll(".product").forEach(card=>{
      card.style.display=(filter==="all"||card.dataset.category===filter)?"block":"none";
    });
  });
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav").classList.toggle("open");
});

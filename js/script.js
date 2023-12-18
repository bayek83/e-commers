const menu = document.getElementById("menu");
const user = document.getElementById("akun");
const navLink = document.querySelector(".nav-link");
const nice = document.querySelector(".akun");
const navbar = document.querySelector(".navbar");
const akunBar = document.querySelector(".akunBar");
const userName = document.getElementById("userName");
const btn = document.getElementById("btn");
const btnCart = document.getElementById("cart-shop");
const cartBody = document.querySelector(".cart-shop-nice");
const closeCart = document.querySelectorAll(".btn-close-cart");
const btnChec = document.querySelector("#checkout");
const checkBody = document.querySelector(".nicebro");
const checkR = document.querySelector(".btn-check");
let valueDisplay = document.querySelectorAll(".num");
let interval = 4000;

btn.addEventListener("click", login);

function login(event) {
  event.preventDefault();
  const title = document.createElement("h4");
  title.classList.add("btnLogout");
  title.innerHTML = userName.value;
  akunBar.appendChild(title);
  user.style.display = "none";
  nice.style.display = "none";
}

menu.addEventListener("click", function (e) {
  e.preventDefault();
  navLink.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("scrollY");
  } else if (window.screenY == 0) {
    navbar.classList.remove("scrollY");
  }
});

user.addEventListener("click", function (e) {
  nice.classList.toggle("muncul");
  e.preventDefault();
});

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// modal box
const itemDetail = document.getElementById("modal");
const viewBtn = document.querySelectorAll(".item-detail-button");

viewBtn.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});
btnChec.addEventListener("click", function () {
  checkBody.style.display = "flex";
});

document.querySelector(".close").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

// go to shopping
checkR.addEventListener("click", function () {
  location.reload();
});
// click di luar
window.onclick = (e) => {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
  if (e.target === checkBody) {
    checkBody.style.display = "none";
  }
};

// cart
btnCart.onclick = (e) => {
  cartBody.classList.toggle("show");
  e.preventDefault();
};
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
  }
  if (!btnCart.contains(e.target) && !cartBody.contains(e.target)) {
    cartBody.classList.remove("show");
  }
  if (!user.contains(e.target) && !nice.contains(e.target)) {
    nice.classList.remove("muncul");
  }
});
// plusmin
const minus = document.querySelectorAll(".min");
const numor = document.querySelectorAll(".numor");
const plus = document.querySelectorAll(".plus");

let a = Array.from({ length: plus.length }, () => 0); // Array nilai awal untuk setiap elemen numor

plus.forEach((tambah, index) => {
  tambah.addEventListener("click", () => {
    a[index]++;
    a[index] = a[index] < 10 ? "0" + a[index] : a[index];
    numor[index].innerHTML = a[index];
  });
});

minus.forEach((kurang, index) => {
  kurang.addEventListener("click", () => {
    if (a[index] > 0) {
      a[index]--;
      a[index] = a[index] < 10 ? "0" + a[index] : a[index];
      numor[index].innerHTML = a[index];
    }
  });
});

// close cart
closeCart.forEach((closeC, index) => {
  closeC.addEventListener("click", () => {
    const contentCarts = document.querySelectorAll(".content-cart");
    contentCarts[index].style.display = "none";
  });
});
// checkout
checkout.onclick = () => {};

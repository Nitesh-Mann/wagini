document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.getElementsByClassName("checkbox");
  var header2Menus = document.querySelector(".header2");
  var closeBtn = document.querySelector(".close-btn");

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
      if (this.checked) {
        header2Menus.classList.add("show");
      } else {
        header2Menus.classList.remove("show");
      }
    });
  }

  closeBtn.addEventListener("click", function () {
    header2Menus.classList.remove("show");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  });
});

// show cart function //

document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const cartIcon = document.querySelector(".cart-icon");
  const closeCart = document.querySelector(".close-cart");
  const cartBg = document.querySelector(".cart-bg");
  const cartBox = document.querySelector(".cart-box");

  // Function to show the cart
  function showCart() {
    cartBox.classList.add("cart-show");
  }

  // Function to hide the cart
  function hideCart() {
    cartBox.classList.remove("cart-show");
  }

  // Event listeners
  cartIcon.addEventListener("click", showCart);
  closeCart.addEventListener("click", hideCart);
});

// show logos //

document.addEventListener("DOMContentLoaded", (event) => {
  const yummBuzzSection = document.querySelector(".yummbuzz-section");
  const waginiSection = document.querySelector(".wagini-section");
  const logo1 = document.querySelector(".logo-1");
  const logo2 = document.querySelector(".logo-2");

  yummBuzzSection.addEventListener("mouseover", () => {
    logo1.classList.add("show-logos");
  });

  yummBuzzSection.addEventListener("mouseout", () => {
    logo1.classList.remove("show-logos");
  });

  waginiSection.addEventListener("mouseover", () => {
    logo2.classList.add("show-logos");
  });

  waginiSection.addEventListener("mouseout", () => {
    logo2.classList.remove("show-logos");
  });
});

// scroll window to top //

document.addEventListener("DOMContentLoaded", (event) => {
  const upButton = document.querySelector(".up-button");

  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

var swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  draggable: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

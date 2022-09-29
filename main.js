let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//EmailJS
let yourName = document.querySelector(".name");
let email = document.querySelector(".email");
let msg = document.querySelector(".message");
let sendBtn = document.querySelector(".send-btn");
let form = document.getElementById("contact-form");

function validate() {
  sendBtn.addEventListener("click", e => {
    e.preventDefault();
    if (yourName.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else if (ValidateEmail(email)) {
      sendmail(yourName.value, email.value, msg.value);
      success();
      form.reset();
    } else {
      return 0;
    }
  });
}
validate();

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    // alert("Valid email address!");
    // document.form1.text1.focus();
    return true;
  } else {
    // alert("You have entered an invalid email address!");
    invalid();
    document.form1.text1.focus();
    return false;
  }
}

function sendmail(name, email, msg) {
  emailjs.send("service_001vm6n", "template_z3t7fyb", {
    from_name: name,
    to_name: "Andrew",
    reply_to: email,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh no...",
    text: "Fields cannot be empty!",
    icon: "error",
    button: "OK",
  });
}

function invalid() {
  swal({
    title: "Invalid email address",
    text: "The email address entered is invalid",
    icon: "error",
    button: "OK",
  });
}

function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply within 24 hours",
    icon: "success",
    button: "OK",
  });
}

//Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

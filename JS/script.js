// owl init
$('.owl-carousel').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       responsive:{
          0:{
          items:1
           },
          600:{
            items:3
           },
          1000:{
            items:5
          }
       }
     })
    
// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzadrDI8dgYaMGsfwHtory616kfh4CEQ-XFnah8fpbecljzZVDvsCtxamsjCpZUsZuP_Q/exec';
const form = document.forms["cortis-form"];
const btnKirim = document.querySelector(".btn-kirim");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      //reset formnya
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

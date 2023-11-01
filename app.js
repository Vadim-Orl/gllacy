
let feedback_link = document.querySelector('.button-feedback');
let feedback_popup = document.querySelector('.modal-feedback');
let feedback_close = document.querySelector('.modal-close');
let feedback_user_name = feedback_popup.querySelector('[name=feedbeck-name]');
let feedback_user_email = feedback_popup.querySelector('[name=feedbeck-email]');
let feedback_form = feedback_popup.querySelector('.form-feedbeck');

let storage_email = "";
let storage_name = "";
let isStorageSupport = true;

try {
  let storage_email = localStorage.getItem('email');
  let storage_name = localStorage.getItem('name');
} catch (err){
  isStorageSupport = false;
}

feedback_link.addEventListener("click",(evt)=>{
  evt.preventDefault();
  feedback_popup.classList.add("modal-show");
  feedback_user_name.focus();
  if (storage_name) {
    feedback_user_name.value = storage_name;
    feedback_user_email.focus();
  } else {
    if (storage_email) {
      feedback_user_email.value = storage_email;
      feedback_user_email.focus();
      } else {
        feedback_user_name.focus();
      }
  }
});

feedback_close.addEventListener("click",(evt)=>{
  evt.preventDefault();
  feedback_popup.classList.remove("modal-show");
  feedback_popup.classList.remove("modal-error");
});

window.addEventListener("keydown", (evt)=>{
  if (evt.keyCode === 27){
    if (feedback_popup.classList.contains("modal-show")){
      evt.preventDefault();
      feedback_popup.classList.remove("modal-show");
      feedback_popup.classList.remove("modal-error");
    }
  }
  
})

feedback_form.addEventListener("submit",(evt)=>{
  if ((!feedback_user_name.value) || (!feedback_user_email.value)){
    evt.preventDefault();
    feedback_popup.classList.remove("modal-error");
    feedback_popup.offsetWidth = feedback_popup.offsetWidth;
    feedback_popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem('email', feedback_user_email.value);
      localStorage.setItem('name', feedback_user_name.value);
    }
  }
  
});

function initMap() {
  var coordinates = {lat: 47.212325, lng: 38.933663},

      map = new google.maps.Map(document.querySelector('.map-google'), {
          center: coordinates
      }),
  
      marker = new google.maps.Marker({
          position: coordinates,
          map: map
      });
}
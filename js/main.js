(function($) {

  $('#reset').on('click', function(){
      document.location.reload(true);
  });
});

// Sending form data to google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbx43YRa0XVUUTPoJpf_waZN9dR5_p1jU8PZr7RpDH3vydfsMNzrXfVKsHbh_n1uHGh3/exec'
const form = document.forms['register-form']

  form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then((response) => {
        if(!alert("ફોર્મ સફળતાપૂર્વક રજીસ્ટર થયું..! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું..!")){
          location.reload(true);
        }
      })
      .catch(error => console.error('Error!', error.message))
  });
 (jQuery);

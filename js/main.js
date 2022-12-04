(function($) {

  $('#reset').on('click', function(){
      document.location.reload(true);
  });
});

// Sending form data to google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqfBZ58mpjFO4HELpCSRnEgV7Zx4-5CGZTjOyuRhPHjnTYe_5iybcpjVa5sk6M0aRi/exec'
const form = document.forms['register-form']

  form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, { mode:'no-cors', method: 'POST', body: new FormData(form)})
      .then((response) => {
        if(!alert("ફોર્મ સફળતાપૂર્વક રજીસ્ટર થયું..! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું..!")){
          location.reload(true);
        }
      })
      .catch(error => console.error('Error!', error.message))
  });
 (jQuery);

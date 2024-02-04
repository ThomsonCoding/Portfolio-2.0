window.dataLayer = window.dataLayer || [];

    function getPageTitle() {
        let pageTitleElement = document.body;
        return pageTitleElement ? pageTitleElement.getAttribute('data-page-title') || 'Untitled Page' : 'Untitled Page';
    }

document.addEventListener('DOMContentLoaded', function () {
    dataLayer.push({
      'event': 'page_view',
      'page_title': getPageTitle(),
      'page_location': window.location.href,
      'page_path': window.location.pathname
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    function handleButtonClick(event) {
      let buttonId = event.target.id || 'unknownButton';
      let buttonText = event.target.textContent.trim() || 'Unknown';

      dataLayer.push({
        'event': 'button_click',
        'page_title': getPageTitle(),
        'button_text': buttonText
      });
    }

    let buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });

    let contactUsForm = document.getElementById('contact-us__form');
    if (contactUsForm) {
        contactUsForm.addEventListener('submit', function (event) {
            let isFormSuccessful = true;

            if (isFormSuccessful) {
                dataLayer.push({
                    'event': 'form_submission',
                    'form_name': 'contact_us_form'
                });
            }
        });
    }
});
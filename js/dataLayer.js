window.dataLayer = window.dataLayer || [];

function getPageTitle() {
    let pageTitleElement = document.body;
    return pageTitleElement ? pageTitleElement.getAttribute('data-page-title') || 'Untitled Page' : 'Untitled Page';
}

document.addEventListener('DOMContentLoaded', function () {
    function pushEventData(eventType, eventData) {
        dataLayer.push({
            'event': eventType,
            'page_title': getPageTitle(),
            ...eventData
        });
    }

    function handleButtonClick(event) {
        let buttonText = event.target.textContent.trim() || 'Unknown';
        pushEventData('button_click', { 'button_text': buttonText });
    }

    function handleFormSubmission() {
        pushEventData('form_submission', { 'form_name': 'contact_us_form' });
    }

    function handleNavigationClick(selectedText) {
        pushEventData('navigationClick', { 'navigationText': selectedText });
    }

    function handleFooterClick(selectedText) {
        pushEventData('footerClick', { 'footerText': selectedText });
    }

    document.querySelectorAll('button').forEach(button => button.addEventListener('click', handleButtonClick));

    let contactUsForm = document.getElementById('contact-us__form');
    if (contactUsForm) {
        contactUsForm.addEventListener('submit', event => handleFormSubmission());
    }

    document.querySelectorAll(".navigation--menu li").forEach(item => {
        item.addEventListener("click", () => handleNavigationClick(item.textContent.trim()));
    });

    document.querySelectorAll(".footer--menu li").forEach(item => {
        item.addEventListener("click", () => handleFooterClick(item.textContent.trim()));
    });

    pushEventData('page_view', {
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });
});

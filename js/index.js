"use strict";
function turnModal(component) {
    console.log(component.style.display);
    if (component.style.display == 'none') {
        component.style.display = 'block';
    }
    else {
        component.style.display = 'none';
    }
}
const contactInfoButton = document.getElementById('contact-button');
const contactInfo = document.getElementById('contact');
const professionalInfoButton = document.getElementById('professional-info-button');
const professionalInfo = document.getElementById('professional-info');
contactInfoButton.addEventListener('click', function () {
    turnModal(contactInfo);
});
professionalInfoButton.addEventListener('click', function () {
    turnModal(professionalInfo);
});

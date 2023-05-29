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
const studiesInfoButton = document.getElementById('studies-button');
const studiesInfo = document.getElementById('studies');
const experienceInfoButton = document.getElementById('experience-button');
const experienceInfo = document.getElementById('experience');
contactInfoButton.addEventListener('click', function () {
    turnModal(contactInfo);
});
professionalInfoButton.addEventListener('click', function () {
    turnModal(professionalInfo);
});
studiesInfoButton.addEventListener('click', function () {
    turnModal(studiesInfo);
});
experienceInfoButton.addEventListener('click', function () {
    turnModal(experienceInfo);
});

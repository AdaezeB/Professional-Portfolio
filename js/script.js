// --- Navigation Buttons Logic ---

// 1. Get in Touch Button
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        // This acts just like clicking a link to the contact section
        window.location.href = '#contact'; 
    });
}

// 2. CV Button
const cvBtn = document.getElementById('cv-btn');
if (cvBtn) {
    cvBtn.addEventListener('click', function() {
        // This opens your PDF in a brand new browser tab
        window.open('docs/Blessing Adaeze Muoghalu CV.pdf', '_blank'); 
    });
}
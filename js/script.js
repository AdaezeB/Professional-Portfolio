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

//  Formspree Submission 

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', async function(event) {
        // 1. Stop the browser from redirecting to the Formspree page
        event.preventDefault(); 
        
        // 2. Package up all the data the user typed in
        const data = new FormData(event.target);
        
        try {
            // 3. Send the data to Formspree secretly in the background
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
           // 4. If it successfully sent:
            if (response.ok) {
                // Grab the toast element
                const toast = document.getElementById("toast");
                
                // Show the toast
                toast.classList.add("show");
                
                // Hide it automatically after 3 seconds (3000 milliseconds)
                setTimeout(function() {
                    toast.classList.remove("show");
                }, 3000);

                form.reset(); // Clear the text boxes
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("Oops! There was a network error. Please try again.");
        }
    });
}
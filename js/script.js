
//  Get in Touch Button
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        // This acts just like clicking a link to the contact section
        window.location.href = '#contact'; 
    });
}

//  CV Button
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
        //  Stop the browser from redirecting to the Formspree page
        event.preventDefault(); 
        const emailInput = form.querySelector('input[name="email"]').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Checks for format: text@text.text
    
        if (!emailRegex.test(emailInput)) {
            alert("Please enter a valid email address.");
            return; // Stops the function immediately, preventing submission
        }
        //  Package up all the data the user typed in
        const data = new FormData(event.target);
        
        try {
            //  Send the data to Formspree secretly in the background
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
           //  If it successfully sent:
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

// Scroll-Triggered Animation (Intersection Observer) 
const projectAnim = document.getElementById('projects-anim');
const projectsSection = document.getElementById('projects');
const projectCards = document.querySelectorAll('.project-card'); 

if (projectsSection) {
    const observerOptions = {
        root: null, 
        threshold: 0.2 // Triggers when 20% of the section is visible
    };

    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            
            //  If the section comes INTO view...
            if (entry.isIntersecting) {
                
                // Play the Lottie animation
                if (projectAnim) {
                    projectAnim.play();
                }
                
                // Loop through the cards and fade them in one by one
                projectCards.forEach(function(card, index) {
                    setTimeout(function() {
                        card.classList.add('show-card');
                    }, index * 200); 
                });
                
                
            } 
            //  If the section goes OUT OF view...
            else {
                
                // Reset the Lottie animation back to frame 0
                if (projectAnim) {
                    projectAnim.stop(); 
                }
                
                // Hide all the cards instantly so they can fade in next time
                projectCards.forEach(function(card) {
                    card.classList.remove('show-card');
                });
            }
        });
    }, observerOptions);

    projectObserver.observe(projectsSection);
}
const rcmServicesLink = document.getElementById("rcmServicesLink");
const medicalCredentialingLink = document.getElementById("medicalCredentialingLink");
const rcmServicesP = document.getElementById("rcmServicesP");
const medicalCredentialingP = document.getElementById("medicalCredentialingP");

const bookAConsultationButton = document.getElementById("bookAConsultationButton");
const scheduleLink = document.getElementById("scheduleLink");
const dropdownLink = document.getElementById("dropdownLink");
const scheduleBar = document.getElementById("scheduleBar");
const dropdownBar = document.getElementById("dropdownBar");
const closeButton = document.getElementsByClassName("closeButton");

const body = document.body; // Reference to body for toggling the class
const html = document.documentElement;

//Make sure all the videos are loaded properly
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('video');
    const loadingOverlay = document.getElementById('loadingOverlay');
    let loadedVideos = 0;

    // Function to check if all videos are loaded
    function checkAllVideosLoaded() {
        if (loadedVideos === videos.length) {
            // All videos are loaded, hide the loading overlay and show the body
            loadingOverlay.style.display = 'none';
            document.body.style.display = 'block';
        }
    }

    // Add event listener for each video
    videos.forEach(video => {
        video.addEventListener('canplaythrough', function () {
            loadedVideos++; // Count each loaded video
            checkAllVideosLoaded();
        });
    });

    // Fallback: Show the body after a certain time (in case of issues)
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
        document.body.style.display = 'block';
    }, 5000); 
});


//Make sure thetside
document.addEventListener('click', (event) => {
    // Check if the click is outside the scheduleBar and it's open
    if (scheduleBar.classList.contains('open') && !scheduleBar.contains(event.target) && !scheduleLink.contains(event.target)) {
        scheduleBar.classList.remove('open');
        html.classList.remove('no-scroll');
    }

    // Check if the click is outside the dropdownBar and it's open
    if (dropdownBar.classList.contains('open') && !dropdownBar.contains(event.target) && !dropdownLink.contains(event.target)) {
        dropdownBar.classList.remove('open');
        html.classList.remove('no-scroll');
    }
});

scheduleLink.addEventListener("click", (event) => {
    scheduleBar.classList.add("open");
    html.classList.add("no-scroll");
    event.stopPropagation(); // Prevents immediate closing after clicking the link
});

dropdownLink.addEventListener("click", (event) => {
    dropdownBar.classList.add("open");
    html.classList.add("no-scroll");
    event.stopPropagation(); // Prevents immediate closing after clicking the link
});

bookAConsultationButton.addEventListener("click", (event) => {
    scheduleBar.classList.add("open");
    html.classList.add("no-scroll");
    event.stopPropagation(); // Prevents immediate closing after clicking the button
});

closeButton[0].addEventListener("click", () => {
    scheduleBar.classList.remove("open");
    html.classList.remove("no-scroll");
});

closeButton[1].addEventListener("click", () => {
    dropdownBar.classList.remove("open");
    html.classList.remove("no-scroll");
});

rcmServicesLink.addEventListener("mouseenter", () => {
    rcmServicesLink.classList.add("show");
});

medicalCredentialingLink.addEventListener("mouseenter", () => {
    medicalCredentialingLink.classList.add("show");
});

rcmServicesLink.addEventListener("mouseleave", () => {
    rcmServicesLink.classList.remove("show");
});

medicalCredentialingLink.addEventListener("mouseleave", () => {
    medicalCredentialingLink.classList.remove("show");
});

const items = document.querySelectorAll(
    '#aboutUs .item:nth-child(1), #aboutUs .item:nth-child(2), #aboutUs .item:nth-child(3), #featuredServices .item'
);

const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

//Observe all items
items.forEach(item => {
    observer.observe(item);
});

//Observe .whyChooseUs sections
const whyChooseUsSections = document.querySelectorAll('.whyChooseUs');

whyChooseUsSections.forEach(section => {
    observer.observe(section);
});

//Systems mobile optimization
const systemsListInfo = document.querySelectorAll("#systemsListInfo");
systemsList();
window.addEventListener('resize', systemsList);

function systemsList() {
    if (window.matchMedia("(max-width: 1100px)").matches) {
        systemsListInfo.forEach(element => {
            element.innerHTML =
                `<ul>
                <li>AdvancedMD</li>
                <li>AdvantX</li>
                <li>Allscripts</li>
                <li>Aprima</li>
                <li>Athena</li>
                <li>Azalea Health</li>
                <li>GE Centricity</li>
                <li>HST</li>
                <li>Valant</li>
                <li>Health <br>and Hospice-Home <br>Solutions</li>
            </ul>
            <ul>
                <li>CareTracker PM/EMR</li>
                <li>Charm</li>
                <li>Ema/ModMed</li>
                <li>Epic</li>
                <li>Meditech</li>
                <li>MicroMD</li>
                <li>ModMed</li>
                <li>NextGen</li>
                <li>Practice Fusion</li>
                <li>eClinicalWorks</li>
            </ul>
            <ul>
                <li>Intergy</li>
                <li>Kareo/Tebra</li>
                <li>Matrix</li>
                <li>Medisoft</li>
                <li>Prompt</li>
                <li>SequelMed</li>
                <li>Simple Practice</li>
                <li>Therapy Notes</li>
                <li>WellSky</li>
                <li>Point Click Care -- SNF</li>
            </ul>`;
        });
    } else {
        systemsListInfo.forEach(element => {
            element.innerHTML =
                ` <ul>
                            <li>AdvancedMD</li>
                            <li>AdvantX</li>
                            <li>Allscripts</li>
                            <li>Aprima</li>
                            <li>Athena</li>
                            <li>Azalea Health</li>
                            <li>CareTracker PM/EMR</li>
                            <li>Charm</li>
                            <li>eClinicalWorks</li>
                            <li>Ema/ModMed</li>
                            <li>Epic</li>
                            <li>GE Centricity</li>
                            <li>Health and Hospice-Home <br>Solutions</li>
                            <li>HST</li>
                            <li>Valant</li>
                        </ul>
                        <ul>
                        </ul>
                        <ul>
                            <li>Intergy</li>
                            <li>Kareo/Tebra</li>
                            <li>Matrix</li>
                            <li>Medisoft</li>
                            <li>Meditech</li>
                            <li>MicroMD</li>
                            <li>ModMed</li>
                            <li>NextGen</li>
                            <li>Point Click Care -- SNF</li>
                            <li>Practice Fusion</li>
                            <li>Prompt</li>
                            <li>SequelMed</li>
                            <li>Simple Practice</li>
                            <li>Therapy Notes</li>
                            <li>WellSky</li>
                        </ul>`;
        });
    }
}

//Testimonial Buttons
const leftButton = document.querySelectorAll('.cardButton')[0];
const rightButton = document.querySelectorAll('.cardButton')[1];
const testimonialContainer = document.querySelector('#clientTestimonials .item:nth-child(2)');
const testimonialCards = document.querySelectorAll('#clientTestimonials .item:nth-child(2) .clientTestimonialCard');

function getScrollDistance() {
    const mediaQuery1400 = window.matchMedia("(max-width: 1400px)");
    const mediaQuery700 = window.matchMedia("(max-width: 700px)");

    // Adjust card width and scroll distance for screens under 700px
    if (mediaQuery700.matches) {
        testimonialCards.forEach(card => {
            card.style.width = '350px';
        });
        return 370; // Scroll distance matches the card width for screens under 700px
    } else if (mediaQuery1400.matches) {
        return 420; // Default scroll distance for screens under 1400px
    } else {
        return 470; // Scroll distance for larger screens
    }
}

//Scroll left
leftButton.addEventListener('click', () => {
    testimonialContainer.scrollBy({
        top: 0,
        left: -getScrollDistance(),
        behavior: 'smooth'
    });
});

//Scroll right
rightButton.addEventListener('click', () => {
    testimonialContainer.scrollBy({
        top: 0,
        left: getScrollDistance(),
        behavior: 'smooth'
    });
});

// Update card width and behavior on window resize
window.addEventListener('resize', () => {
    getScrollDistance(); // Ensure the card width is updated dynamically on resize
});


//Metrics Animation
function animateValue(element, start, end, duration) {
    let startTime = null;
    const hasPlus = element.innerText.includes('+');

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start) + (hasPlus ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observe companyMetrics .item for the fade-in animation
const companyMetricsItems = document.querySelectorAll('#companyMetrics .item');

const metricsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class to trigger CSS animation
            entry.target.classList.add('visible');

            // Animate the numbers inside the metricsInfo
            const h1Elements = entry.target.querySelectorAll('h1');
            h1Elements.forEach(h1 => {
                const endValue = parseInt(h1.getAttribute('data-value'));
                animateValue(h1, 0, endValue, 3000); // Animate numbers for 3 seconds
            });

            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the item is visible

companyMetricsItems.forEach(item => {
    metricsObserver.observe(item);
});

//Form Select Buttons
const consultationButton = document.querySelector("#consultationButton");
const questionButton = document.querySelector("#questionButton");
const appointmentForm = document.querySelector("#appointmentForm");
const questionForm = document.querySelector("#questionForm");
const typeOfContact = document.querySelector("#typeOfContact");
buttonFunctionality();

function buttonFunctionality() {
    consultationButton.addEventListener("click", () => {
        consultationButton.style.backgroundColor = "var(--hoverColor)";
        questionButton.style.backgroundColor = "black";
        appointmentForm.style.display = "flex";
        questionForm.style.display = "none";
        typeOfContact.innerHTML = "Schedule An Appointment";
    });

    questionButton.addEventListener("click", () => {
        questionButton.style.backgroundColor = "var(--hoverColor)";
        consultationButton.style.backgroundColor = "black";
        questionForm.style.display = "flex";
        appointmentForm.style.display = "none";
        typeOfContact.innerHTML = "Ask Us A Question";
    });
}

//Form Submissions
function sendMail(event, id) {
    if (id === "appointmentForm") {
        appointmentFormSendMail(event);
    } else if (id === "questionForm") {
        questionFormSendMail(event);
    } else {
        console.log("Invalid Form Submission", error);
        alert("Invalid Form Submission!");
    }
}

function appointmentFormSendMail(event) {
    event.preventDefault();

    let parms = {
        subject: "Consulation",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        specialty: document.getElementById("specialty").value
    }

    emailjs.send("service_n2qs9ox", "template_yczylqo", parms)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}

function questionFormSendMail(event) {
    event.preventDefault();

    let parms = {
        subject: "Question",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_n2qs9ox", "template_w04rkre", parms)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}


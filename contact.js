//Select Buttons Functionality
const consulationButton = document.querySelector("#consultationButton");
const questionButton = document.querySelector("#questionButton");
const typeOfContact = document.querySelector("#typeOfContact");
const contentDivider = document.querySelector("#contentDivider");
const appointmentForm = document.querySelector("#appointmentForm");
const questionForm = document.querySelector("#questionForm");
buttonFunctionality();

function buttonFunctionality() {
    consulationButton.addEventListener("click", () => {
        questionButton.style.backgroundColor = "black";
        consulationButton.style.backgroundColor = "var(--hoverColor)";
        contentDivider.innerHTML = "<p>Want to Book a Consaulation? Please fill out this form and we will get back to you.</p>";
        typeOfContact.innerHTML = "Schedule An Appointment";
        questionForm.style.display = "none";
        appointmentForm.style.display = "flex";
    });

    questionButton.addEventListener("click", () => {
        consulationButton.style.backgroundColor = "black";
        questionButton.style.backgroundColor = "var(--hoverColor)";
        contentDivider.innerHTML = "<p>Have a Question? Please fill out this form and we will get back to you.</p>";
        typeOfContact.innerHTML = "Ask Us A Question";
        appointmentForm.style.display = "none";
        questionForm.style.display = "flex";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isInMiddleWindow = (element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        const middleWindowTop = viewportHeight * 0.45;
        const middleWindowBottom = viewportHeight * 0.45;

        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        return (elementTop < middleWindowBottom && elementBottom > middleWindowTop);
    };

    // Function to handle the scroll event and check if the element is within the middle window
    const handleScroll = () => {
        const elements = document.querySelectorAll('#appointmentForm, #questionForm, #contactInfo .item');

        elements.forEach(element => {
            if (isInMiddleWindow(element)) {
                element.classList.add('centered-in-view');
            } else {
                element.classList.remove('centered-in-view');
            }
        });
    };

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in the middle window on page load
    handleScroll();
});

//Form Submissions
function sendMail(event,id){
    if(id === "appointmentForm"){
        appointmentFormSendMail(event);
    } else if (id === "questionForm"){
        questionFormSendMail(event);
    } else {
        console.log("Invalid Form Submission", error);
        alert("Invalid Form Submission!");
    }
}

function appointmentFormSendMail(event){
    event.preventDefault();

    let parms = {
        subject: "Consulation",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        specialty: document.getElementById("specialty").value
    }

    emailjs.send("service_n2qs9ox", "template_yczylqo", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}

function questionFormSendMail(event){
    event.preventDefault();

    let parms = {
        subject: "Question",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_n2qs9ox", "template_w04rkre", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}
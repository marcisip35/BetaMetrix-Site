//Services change content
const medicalAuditsLink = document.querySelector("#medicalAuditsLink");
const medicalBillingLink = document.querySelector("#medicalBillingLink");
const medicalCredentialingLink = document.querySelector("#medicalCredentialingLink");
const medicalCodingLink = document.querySelector("#medicalCodingLink");
const mipsReportingLink = document.querySelector("#mipsReportingLink");

const servicesInformationLeft = document.querySelector("#servicesInformationLeft");
const medicalAuditsContent = document.querySelector("#medicalAuditsContent");
const medicalBillingContent = document.querySelector("#medicalBillingContent");
const medicalCredentialingContent = document.querySelector("#medicalCredentialingContent");
const medicalCodingContent = document.querySelector("#medicalCodingContent");
const mipsReportingContent = document.querySelector("#mipsReportingContent");
const servicesInformationTitle = document.querySelector("#servicesInformationTitle");
const servicesInformationDescription = document.querySelector("#servicesInformationDescription");

const backgroundDisplay = document.querySelector("#mainContent .item:nth-child(3)");
const servicesPageNumber = document.querySelector("#servicesPageNumber");

const servicesInformationMore = document.querySelector("#servicesInformationMore");
const learnMoreButton = document.querySelector("#learnMoreButton");

const servicesPrevious = document.querySelector("#servicesPrevious");
const servicesNext = document.querySelector("#servicesNext");

const imageUrls = [
    './assets/servicesImage1.png',
    './assets/servicesImage2.png',
    './assets/servicesImage3.png',
    './assets/servicesImage4.png',
    './assets/servicesImage5.png',
    './assets/servicesImage6.png'
];

imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
});

var serviceNum = 1;
var servicesArray = [medicalAuditsFunction, medicalBillingFunction, medicalCredentialingFunction, medicalCodingFunction, mipsReportingFunction];

medicalAuditsLink.addEventListener("click", () => {
    medicalAuditsFunction();
});

medicalBillingLink.addEventListener("click", () => {
    medicalBillingFunction();
});

medicalCredentialingLink.addEventListener("click", () => {
    medicalCredentialingFunction();
});

medicalCodingLink.addEventListener("click", () => {
    medicalCodingFunction();
});

mipsReportingLink.addEventListener("click", () => {
    mipsReportingFunction();
});

medicalAuditsContent.addEventListener("click", () => {
    medicalAuditsFunction();
});

medicalBillingContent.addEventListener("click", () => {
    medicalBillingFunction();
});

medicalCredentialingContent.addEventListener("click", () => {
    medicalCredentialingFunction();
});

medicalCodingContent.addEventListener("click", () => {
    medicalCodingFunction();
});

mipsReportingContent.addEventListener("click", () => {
    mipsReportingFunction();
});

servicesPrevious.addEventListener("click", () => {
    servicesNextAndPreviousFunction(false)
});
servicesNext.addEventListener("click", () => {
    servicesNextAndPreviousFunction(true)
});

function medicalAuditsFunction() {
    restartAnimations(); // Function to restart animations

    // Update text and background image
    servicesInformationTitle.innerText = "Medical Audits";
    servicesInformationMore.innerText = "Our comprehensive medical audits ensure accuracy and compliance in your billing processes.By thoroughly reviewing financial records and identifying discrepancies, we help optimize your revenue cycle, reduce risks, and maintain regulatory compliance, providing you with peace of mind and greater financial efficiency.";
    servicesInformationDescription.innerText = "Medical audits ensure billing accuracy, compliance, and identify opportunities to improve revenue";
    servicesInformationMore.style.display = "none";
    backgroundDisplay.style.backgroundImage = "url('./assets/servicesImage1.png')";

    // Update page number
    serviceNum = 1;
    servicesPageNumber.innerText = `${serviceNum} / 5`;
}

function medicalBillingFunction() {
    restartAnimations();

    servicesInformationTitle.innerText = "Medical Billing";
    servicesInformationMore.innerText = "Our medical billing services streamline the entire billing process, from claims submission to payment collection. By ensuring accuracy and efficiency, we help healthcare providers manage their revenue cycle more effectively, reduce errors, and receive timely payments, allowing you to focus on delivering quality patient care.";
    servicesInformationDescription.innerText = "Claims processing ensures accurate payments and optimizes financial operations";
    servicesInformationMore.style.display = "none";
    backgroundDisplay.style.backgroundImage = "url('./assets/servicesImage2.png')";
    serviceNum = 2;
    servicesPageNumber.innerText = `${serviceNum} / 5`;
}

function medicalCredentialingFunction() {
    restartAnimations();

    servicesInformationTitle.innerText = "Medical Credentialing";
    servicesInformationMore.innerText = "Our medical credentialing services ensure that healthcare providers meet all necessary qualifications and regulatory requirements. By thoroughly verifying credentials, we help practices maintain compliance, reduce risks, and enable seamless patient care, allowing providers to focus on their core responsibilities with confidence.";
    servicesInformationDescription.innerText = "Medical credentialing verifies provider qualifications to ensure compliance and support efficient patient care";
    servicesInformationMore.style.display = "none";
    backgroundDisplay.style.backgroundImage = "url('./assets/servicesImage4.png')";
    serviceNum = 3;
    servicesPageNumber.innerText = `${serviceNum} / 5`;
}

function medicalCodingFunction() {
    restartAnimations();

    servicesInformationTitle.innerText = "Medical Coding";
    servicesInformationMore.innerText = "Our medical coding services accurately translate healthcare services into standardized codes for efficient billing and claims processing. By ensuring precision and compliance with coding standards, we help healthcare providers minimize errors, accelerate reimbursements, and streamline the overall revenue cycle.";
    servicesInformationDescription.innerText = "Medical coding converts healthcare services into standardized codes for accurate billing and streamlined claims";
    servicesInformationMore.style.display = "none";
    backgroundDisplay.style.backgroundImage = "url('./assets/servicesImage5.png')";
    serviceNum = 4;
    servicesPageNumber.innerText = `${serviceNum} / 5`;
}

function mipsReportingFunction() {
    restartAnimations();

    servicesInformationTitle.innerText = "MIPS Reporting";
    servicesInformationMore.innerText = "Our MIPS reporting services help healthcare providers track and submit performance data to meet Medicare’s quality standards. By simplifying the reporting process, we ensure providers maximize reimbursement opportunities while maintaining compliance with MIPS requirements, leading to better financial outcomes and improved care quality.";
    servicesInformationDescription.innerText = "MIPS reporting tracks performance data to meet quality standards and maximize reimbursement";
    servicesInformationMore.style.display = "none";
    backgroundDisplay.style.backgroundImage = "url('./assets/servicesImage6.png')";
    serviceNum = 5;
    servicesPageNumber.innerText = `${serviceNum} / 5`;
}



function servicesNextAndPreviousFunction(goNext) {
    if (goNext) { // Next Button
        if (serviceNum < 5) {
            servicesArray[serviceNum]();
        }
    } else { // Previous Button
        if (serviceNum > 1) {
            serviceNum -= 2;
            servicesArray[serviceNum]();
        }
    }
}

function restartAnimations() {
    // Remove the slide-in-left class from each element inside servicesInformationLeft
    servicesInformationTitle.classList.remove('slide-in-left');
    servicesInformationDescription.classList.remove('slide-in-left');
    servicesInformationMore.classList.remove('slide-in-left');
    learnMoreButton.classList.remove('slide-in-left');
    backgroundDisplay.classList.remove('fade-in-bg');

    // Force reflow to restart the animations
    void servicesInformationTitle.offsetWidth;
    void servicesInformationDescription.offsetWidth;
    void servicesInformationMore.offsetWidth;
    void learnMoreButton.offsetWidth;
    void backgroundDisplay.offsetWidth;

    // Add the slide-in-left class back to the elements after the reflow
    servicesInformationTitle.classList.add('slide-in-left');
    servicesInformationDescription.classList.add('slide-in-left');
    servicesInformationMore.classList.add('slide-in-left');
    learnMoreButton.classList.add('slide-in-left');
    backgroundDisplay.classList.add('fade-in-bg');  // This is for the background fade
}


learnMoreButton.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(servicesInformationMore);

    // Check the computed display property
    if (computedStyle.display === "none") {
        servicesInformationMore.style.display = "flex"; // Show the element
    } else {
        servicesInformationMore.style.display = "none"; // Hide the element
    }
});





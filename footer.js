

//Footer for each page
const footerElement = document.querySelector("footer");
const footerContentDesktop = `       <div class="item">
            <a href="./index.html" id="footerLogo"><h1>BetaMetrix</h1></a>
            <h2>Follow Us</h2>
            <div id="footerSocials">
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024 1024" fill="#000000">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <circle cx="512" cy="512" r="512" style="fill:#0a66c2" />
                        <path
                            d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
                            style="fill:#fff" />
                    </g>

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024.00 1024.00" fill="#000000">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <circle cx="512" cy="512" r="512" style="fill:#1877f2" />
                        <path
                            d="M552 766.4V587.6h59.7l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H626v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v178.9c-122.4-19.2-216-125.1-216-252.9 0-141.4 114.6-256 256-256s256 114.6 256 256c0 127.7-93.6 233.6-216 252.8z"
                            style="fill:#fff" />
                    </g>

                </svg>
                <a href="https://www.instagram.com/betametrix.us/"><svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024 1024">
                    <circle cx="512" cy="512" r="512" style="fill:#e4405f" />
                    <path
                        d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z"
                        style="fill:#fff" />
                </svg></a>
            </div>
            <p id="copyrightLogo" style="margin-top: auto;">© Copyright <span style="font-weight:600">BetaMetrix</span>
                All Rights Reserved</p>
            <p class="footerBottomNote">All rights reserved. Unauthorized reproduction or distribution is
                prohibited.<br>The
                information on this website is provided by BetaMetrix for general purposes only. While we strive to keep
                it accurate and up to date, we make no warranties about its completeness, reliability, or suitability.
                Any reliance on this information is at your own risk.</p>
        </div>
        <div class="item">
            <div class="top">
                <a href="./services.html">
                    <h2>Medical Billing Services</h2>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Audits</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Billing</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Credentialing</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Coding</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">MIPS Reporting</p>
                </a>
            </div>
            <div class="bottom">
                <a href="./services.html">
                    <h2>Technology & Softwares</h2>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Our Softwares</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">What We Do</p>
                </a>
            </div>
            <p class="footerBottomNote" style="margin-top: auto;">BetaMetrix is a medical billing consultancy, not a
                direct provider of healthcare
                services. We focus on delivering transparency and precision in revenue cycle management through expert
                auditing and billing services. All client accounts begin with a detailed audit, and dedicated billing
                teams work to optimize financial outcomes by addressing both simple and complex revenue cycle
                challenges.</p>
        </div>
        <div class="item">
            <div class="top">
                <a href="./aboutUs.html">
                    <h2>About Us</h2>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Who We Are</p>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Who We Serve</p>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Metrics</p>
                </a>
            </div>
            <div class="bottom">
                <a href="./contact.html">
                    <h2>Contact Us</h2>
                </a>
                <a href="./contact.html">
                    <p class="footerLinkHover">Book A Consultation</p>
                </a>
                <a href="./contact.html">
                    <p class="footerLinkHover">Get Help</p>
                </a>
            </div>
            <p class="footerBottomNote" style="margin-top: auto;">
                Email: admin@BetaMetrix.us<br>
                Address:
                2163 E. Baseline Road, Suite 105, Tempe, AZ 85283<br>Tel: 410-954-6400</p>
        </div>`;

const footerContentMobile = `       <div class="item">
            <a href="./index.html" id="footerLogo"><h1>BetaMetrix</h1></a>
            <h2>Follow Us</h2>
            <div id="footerSocials">
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024 1024" fill="#000000">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <circle cx="512" cy="512" r="512" style="fill:#0a66c2" />
                        <path
                            d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
                            style="fill:#fff" />
                    </g>

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024.00 1024.00" fill="#000000">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <circle cx="512" cy="512" r="512" style="fill:#1877f2" />
                        <path
                            d="M552 766.4V587.6h59.7l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H626v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v178.9c-122.4-19.2-216-125.1-216-252.9 0-141.4 114.6-256 256-256s256 114.6 256 256c0 127.7-93.6 233.6-216 252.8z"
                            style="fill:#fff" />
                    </g>

                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 1024 1024">
                    <circle cx="512" cy="512" r="512" style="fill:#e4405f" />
                    <path
                        d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z"
                        style="fill:#fff" />
                </svg>
            </div>
        </div>
        <div class="item">
            <div class="top">
                <a href="./services.html">
                    <h2>Medical Billing Services</h2>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Audits</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Billing</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Credentialing</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Medical Coding</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">MIPS Reporting</p>
                </a>
            </div>
            <div class="bottom">
                <a href="./services.html">
                    <h2>Technology & Softwares</h2>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">Our Softwares</p>
                </a>
                <a href="./services.html">
                    <p class="footerLinkHover">What We Do</p>
                </a>
            </div>
        </div>
        <div class="item">
            <div class="top">
                <a href="./aboutUs.html">
                    <h2>About Us</h2>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Who We Are</p>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Who We Serve</p>
                </a>
                <a href="./aboutUs.html">
                    <p class="footerLinkHover">Metrics</p>
                </a>
            </div>
            <div class="bottom">
                <a href="./contact.html">
                    <h2>Contact Us</h2>
                </a>
                <a href="./contact.html">
                    <p class="footerLinkHover">Book A Consultation</p>
                </a>
                <a href="./contact.html">
                    <p class="footerLinkHover">Get Help</p>
                </a>
            </div>


            
            <p class="footerBottomNote" style="margin-top: auto;">
                Email: admin@BetaMetrix.us<br>
                Address:
                2163 E. Baseline Road, Suite 105, Tempe, AZ 85283<br>Tel: 410-954-6400</p>


                            <p class="footerBottomNote" style="margin-top: auto;">BetaMetrix is a medical billing consultancy, not a
                direct provider of healthcare
                services. We focus on delivering transparency and precision in revenue cycle management through expert
                auditing and billing services. All client accounts begin with a detailed audit, and dedicated billing
                teams work to optimize financial outcomes by addressing both simple and complex revenue cycle
                challenges.</p>

                                                  <p id="copyrightLogo" style="margin-top: auto;">© Copyright <span style="font-weight:600">BetaMetrix</span>
                All Rights Reserved</p> 
                
            <p class="footerBottomNote">All rights reserved. Unauthorized reproduction or distribution is
                prohibited.<br>The
                information on this website is provided by BetaMetrix for general purposes only. While we strive to keep
                it accurate and up to date, we make no warranties about its completeness, reliability, or suitability.
                Any reliance on this information is at your own risk.</p>
        </div>`;

// Function to change footer content based on screen size
function updateFooterContent() {
    if (window.matchMedia("(max-width: 900px)").matches) {
        footerElement.innerHTML = footerContentMobile;
    } else {
        footerElement.innerHTML = footerContentDesktop;
    }
}

// Call the function on page load and whenever the screen is resized
updateFooterContent();
window.addEventListener('resize', updateFooterContent);
//Disable scrolling while page animation is active
document.body.style.overflow = 'hidden';

setTimeout(() => {
    document.body.style.overflow = 'auto';
}, 1000);

// Function to get the scrollbar width
function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

// Disable scrolling and add padding
document.body.style.overflow = 'hidden';
document.body.style.paddingRight = `${getScrollbarWidth()}px`;

// Re-enable scrolling and remove padding after the animation ends
setTimeout(() => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
}, 2000);
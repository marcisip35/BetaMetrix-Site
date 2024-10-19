//Disable scrolling while page animation is active
document.body.style.overflow = 'hidden';

setTimeout(() => {
    document.body.style.overflow = 'auto';
}, 1000);
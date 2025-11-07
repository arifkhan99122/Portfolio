//Mobile Menu Toggle
const hamb = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamb.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on link

document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener('click', ()=>{
        navLinks.classList.remove('active');
    });
});

//Header scroll effect
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('header');
    if(window.scrollY>50){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

//Back to Top Button

const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        backToTopButton.classList.add('active');
    }
    else{
        backToTopButton.classList.remove('active');
    }
});

//Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        // e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior:'smooth'
            });
        }
    });
});

//Animation

// function initLottieAnimation() {
//     // Method 1: Using Lottie CDN (add this to your <head>)
//     // <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
    
//     // Check if Lottie is loaded
//     if (typeof lottie !== 'undefined') {
//         // Option A: Developer/Code Animation
//         const animation1 = lottie.loadAnimation({
//             container: document.getElementById('lottie-animation'), // or 'lottie-bg'
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: 'https://assets1.lottiefiles.com/packages/lf20_ukpanbuq.json' // Developer animation
//         });
        
//         // Option B: Abstract Shapes Animation
//         const animation2 = lottie.loadAnimation({
//             container: document.getElementById('lottie-animation'),
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: 'https://assets1.lottiefiles.com/packages/lf20_5ttmI2.json' // Abstract shapes
//         });
        
//         // Option C: Technology Animation
//         const animation3 = lottie.loadAnimation({
//             container: document.getElementById('lottie-animation'),
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: 'https://assets1.lottiefiles.com/packages/lf20_gn0tojcq.json' // Tech animation
//         });
        
//     } else {
//         console.warn('Lottie library not loaded. Please include Lottie CDN.');
//     }
// }

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     initLottieAnimation();
// });


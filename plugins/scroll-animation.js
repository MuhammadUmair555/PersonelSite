// plugins/scroll-animation.js
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('scroll-animation', {
      mounted(el, binding) {
        let lastScrollTop = 0;
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (entry.isIntersecting && currentScrollTop > lastScrollTop) {
              entry.target.classList.add('scroll-animation-active');
            }
            
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
          });
        }, { threshold: 0.5 }); // Adjust threshold as needed
        
        if (el.classList.contains('scroll-animation-parent')) {
          el.querySelectorAll('.scroll-animation-item').forEach((item) => {
            observer.observe(item);
          });
        } else {
          observer.observe(el);
        }
      },
      unmounted(el) {
        // Clean up the observer when the element is unmounted
        // Implementation depends on how you've stored the observer
      }
    });
  });
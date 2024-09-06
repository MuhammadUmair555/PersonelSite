// composables/useScrollAnimation.js
export function useScrollAnimation() {
  if (process.client) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    });

    const observeElement = (el) => {
      if (el) observer.observe(el);
    };

    return { observeElement };
  } else {
    return { observeElement: () => {} }; // No-op on the server side
  }
}

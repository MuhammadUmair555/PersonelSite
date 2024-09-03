import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);
  const isAnimating = ref(false);

  const toggleDarkMode = () => {
    console.log('Toggle clicked');
    if (isAnimating.value) {
      console.log('Animation is in progress, skipping toggle');
      return;
    }

    isAnimating.value = true;
    console.log('Animation started');

    setTimeout(() => {
      isDarkMode.value = !isDarkMode.value;
      console.log('Dark mode:', isDarkMode.value);
      document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
      localStorage.setItem('darkMode', isDarkMode.value);
      isAnimating.value = false;
      console.log('Animation ended');
    }, 300);
  };

  onMounted(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    isDarkMode.value = savedMode;
    if (savedMode) {
      document.documentElement.classList.add('dark-mode');
    }
    console.log('Mounted with dark mode:', savedMode);
  });

  return {
    isDarkMode,
    toggleDarkMode,
    isAnimating,
  };
}

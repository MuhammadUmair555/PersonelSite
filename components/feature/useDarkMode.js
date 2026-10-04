import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);
  const isAnimating = ref(false);

  const toggleDarkMode = () => {
    if (isAnimating.value) return;

    isAnimating.value = true;

    setTimeout(() => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
      localStorage.setItem('darkMode', isDarkMode.value);
      isAnimating.value = false;
    }, 300);
  };

  onMounted(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    isDarkMode.value = savedMode;
    if (savedMode) {
      document.documentElement.classList.add('dark-mode');
    }
  });

  return {
    isDarkMode,
    toggleDarkMode,
    isAnimating,
  };
}

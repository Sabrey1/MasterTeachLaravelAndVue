<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="scroll-top-button"
  >
    <i class="bi bi-chevron-compact-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.scroll-top-button:hover {
  background-color: #1e40af;
}
</style>

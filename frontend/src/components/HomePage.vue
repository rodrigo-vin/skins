<template>
  <div>
    <h1>Homepage with Carousel</h1>
    <div class="carousel">
      <img v-for="(image, index) in carouselImages" :src="image" :key="index" alt="Carousel Image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        'left_image_1.jpg',
        'left_image_2.jpg',
        'left_image_3.jpg',
        // Add more image paths as needed
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  transition: transform 1s ease;
}

.carousel img:not(:first-child) {
  margin-left: -100%;
}

</style>

<template>
  <section>
    <div style="text-align:justify"> 
      <h2 style="color:#fff" class="wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s">TƯ VẤN MÀU SƠN</h2>

      <div class="wow fadeInRight"
          data-wow-duration="3s"
          data-wow-delay="0.5s"> 
        <h4 class="mt-5" style="color:#fff"> GẦN 2000 MÀU SƠN</h4>
        <p>Chúng tôi sẽ liên hệ lại ngay với quý khách để giải đáp mọi thắc mắc về màu sơn VinaGroup.</p>
      </div>
      <button><a href="/lien-he" style="color: #fff;">Liên hệ ngay</a></button>
    </div>
    <video class="video-background" poster="https://images.unsplash.com/photo-1587587448844-c1036562fec1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzg5Mjk2MA&ixlib=rb-1.2.1&q=85" autoplay muted loop playsinline>
      <source src="img/video/thanhPho.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl";
import WOW from "wowjs";
import { onMounted } from "vue";

export default {
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
  setup() {
    onMounted(() => {
      new WOW.WOW().init();
    });
  },
};
</script>

<style scoped>
.video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  max-width: auto;
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: -2;
}

section {
  position: relative;
  width: 100vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: white;
  font-family: 'Nunito Sans', sans-serif;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    right:0;
    left:0;
    background: rgba(0,0,0,.5);
    z-index:-1;
  }
}

h1 {
  font-size: 3.7em;
  margin: 0 0 0.3em;
}

p {
  font-size: 1.3em;
  margin: 0 0 1.6em;
}

button {
  padding: 15px 36px;
  border: 2px solid white;
  background: transparent;
  font-size: 1.05em;
  color: inherit;
  cursor: pointer;
  transition: background .3s ease-in-out;
}

button:hover {
  background: rgba(255,255,255,0.3);
}
</style>

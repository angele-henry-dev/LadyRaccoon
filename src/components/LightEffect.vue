<template>
  <div class="light-container">
    <div class="light x1"></div>
    <div class="light x2"></div>
    <div class="light x3"></div>
    <div class="light x4"></div>
    <div class="light x5"></div>
    <div class="light x6"></div>
    <div class="light x7"></div>
    <div class="light x8"></div>
    <div class="light x9"></div>
  </div>
</template>

<style scoped>
.light-container {
  position: relative;
}
.light {
  position: absolute;
  width: 0;
  opacity: 0.75;
  background-color: var(--vt-c-pink);
  box-shadow: 0 0 20px 2px var(--vt-c-pink);
  opacity: 0;
  top: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
}

@-webkit-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@-moz-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@-o-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}

.x1,
.x2,
.x3,
.x4,
.x5,
.x6,
.x7,
.x8,
.x9 {
  animation: floatUp infinite linear;
}

.x1 {
  animation-duration: 4s;
  transform: scale(1);
}

.x2 {
  animation-duration: 5s;
  transform: scale(1.6);
  left: 15%;
}

.x3 {
  animation-duration: 2.5s;
  transform: scale(0.5);
  left: -15%;
}

.x4 {
  animation-duration: 4.5s;
  transform: scale(1.2);
  left: -34%;
}

.x5 {
  animation-duration: 5s;
  transform: scale(2.2);
  left: -57%;
}

.x6 {
  animation-duration: 3s;
  transform: scale(0.8);
  left: -81%;
}

.x7 {
  animation-duration: 5s;
  transform: scale(3.2);
  left: 37%;
}

.x8 {
  animation-duration: 4.5s;
  transform: scale(1.7);
  left: 62%;
}

.x9 {
  animation-duration: 4.1s;
  transform: scale(0.9);
  left: 85%;
}
</style>

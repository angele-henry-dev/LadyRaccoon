<template>
  <div class="retrobg">
    <div class="retrobg-sky">
      <div class="retrobg-sunWrap">
        <div class="retrobg-sun-shadow"></div>
        <div class="retrobg-sun"></div>
      </div>
      <div class="retrobg-mountains">
        <div class="retrobg-mountains-left retrobg-mountain"></div>
        <div class="retrobg-mountains-right retrobg-mountain"></div>
      </div>
    </div>
    <div class="retrobg-ground">
      <div class="retrobg-linesWrap">
        <div class="retrobg-lines">
          <div class="retrobg-vlines">
            <div v-for="x in 53" :key="x" class="retrobg-vline"></div>
          </div>
          <div class="retrobg-hlines">
            <div v-for="x in 8" :key="x" class="retrobg-hline"></div>
          </div>
        </div>
      </div>
      <div class="retrobg-groundShadow"></div>
    </div>
  </div>

  <svg height="0" width="0">
    <defs>
      <clipPath id="stripes" clipPathUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="0.175" />
        <rect x="0" y="0.178" width="1" height="0.075" />
        <rect x="0" y="0.259" width="1" height="0.075" />
        <rect x="0" y="0.343" width="1" height="0.075" />
        <rect x="0" y="0.430" width="1" height="0.075" />
        <rect x="0" y="0.520" width="1" height="0.075" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.retrobg {
  position: relative;
  height: calc(80vh - 70px);
  color: var(--vt-c-pink);
}

.retrobg-sky {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00000000 15%, var(--vt-c-pink));
}

.retrobg-sun,
.retrobg-sun-shadow {
  --glow-color: var(--vt-c-orange);
  border-radius: 50%;
}
.retrobg-sun {
  position: relative;
  background-image: linear-gradient(var(--vt-c-yellow), var(--vt-c-orange), var(--vt-c-pink) 65%);
  clip-path: url(#stripes);
  height: 100%;
  width: 100%;
}
.retrobg-sunWrap {
  position: relative;
  width: 50%;
  height: 100%;
}
.retrobg-sun-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 80px 40px var(--glow-color);
  background-color: var(--glow-color);
  opacity: 0.5;
  clip-path: inset(-50% -50% 50% -50%);
  animation: 2s ease infinite alternate retrobg-sun-glow-anim;
}
@keyframes retrobg-sun-glow-anim {
  from {
    box-shadow: 0 0 80px 40px var(--glow-color);
  }
  to {
    box-shadow: 0 0 160px 40px var(--glow-color);
  }
}

.retrobg-mountains {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 300px;
}
.retrobg-mountain {
  position: absolute;
  width: 40%;
  height: 100%;
  background-image: linear-gradient(
    var(--color-background) 70%,
    var(--color-background-soft) 85%,
    var(--color-background-mute)
  );
}
.retrobg-mountains-left {
  left: 0;
  clip-path: polygon(
    0% 100%,
    0% 55%,
    5% 60%,
    10% 55%,
    20% 50%,
    25% 42%,
    30% 38%,
    33% 35%,
    40% 45%,
    50% 50%,
    60% 70%,
    70% 85%,
    75% 82%,
    80% 91%,
    85% 90%,
    90% 95%,
    95% 98%,
    100% 100%
  );
}
.retrobg-mountains-right {
  right: 0;
  clip-path: polygon(
    0% 100%,
    5% 95%,
    10% 85%,
    15% 87%,
    20% 80%,
    25% 78%,
    30% 65%,
    40% 70%,
    50% 57%,
    60% 53%,
    67% 68%,
    70% 70%,
    75% 66%,
    80% 55%,
    90% 50%,
    95% 60%,
    100% 57%,
    100% 100%
  );
}

.retrobg-ground {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 50%;
  bottom: 0;
  border-top: 2px solid var(--vt-c-pink);
  border-bottom: 2px solid var(--vt-c-pink);
  background-color: var(--color-background);
}
.retrobg-groundShadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--color-background) 0%, transparent);
}

.retrobg-linesWrap {
  height: 100%;
  perspective: 1000px;
  perspective-origin: center top;
}
.retrobg-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top center;
  animation: 0.35s linear infinite retrobg-lines-anim;
}
@keyframes retrobg-lines-anim {
  from {
    transform: rotateX(84deg) translateY(0);
  }
  to {
    transform: rotateX(84deg) translateY(100px);
  }
}
.retrobg-hlines,
.retrobg-vlines {
  position: absolute;
  left: calc((900% - 100%) / -2);
  width: 900%;
  height: 500%;
}
.retrobg-vlines {
  display: flex;
  justify-content: center;
}
.retrobg-hline,
.retrobg-vline {
  width: 100%;
  height: 100%;
  background-color: currentColor;
}
.retrobg-hline {
  height: 3px;
}
.retrobg-vline {
  width: 3px;
}
.retrobg-hline + .retrobg-hline {
  margin-top: 98px;
}
.retrobg-vline + .retrobg-vline {
  margin-left: 48px;
}
</style>

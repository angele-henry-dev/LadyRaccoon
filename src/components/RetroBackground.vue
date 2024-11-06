<template>
  <div class="retrobg">
    <div class="retrobg-sky">
      <div class="retrobg-sunWrap">
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
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
            <div class="retrobg-vline"></div>
          </div>
          <div class="retrobg-hlines">
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
            <div class="retrobg-hline"></div>
          </div>
        </div>
      </div>
      <div class="retrobg-groundShadow"></div>
    </div>
  </div>
</template>

<style scoped>
.retrobg {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 70px);
  color: var(--vt-c-pink);
}

.retrobg-sky {
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 55%;
  background: linear-gradient(#000000bf 75%, var(--vt-c-pink));
}

.retrobg-sunWrap {
  position: relative;
  width: 40%;
  margin-bottom: -15%;
}
.retrobg-sun {
  --glow-color: var(--vt-c-orange);
  padding-top: 100%;
  border-radius: 50%;
  background-image: linear-gradient(var(--vt-c-yellow), var(--vt-c-orange), var(--vt-c-pink) 65%);
  box-shadow: 0 0 160px 80px var(--glow-color);
  animation: 2s ease infinite alternate retrobg-sun-glow-anim;
}
@keyframes retrobg-sun-glow-anim {
  from {
    box-shadow: 0 0 160px 80px var(--glow-color);
  }
  to {
    box-shadow: 0 0 200px 95px var(--glow-color);
  }
}

.retrobg-mountains {
  position: absolute;
  width: 100%;
  height: 30%;
}
.retrobg-mountain {
  position: absolute;
  width: 30%;
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
  height: 45%;
  bottom: 0;
  border-top: 2px solid var(--vt-c-pink);
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

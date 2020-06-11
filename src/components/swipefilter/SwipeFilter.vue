<template>
  <div id="swipe-filter">
    <div class="drag-bar"></div>
    <section class="filter-grid">
      <div class="inner-grid distance-height slider-grid-columns">
        <map-pin-icon size="1.4x"></map-pin-icon>
        <input
          type="range"
          name="distanceSlider"
          id="distanceSlider"
          min="1"
          max="50"
          value="1"
          step="1"
        />
      </div>
      <div class="bg-requests">
        <div class="inner-grid toggle-btn-height">
          <p>Show Requests</p>
        </div>
      </div>
      <div class="inner-grid toggle-btn-height">
        <p>Show Questions</p>
      </div>
    </section>
  </div>
</template>

<script>
import { MapPinIcon } from 'vue-feather-icons'

export default {
  name: 'SwipeFilter',
  components: {
    MapPinIcon
  }
}
</script>

<style scoped>
#swipe-filter {
  position: absolute;
  height: 46%;
  width: 100%;
  bottom: 0;
  background: #ffa033;
  z-index: 50;
  border-radius: 20px;
  color: #fff3e3;
}

.drag-bar {
  margin: 13px auto;
  width: 70px;
  height: 4px;
  background: #fff3e3;
  opacity: 0.2;
  border-radius: 30px;
}

.filter-grid {
  display: grid;
  width: 100%;
  padding-top: 15px;
  margin: 0 auto;
}

.inner-grid {
  width: 85%;
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
  align-content: center;
}

.slider-grid-columns {
  grid-template-columns: 15% 85%;
}

.inner-grid p {
  font-size: 11pt;
}

.distance-height {
  height: 100px;
}

.toggle-btn-height {
  height: 70px;
}

.bg-requests {
  background: #ffac4d;
}

#distanceSlider {
  -webkit-appearance: none;
  background: #fff3e3;
  border-radius: 20px;
  height: 4px;
  align-self: center;
  outline: none;
  width: 100%;
}

#distanceSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff3e3;
  border-radius: 50%;
  cursor: ew-resize;
}
</style>

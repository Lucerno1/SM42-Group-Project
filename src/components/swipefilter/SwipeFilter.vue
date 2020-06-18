<template>
  <div id="swipe-filter">
    <div class="drag-bar"></div>
    <section class="filter-grid">
      <div class="inner-grid distance-height slider-grid-columns">
        <map-pin-icon size="1.4x"></map-pin-icon>
        <vue-slider
          v-model="value"
          v-bind="options"
          :tooltip-formatter="value + ' km'"
        />
      </div>
      <div class="bg-requests">
        <div class="inner-grid toggle-btn-height toggle-grid-columns">
          <p>Show Requests</p>
          <Toggle class="toggle-right" />
        </div>
      </div>
      <div class="inner-grid toggle-btn-height toggle-grid-columns">
        <p>Show Questions</p>
        <Toggle class="toggle-right" />
      </div>
    </section>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import Toggle from '@/components/Toggle.vue'
import { MapPinIcon } from 'vue-feather-icons'

export default {
  name: 'SwipeFilter',
  data() {
    return {
      value: 1,
      options: {
        dotSize: 20,
        width: 'auto',
        height: 4,
        min: 1,
        max: 50,
        tooltip: 'always',
        tooltipPlacement: 'top',
        dragOnClick: true,
        process: true
      }
    }
  },
  components: {
    VueSlider,
    Toggle,
    MapPinIcon
  }
}
</script>

<style src="@/assets/vue-slider.css"></style>

<style scoped>
#swipe-filter {
  position: absolute;
  height: 23em;
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

.toggle-grid-columns {
  grid-template-columns: 50% 50%;
}

.inner-grid p {
  font-size: 11pt;
  font-weight: 600;
}

.distance-height {
  height: 100px;
}

.toggle-btn-height {
  height: 70px;
}

.toggle-right {
  justify-self: right;
}

.bg-requests {
  background: #ffac4d;
}
</style>

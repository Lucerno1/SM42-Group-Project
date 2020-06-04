<template>
  <div class="topBar">
    <svg class="topBar" viewBox="0 0 376 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M376 0V191.5V168.932C376 135.795 349.137 108.932 316 108.932H60C26.8629 108.932 0 82.0695 0 48.9324V0H376Z" fill="#FF8A00"/>
    </svg>

    <h1>{{pageTitle}}</h1>

  </div>
</template>

<script>
export default {
  props: {
    pageTitle: String
  },
 name: 'TopBar'
}
</script>

<style>
  .topBar{
    z-index: -1;
    position: fixed;
    top: 0px;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    margin-top: 45px;
    text-align: center;
  }
</style> 
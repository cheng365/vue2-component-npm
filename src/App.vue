<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <o-button />
    <br>
    <o-input />
    <br><br>
    <p>----------------以下是引用了【orange-ui-plus包中组件】-------------------------</p>
    <br>
    <orange-button />
    <br>
    <orange-input />
  </div>
</template>

<script>
import OInput from './package/orange-input/index.vue'
import OButton from './package/orange-button/index.vue'

export default {
  name: 'App',
  components: {
    OInput,
    OButton
  }
}
</script>

<style>
#app {
  display: grid;
  place-items: center;
}
</style>

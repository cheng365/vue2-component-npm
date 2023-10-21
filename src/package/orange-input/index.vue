<template>
    <div>
      <input type="text" v-model="orange">
    </div>
  </template>
  <script>
  export default {
    name: "orange-input", // 组件名
    data() {
      return {
        orange: 'vue2原生input'
      }
    }
  };
  </script>
  <style scoped>
  button {
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  </style>
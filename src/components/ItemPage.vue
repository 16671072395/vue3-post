<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ItemPage",
};
</script>

<style>
.item {
  /* 高度410px */
  /* height: 2rem; */
  /* border: 1px solid rgb(6, 6, 202); */
  position: absolute;
  /* 外边距20px */
  /* margin: 0.25rem; */
  /* background-color: rgba(13, 130, 255, 0.851); */
}
</style>
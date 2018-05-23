<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.app-main{
  min-height: 100%;
}
</style>

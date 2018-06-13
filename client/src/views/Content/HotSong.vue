<template>
  <div class="itemMR">
    <div class="itemTiele">
      <h3 class="rmgd">
        <b>精选</b> 歌单
      </h3>
      <a href="/songlist" target="_blank" class="moreRR">更多</a>
    </div>

    <div class="itemComtentR">
      <div v-for="(item, index) in listItem"
      :key="index"
      class="listItem">
        <a href="#">
          <div class="Cover">
            <img :src="item.src" alt="">
          </div>
          <span class="arrow"></span>
          <div class="list">
            <dl>
              <dt>{{item.title}}</dt>
              <dd>{{item.textContent1}}</dd>
              <dd>{{item.textContent2}}</dd>
            </dl>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listItem: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style>

</style>

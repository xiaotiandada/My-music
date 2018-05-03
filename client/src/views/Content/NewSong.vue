<template>
  <div class="itemTwoLeftContent">
    <div class="itemTwoLeftTiele">
      <div class="itemTiele itemTitleBOrder">
        <h3 class="xgsf">
          <b>精选</b> 歌单
        </h3>
        <div class="itemTwoLeftTextMenu">
          <span 
          v-for="(item, index) in listTabTitle"
          :key="index"
          @mouseenter="toogleTab(index)"
          class="MenuItem"
          :class="{ tabActive : index === listTabIndex}">{{item}}</span>
           <!-- tab-active -->
        </div>
        <a href="#" target="_blank" class="moreR palyAll">
          <i class="icon-play"></i> 全部播放
        </a>
      </div>
    </div>


    <div
    v-for="(items, index) in listTab" :key="index"
    v-show="listTabIndex === index"
    class="itemTwoLeftContent tab-content">
    <!-- tab-show -->
    <!-- tab-hide -->
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a href="#">
              {{item.tabTitle}}
              <span :class="[ item.tabShow ? 'songTips' : '' ]"></span>
              <span class="icon-playBtn"></span>
              <span class="icon-download"></span>
              <span class="icon-Time">{{item.tabTime}}</span>
          </a>
        </li>
      </ul>
    </div>
  
    <div class="pages">
      <div class="pagesCenter">
        <a href="#" class="pages-prev">上一页</a>
        <span class="pages-currentPage">1</span> /
        <span class="pages-allPage">3</span>
        <a href="#" class="pages-next">下一页</a>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      listTab: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        listTabIndex: 0,
        listTabTitle: [
          '华语',
          '欧美',
          '韩国',
          '日本'
        ]
      }
    },
    methods: {
      toogleTab: function(index) {
        console.log(index)
        this.listTabIndex = index
      }
    }
  
  }
</script>

<style>
  
</style>

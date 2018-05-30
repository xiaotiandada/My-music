<template>
  <div class="songlist">
  
    <div class="songlist-top">
      <h2 class="songlist-title fl">热门歌单</h2>
      <a class="songlist-btn ri" href="javascript:;">播放全部</a>
    </div>
  
    <hr class="songlist-hr">
  
    <div class="song-list-ul">
      <ul>
        <li
        v-for="(item, index) in musiclist" :key="index"><a @click="songPlay(index)" href="javascript:;">{{index+1}} {{item.first}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        musiclist: []
      }
    },
    created() {
      const _this = this
      axios.get('http://localhost:3000/search/hot')
        .then(function(response) {
          const data = response.data
          if (data.code === 200) {
            _this.musiclist = data.result.hots
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    methods: {
      songPlay(index) {
        this.$router.push({
          name: 'songplay',
          // name: 'songplay',
          params: {
            id: this.musiclist[index].first
          }
        })
        console.log(this.musiclist[index].first)
      }
    }
  }
</script>

<style lang="less">
  .songlist {
    width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .songlist-top {
    overflow: hidden;
    .songlist-title {
      font-size: 22px;
      font-weight: 400;
      margin: 50px 0 0 20px;
    }
    .songlist-btn {
      display: block;
      background-color: #169af3;
      padding: 9px 20px;
      margin: 40px 20px 0 0;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
    }
  }
  
  .songlist-hr {
    border: 0;
    border-top: 1px solid #ecf0f1;
    margin-top: 20px;
  }
  
  .song-list-ul {
    overflow: hidden;
    width: 100%;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        text-align: left;
        padding: 0 10px;
        border-bottom: 1px solid #f2f2f2;
        height: 54px;
        line-height: 54px;
        font-size: 0;
        cursor: pointer;
        &:hover {
          background-color: rgb(244, 250, 255);
          a {
            color: #169af3;
          }
        }
        a {
          color: rgb(0, 0, 0);
          font-size: 16px;
        }
      }
    }
  }
</style>

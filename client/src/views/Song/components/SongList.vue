<template>
  <div class="songlist">
  
    <div class="songlist-top">
      <h2 class="songlist-title fl">热门歌单</h2>
      <a class="songlist-btn ri" href="javascript:;">播放全部</a>
    </div>
  
    <hr class="songlist-hr">
  
    <div class="song-list-ul">
      <ul>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li><a href="">7</a></li>
        <li><a href="">8</a></li>
        <li><a href="">9</a></li>
        <li><a href="">10</a></li>
        <li><a href="">11</a></li>
        <li><a href="">12</a></li>
        <li><a href="">13</a></li>
        <li><a href="">14</a></li>
        <li><a href="">15</a></li>
        <li><a href="">16</a></li>
        <li><a href="">17</a></li>
        <li><a href="">18</a></li>
        <li><a href="">19</a></li>
        <li><a href="">20</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  
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
          a{
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

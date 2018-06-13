<template>
    <div class="firendLink">
        <div class="itemTiele">
            <h3 class="yqlj">
                <b>有情</b> 连接
            </h3>
            <a href="/songlist" target="_blank" class="moreRR">更多</a>
        </div>
        <div class="linkContent">

            <a
            v-for="(item, index) in listLink"
            :key="index"
            target="_blank" :href="item.listSrc" :title="item.listTitle">{{item.listText}}</a>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        listLink: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style>

</style>

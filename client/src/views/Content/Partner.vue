<template>
    <div class="partner">
        <div class="itemTiele">
            <h3 class="hzhb">
                <b>合作</b> 伙伴
            </h3>
            <a href="#" target="_blank" class="moreRR">更多</a>
        </div>
        <div class="itemContent">
            <ul>
                <li
                v-for="(item, index) in listParther"
                :key="index">
                    <a href="#">
                        <img :src="item.listSrc" :alt="item.listAlt">
                    </a>
                </li>
            </ul>
        </div>
    
    </div>
</template>

<script>
    export default {
      props: {
        listParther: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style>
    
</style>

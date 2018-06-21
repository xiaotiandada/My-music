<template>
  <div id="app">
    <gemini-scrollbar>
    <router-view/>

    </gemini-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.setTiele()
    },
    methods: {
      setTiele() {
        // 设置title
        const OriginTitile = document.title
        let titleTime
        document.addEventListener('visibilitychange', function() {
          if (document.hidden) {
            document.title = '页面消失啦！'
            clearTimeout(titleTime)
          } else {
            document.title = '(つェ⊂)咦!又好了!'
            titleTime = setTimeout(function() {
              document.title = OriginTitile
            }, 1000)
          }
        })
      },
      setScrollbar() {
  
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

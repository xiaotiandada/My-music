<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
    <charts></charts>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Charts from './components/Charts'
export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    Charts
  }
}
</script>

<style>
.dashboard-container{
  padding: 32px;
  background-color: rgba(240, 242, 245, 1);
}
</style>

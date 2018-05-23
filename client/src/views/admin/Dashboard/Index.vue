<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  }
}
</script>

<style>
.dashboard-container{
  padding: 32px;
  background-color: rgba(240, 242, 245, 1);
}
</style>

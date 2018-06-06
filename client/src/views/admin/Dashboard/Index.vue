<template>
  <div class="dashboard-container">
    <panel-group></panel-group>
    <user-charts></user-charts>
    <comprehensive-charts></comprehensive-charts>
  </div>
</template>

<script>
import PanelGroup from './PanelGroup/PanelGroup.vue'
import UserCharts from './Charts/UserCharts.vue'
import ComprehensiveCharts from './Charts/ComprehensiveCharts.vue'
export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    UserCharts,
    ComprehensiveCharts
  }
}
</script>

<style>
.dashboard-container{
  padding: 32px;
  background-color: rgba(240, 242, 245, 1);
}
</style>

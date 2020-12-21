<template>
  <div class="charts"
       style="max-width: 1200px; margin: auto; justify-content: center; "
  >
    <h1>This is an charts page</h1>
    <BarChart/>
    <LineChart/>
    <PieChart/>
  </div>
</template>
<script>
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
export default {
  components: {PieChart, LineChart, BarChart}
}
</script>
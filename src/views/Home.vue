<template>
  <div class="home">
    <img alt="Vue logo" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/StarfleetCommandEmblemVectorized.svg/1200px-StarfleetCommandEmblemVectorized.svg.png">
    <HelloWorld msg="AL"/>
    <p>{{ $store.getters.counter }}</p>
    <button @click="increase">Increase</button> |
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    increase() {
      this.$store.commit("increment");
    },
    decrease() {
      this.$store.commit("decrement");
    }
  }
}
</script>

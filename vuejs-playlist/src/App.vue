<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form One</button>
    <button v-on:click="component = 'form-two'">Show form Two</button>
  </div>
</template>

<script>
import formOne from "./components/FormOne";
import formTwo from "./components/FormTwo";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>

<template>
<div>
  <app-header></app-header>
  <ninjas></ninjas>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Ninjas from './components/Ninjas';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas,
  },
  data(){
    return {
      
    }
  },
}
</script>

<style lang="scss">


</style>

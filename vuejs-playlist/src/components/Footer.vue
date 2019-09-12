<template>
<footer>
    <p>{{ copyright }}</p>
</footer>
</template>

<script>
export default {
  data(){
    return {
      copyright: 'Copyright 2019 Vue Ninjas'
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center; 
}



</style>

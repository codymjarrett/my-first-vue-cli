<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import AddBlog from './components/addBlog'
import ShowBlogs from './components/showBlogs'


export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs
  },

  data() {
    return {
     
    };
  },
  methods: {}
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Nunito SemiBold' 
}
</style>

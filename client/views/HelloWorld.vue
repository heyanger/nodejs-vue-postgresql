<template>
 <div>
   <h1>{{text}}</h1>
 </div> 
</template>

<script>
export default {
  data() {
    return {
      text: 'fetching...'
    }
  },
  mounted() {
    fetch('api/hello')
      .then(response => {
        return response.json();
      }).then(data => {
        this.text = data;
      });
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 15px;
  font-weight: 100;
}
</style>

<template>
  <div>
    <h1>Hello World Title</h1>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'fetching...'
    }
  },
  mounted: async function () {
    const response = await fetch('api/hello')
    this.text = await response.json()
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 15px;
  font-weight: 400;
}
</style>

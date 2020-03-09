<template>
  <div id="app">
    <my-header></my-header>

    <router-view/>
  </div>
</template>

<script>
import myHeader from "./components/partial/myHeader";

  export default {
      components:{
        myHeader
    }
  }

</script>

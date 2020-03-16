<template>
  <div id="app">
    <my-header></my-header>

    <router-view/>

    <my-footer></my-footer>

  </div>
</template>

<script>
import myHeader from "./components/partial/myHeader";
import myFooter from "./components/partial/myFooter";

  export default {
      components:{
        myHeader, myFooter
    }
  }

</script>

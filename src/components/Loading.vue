<template>
   <div class="loading_conteer"  v-show="!$store.state.isLoad">
       <div  class="loading">
           <div class="fa-3x">
               <i class="fas fa-sync fa-spin"></i>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
    .loading_conteer{
        position: absolute;
        left: 0;
        top:0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255, 0.8);
    }

    .loading {
        position: absolute;
        top: 50%;
        margin-top: -32px;
        left: 50%;
        margin-left: -24px;
    }
</style>
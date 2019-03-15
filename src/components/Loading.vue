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
<style scoped lang="scss">
    .loading_conteer{
        position: absolute;
        left: 0;
        top:0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        cursor: progress;
    }
    .loading {
        position: absolute;
        top: 50%;
        margin-top: -32px;
        left: 50%;
        margin-left: -24px;
        i{
             color: #ffffff;
             font-size: 10rem;
        }
    }
</style>
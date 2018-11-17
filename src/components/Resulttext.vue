<template>
    <div  class="ResultText_block" >
        <div class="char">
            <div class="item" v-for="(item,key) in $store.state.formData " :key="key">
                <strong>{{item.title}}:</strong> {{item.val}}
            </div>
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
  .ResultText_block{

       margin-top:20px;
       
  }
</style>



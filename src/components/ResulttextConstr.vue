<template>
    <div  class="ResultText_block" >
        <h4>Ваш заказ:</h4>
        <table class="table table-striped">
            <tbody>
             <tr v-for="(item,key) in $store.state.formData " :key="key">
                  <td>{{item.title}}:</td>
                  <td> {{item.val}}</td>
              </tr>
            </tbody>
        </table>    
    </div>
</template>
<script>
export default {
    
}
</script>



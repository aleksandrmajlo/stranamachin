<template>
     <div>
         <div class="mb-20">
           <h4>Марка:</h4>
            <select v-model="marka" class="form-control">
                <option v-for="(model,index) in $store.state.models" :value="index" :key="index">{{model.title}}</option>
            </select>
         </div>
         <div class="mb-20">
               <h4>Модель:</h4>
                <select v-model="model"  class="form-control">
                   <option v-for="(model,index) in models" :value="index" :key="index">{{model}}</option>
                </select>
         </div>
     </div>
</template>
<script>
export default {
    data(){
        return {
            marka:"",
            model:""
        } 
    },

    computed: {
         models(){
             if(this.$store.state.activeMarka||this.$store.state.activeMarka===0){
                  let ar=[];
                  this.$store.state.models[this.$store.state.activeMarka].items.forEach(element => {
                      ar.push(element.name)
                  });
                  return ar;
             }else return [];
         }

    },
    watch:{
        marka(v){
           this.$store.commit('setMarka',v)  
        },
        model(v){
            this.$store.commit('setModel',v)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>



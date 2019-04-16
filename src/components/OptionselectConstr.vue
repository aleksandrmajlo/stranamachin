<template v-cloak>
    <div class="option_color_block" :class="name">
        <div class="radioBlock">
            <label class="radio-inline" v-for="(item, key) in groups">
                <input type="radio" :value="key" v-model="type" >{{item.title}}
            </label>
        </div>
        <div class="option_item">
            <div class="flex_item">
                <div class="option_color_col" v-for="(v, k) in items" :key="k">
                  <span class="option_color"
                        v-tooltip="v.title"
                        :class="[v.active? 'active': '']"
                        :title="v.title"
                        @click="option_color(type,k)"
                        :style="{ 'background-color' : $store.state.color_setting[v.title]  ? $store.state.color_setting[v.title] : v.color, }"
                  >
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "OptionSelect",
        data(){
            return {
                type:0
            }
        },
        props: [
            'name'
        ],
        computed: {
            groups() {
                return this.$store.state.constr[this.name]
            },

            items() {
                return this.$store.state.constr[this.name][this.type].items
            },

        },
        methods: {
            option_color(key, k) {
                if("Dizain"==this.name){
                    return false;
                }
                this.$store.commit('activeOption', {
                    name: this.name,
                    key: key,
                    k: k,
                });
                if("Bokovaia"==this.name){
                    this.$store.commit('setDizainItems')
                }
            }
        },
        watch:{
            type(newValue){
                this.$store.commit('setActiveLevel1',{name:this.name,val:newValue});
                this.$store.commit('setTotal');
            }
        }
    }
</script>

<style scoped lang="scss">

    .option_color_block {
        margin-top: 10px;
        margin-bottom: 10px;

        .radioBlock{
            margin-bottom: 10px;
             label{
                  margin-left: 0 !important;
                  margin-right: 10px;
                 margin-bottom: 5px;
             }
        }

        .option_item {
            margin-bottom: 10px;
            .subtitle {
                margin-bottom: 10px;
            }
        }

    }
    .Otstrochka.option_color_block{
         display:flex;
         flex-wrap: wrap;
         justify-content: space-between;
    }
</style>
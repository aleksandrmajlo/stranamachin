<template>
    <div class="option_color_block">
                            <span class="option_color"
                                  :class="[v.active? 'active': '']"
                                  v-tooltip="v.title"
                                  v-for="(v, key) in $store.state.constr[name]" :key="key"
                                  @click="option_color(key)"
                                  :style="'background-color:'+v.color +';'+v.border">
                            </span>
    </div>
</template>

<script>
    export default {
        name: "OptionColor",
        props:[
            'name'
        ],
        mounted(){

        },
        methods:{
            option_color(key){
                this.$store.commit('activebuild',{
                    name:this.name,
                    key: key
                });
            }
        }

    }
</script>

<style scoped lang="scss">
    .option_color_block {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        .option_color {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            box-sizing: border-box;
            &:hover {
                border: 3px solid #01B1F1 !important;
            }
        }

        .option_color.active {
            border: 3px solid #01B1F1 !important;
        }

    }
</style>
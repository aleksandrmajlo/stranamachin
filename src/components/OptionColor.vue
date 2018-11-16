<template>
    <div class="option_color_block">
         <div class="option_color_col" v-for="(v, key) in $store.state.constr[name]" :key="key">
            <span class="option_color"
                 :class="[v.active? 'active': '']"
                 v-tooltip="v.title"
                 @click="option_color(v,key)"
                 :style="{ 'background-color' : $store.state.color_setting[v.title]  ? $store.state.color_setting[v.title] : v.color, 'border' :v.border }"
            >
            </span>
         </div>



    </div>
</template>

<script>
    export default {
        name: "OptionColor",
        props: [
            'name'
        ],
        mounted() {

        },
        methods: {
            option_color(v, key) {
                this.$store.commit('activebuild', {
                    name: this.name,
                    key: key,
                    item: v
                });
            }

        }

    }
</script>

<style scoped lang="scss">
    .option_color_block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
         .option_color_col{
             padding-left: 5px;
             padding-right: 5px;
             margin-bottom: 5px;
             .option_color {
                 display: block;
                 width: 32px;
                 height: 32px;
                 border-radius: 50%;
                 cursor: pointer;
                 -webkit-transition: all 0.5s ease;
                 transition: all 0.5s ease;
                 box-sizing: border-box;
                 &:hover {
                     border: 3px solid #01B1F1 !important;
                 }
             }
         }


        .option_color.active {
            border: 3px solid #01B1F1 !important;
        }

    }
</style>
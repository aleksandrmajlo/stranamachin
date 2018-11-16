<template v-cloak>
    <div class="option_color_block" :class="name">

        <div class="option_item" v-for="(item, key) in $store.state.constr[name]" :key="key">
            <div class="subtitle">{{item.title}}</div>
            <div class="flex_item">
                <div class="option_color_col" v-for="(v, k) in item.items" :key="k">
                  <span class="option_color"
                        v-tooltip="v.title"
                        :class="[v.active? 'active': '']"
                        @click="option_color(key,k)"
                        :style="{ 'background-color' : $store.state.color_setting[v.title]  ? $store.state.color_setting[v.title] : v.color,  'border' : v.border ? v.border : '' }"
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
        props: [
            'name'
        ],
        methods: {
            option_color(key, k) {
                this.$store.commit('activeoption', {
                    name: this.name,
                    key: key,
                    k: k,
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    .option_color_block {
        margin-top: 10px;
        margin-bottom: 10px;
        .option_item {
            margin-bottom: 10px;
            .subtitle {
                margin-bottom: 10px;
            }
            .flex_item {

                display: flex;
                flex-wrap: wrap;

                align-items: center;
                justify-content: space-between;

                .option_color_col {
                    padding-left: 5px;
                    padding-right: 5px;
                    margin-bottom: 5px;
                }
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
                .option_color.active {
                    border: 3px solid #01B1F1 !important;
                }
            }
        }

    }
    .Otstrochka.option_color_block{
         display:flex;
         flex-wrap: wrap;
         justify-content: space-between;
    }
</style>
<template>
    <div class="option_group_block" :class="name">

        <div class="subtitleGroup">
            {{groups.titleGroup}}:
            <template v-for="(item, key) in groups.itemsGroup">
                  <span :class="[activeIndex===key? 'active': '']"
                        @click="setActive(key)"
                        :key="key">
                    {{item.title}}
                 </span>
                <span v-if="(key+1)<groups.itemsGroup.length">,</span>
            </template>
        </div>

        <div class="radioBlock" v-if="itemNameGroups.length>1">
            <label class="radio-inline" v-for="(item, key) in itemNameGroups">
                <input type="radio" :value="key" v-model="type" checked>{{item}}
            </label>
        </div>


        <div class="flex_item">
            <div class="option_color_col" v-for="(v, k) in items" :key="k">
                  <span class="option_color"
                        v-tooltip="v.title"
                        :class="[v.active? 'active': '']"
                        @click="option_color(k)"
                        :title="v.title"
                        :style="{ 'background-color' : $store.state.color_setting[v.title]  ? $store.state.color_setting[v.title] : v.color }"
                  >
                    </span>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "optiongroupConstr",
        data() {
            return {
                type: 0,
                activeIndex: 0
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
                return this.$store.state.constr[this.name].itemsGroup[this.activeIndex].items[this.type].innerItems;
            },
            itemNameGroups() {
                let ar = [];
                this.$store.state.constr[this.name].itemsGroup[this.activeIndex].items.forEach(el => {
                    ar.push(el.name);
                });
                return ar;
            }
        },
        methods: {
            setActive(key) {
                this.activeIndex = key;
                this.$store.commit('clearActiveSotu', this.name);
            },
            option_color( k) {

                this.$store.commit('activeSotu', {
                    name: this.name,
                    activeIndex: this.activeIndex,
                    key: this.type,
                    k: k,
                })
            }
        },
        watch:{
            type(){
                this.$store.commit('clearActiveSotu', this.name);
            }

        }
    }
</script>

<style scoped lang="scss">
    .option_group_block {
        border-bottom: 1px solid #ffffff;
        padding-bottom: 10px;
        margin-bottom: 10px;
        .radioBlock{
             margin-bottom: 10px;
        }
        .subtitleGroup {
            font-size: 18px;
            margin-bottom: 10px;
            span {
                padding: 0 5px;
                cursor: pointer;
            }
        }
        .subtitle {
            margin-bottom: 10px;
        }
    }
</style>
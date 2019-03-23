<template>
    <div class="flex_item">
         <div class="option_color_col" v-for="(v, key) in $store.state.constr[name]" :key="key">
            <span class="option_color"
                 :class="[v.active? 'active': '']"
                 v-tooltip="v.title"
                  :title="v.title"
                 @click="option_color(v,key)"
                 :style="{ 'background-color' : $store.state.color_setting[v.title]  ? $store.state.color_setting[v.title] : v.color }"
            >
            </span>
         </div>
    </div>
</template>
<script>
    export default {
        name: "OptioncolorConstr",
        props: [
            'name'
        ],
        mounted() {

        },
        methods: {
            option_color(v, key) {
                this.$store.commit('activeBuild', {
                    name: this.name,
                    key: key,
                    item: v
                });
            }

        }

    }
</script>

<style scoped lang="scss">

</style>
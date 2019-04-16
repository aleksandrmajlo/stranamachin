<template>
    <div>
        <div class="mb-20">
            <h4>Марка:</h4>
            <select v-model="marka" class="form-control">
                <option value="-1">Выбрать</option>
                <option v-for="(model,index) in $store.state.models" :value="index" :key="index">{{model.title}}
                </option>
            </select>
        </div>
        <div class="mb-20">
            <h4>Модель:</h4>
            <select v-model="model" class="form-control">
                <option value="-1">Выбрать</option>
                <option v-for="(model,index) in models" :value="index" :key="index">{{model}}</option>
            </select>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                marka: "-1",
                model: "-1"
            }
        },
        computed: {
            models() {

                if ((this.$store.state.activeMarka || this.$store.state.activeMarka === 0) && this.$store.state.activeMarka !== "-1") {
                    let ar = [];
                    this.$store.state.models[this.$store.state.activeMarka].items.forEach(element => {
                        ar.push(element.name)
                    });
                    return ar;
                } else return [];
            }

        },
        watch: {
            marka(v) {
                this.model = "-1";
                this.$store.commit('setMarka', v)
                this.$store.commit('setModel', "-1");
                this.$store.commit('setTotal');
            },
            model(v) {
                this.$store.commit('setModel', v);
                this.$store.commit('setTotal');
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>



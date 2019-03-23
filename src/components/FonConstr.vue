<template>
    <div class="build">
        <div class="wrap">
            <div class="img-box">
                <transition>
                    <img :src="'img/build/'+$store.state.layer" @load="loaded"/>
                </transition>
            </div>
            <div v-show="$store.state.layer2!==''" class="layer layer2">
                <transition>
                    <img :src="'img'+$store.state.layer2" @load="loaded"/>
                </transition>
            </div>
            <div v-show="$store.state.layer3!==''" class="layer layer3">
                <transition>
                    <img :src="'img'+$store.state.layer3" @load="loaded" alt=""/>
                </transition>
            </div>
            <div v-show="$store.state.layer4!==''" class="layer layer4">
                <transition>
                    <img :src="'img'+$store.state.layer4" @load="loaded" alt=""/>
                </transition>
            </div>

            <div v-show="$store.state.layer5!==''" class="layer layer5">
                <transition>
                    <img :src="'img'+$store.state.layer5" @load="loaded" alt=""/>
                </transition>
            </div>
            <div v-show="$store.state.layer1!==''" class="layer layer1">
                <transition>
                    <img :src="'img'+$store.state.layer1" @load="loaded"/>
                </transition>
            </div>
            <div class="lupa">
                <div class="wrap_lupa" @click="showBig">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "FonConstr",
        data() {
            return {}
        },
        methods: {
            showBig() {
                this.$store.commit('setLoadimgFalse');
                let data = {
                    layer: this.$store.state.layer,
                    layer1: this.$store.state.layer1,
                    layer2: this.$store.state.layer2,
                    layer3: this.$store.state.layer3,
                    layer4: this.$store.state.layer4,
                    layer5: this.$store.state.layer5,
                };
                this.$http.post(imageUrl,
                    data
                ).then((response) => {
                    if (response.data.img) {
                        let that = this;
                        let img = new Image();
                        img.onload = function () {
                            that.$store.state.result = response.data.img;
                            that.$store.commit('setLoadimg');
                            that.$store.commit('setFlip');
                        };
                        img.src = response.data.img;
                    } else {
                        this.$store.commit('setLoadimg');
                        alert('Произошла ошибка, попробуйте позже');
                    }

                }).catch((error) => {
                    this.$store.commit('setLoadimg');
                    alert('Произошла ошибка, попробуйте позже');
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
            },
            loaded() {
                setTimeout(() => {
                    this.$store.commit('setLoadimg');
                }, 200);
            }
        }
    }
</script>
<style scoped lang="scss">
    .build {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .wrap {
            position: relative;
            margin-left: -80px;
            margin-right: -120px;
            .img-box {
                position: relative;
                img {
                    transition: all .3s ease;
                    overflow: hidden;
                }
                img.v-enter, img.v-leave {
                    background-color: #eee;
                    height: 0;
                    opacity: 0;
                }
            }
            .layer {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            .lupa {
                position: absolute;
                bottom: -10px;
                left: 50%;
                margin-left: -15px;
                .wrap_lupa {
                    cursor: pointer;
                    padding: 6px;
                    background: rgba(66, 170, 255, 0.7);
                    font-size: 25px;
                }
            }
        }
    }
</style>
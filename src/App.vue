<template>
    <div id="app">

        <div class="flip-container ">
            <div class="flipper" :class="{ 'flip-effect': $store.state.isFlip }">
                <div class="constructor_block front">
                    <div class="constructor flex_block">

                        <div class="left">

                            <div class=" parent-color">
                                <div class="option_subject">
                                    Основа
                                    <span style="font-size: 12px;color: #8B8B8B;top: -3px;position: relative;">выберите цвет</span>
                                </div>
                                <optionColor name="build"></optionColor>
                            </div>

                            <div class=" parent-color">
                                <div class="option_subject">Вставка</div>
                                <optionSelect name="Vstavka"></optionSelect>
                            </div>

                        </div>

                        <constrImage></constrImage>

                        <div class="right">

                            <div class=" parent-color">
                                 <span class="option_subject">
                                   Отстрочка
                                 </span>
                            </div>

                            <optionSelect name="Otstrochka"></optionSelect>
                            <div class="desc">
                                Декоративная отстрочка швов подчеркивает контуры
                            </div>

                            <div class="buttons">
                                <span class="price skew ">
                                     <span class="pricetext">{{$store.state.price}}</span>
                                      <i class="fas fa-ruble-sign"></i>
                                 </span>
                                <span class="addToCart_block skew ">
                                       <a @click.prevent="addToCart" class="addToCart" href="#">
                                         Заказать
                                       </a>
                                </span>
                            </div>

                        </div>

                    </div>
                    <loading></loading>
                </div>

                <div class="result_block back">
                    <img :src="$store.state.result" alt=""/>
                    <div class="back_button">
                        <div class="back_over">
                            <i class="fas fa-undo" @click="back"></i>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <Form ref="form"></Form>
    </div>
</template>

<script>
    import optionColor from './components/OptionColor.vue'
    import optionSelect from './components/OptionSelect.vue'
    import constrImage from './components/FonImage'
    import loading from './components/Loading'
    import Form from './components/Form'

    // import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

    export default {
        name: 'app',
        components: {
            // SweetModal,
            // SweetModalTab,
            optionColor, constrImage,
            optionSelect,
            Form,
            loading
        },
        mounted() {

        },
        methods: {
            addToCart() {

                this.$refs.form.open();
            },

            back() {
                this.$store.commit('setFlip');
            }
        }
    }

</script>


<style lang="scss">
    @import url('https://use.fontawesome.com/releases/v5.4.1/css/all.css');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=cyrillic');

    [v-cloak] {
        display: none
    }

    .flip-container {

        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -ms-perspective: 1000;
        perspective: 1000;
        -ms-transform: perspective(1000px);
        -moz-transform: perspective(1000px);
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
    }

    .flip-container .flip-effect .back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    .flip-container .flip-effect .front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .flipper {
        -webkit-transition: 0.6s;
        -webkit-transform-style: preserve-3d;
        -ms-transition: 0.6s;
        -moz-transition: 0.6s;
        -moz-transform: perspective(1000px);
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transition: 0.6s;
        transform-style: preserve-3d;
    }

    .front, .back {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: 0.6s;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: rotateY(0deg);
        -moz-transition: 0.6s;
        -moz-transform-style: preserve-3d;
        -moz-transform: rotateY(0deg);
        -o-transition: 0.6s;
        -o-transform-style: preserve-3d;
        -o-transform: rotateY(0deg);
        -ms-transition: 0.6s;
        -ms-transform-style: preserve-3d;
        -ms-transform: rotateY(0deg);
        transition: 0.6s;
        transform-style: preserve-3d;
        transform: rotateY(0deg);

        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front {
        -webkit-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        z-index: 12;
    }

    .back {
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }

    #app {
        font-family: 'Open Sans', sans-serif;
        width: 958px;
        margin: 0 auto;
        position: relative;
        padding: 20px;
        margin-bottom: 30px;

        img {
            max-width: 100%;
            width: 100%;
            height: auto;
        }

        .constructor_block {
            width: 958px;

            .skew {
                transform: skew(-18deg, 0deg);
                -webkit-transform: skew(-18deg, 0deg);
                -moz-transform: skew(-18deg, 0deg);
                -o-transform: skew(-18deg, 0deg);
                -ms-transform: skew(-18deg, 0deg);
                display: inline-block;
            }

            .flex_block {
                display: flex;
                justify-content: space-between;
                .left {
                    width: 25%;
                }
                .right {
                    width: 25%;
                }
                .parent-color {
                    margin-bottom: 20px;
                }
            }


            .option_subject {
                font-size: 20px;
                margin-bottom: 10px;
            }
            .subtitle {
                font-style: italic;
                color: #7c7c7c;
                line-height: 18px;
                display: block;
                padding-top: 4px;
            }
            .desc {
                font-style: italic;
                color: #7c7c7c;
                line-height: 18px;
                display: block;
                margin-bottom: 15px;
            }
            .buttons{
                display: flex;
                align-items: center;
                .price {
                    font-size: 25px;
                    font-weight: 400;

                    padding-right: 10px;
                    padding-left: 10px;

                    background: #000000;
                    color: #fff;
                    height: 46px;
                    line-height: 46px;
                    text-align: center;
                    .pricetext {
                        margin-right: 5px;
                    }
                }
                .addToCart_block {
                    display: inline-block;
                    background: #01B1F1;
                    width: 150px;
                    height: 46px;
                    line-height: 46px;
                    text-transform: uppercase;
                    font-size: 16px;
                    text-align: center;
                    color: #fff;
                    font-weight: 400;
                    border: none;
                    outline: none;
                    cursor: pointer;



                    a{
                        color: #FFF;
                        text-transform: uppercase;
                        font-size: 18px;
                        font-weight: bold;
                        text-decoration: navajowhite;
                    }

                }
            }

        }

        .result_block {
            width: 958px;
            .back_button {

                position: absolute;
                bottom: -10px;
                left: 50%;
                margin-left: -15px;

                .back_over {
                    cursor: pointer;
                    padding: 6px;
                    background: rgba(66, 170, 255, 0.7);
                    font-size: 25px;
                }
            }
        }
    }

    .tooltip {
        display: block !important;
        z-index: 10000;
        .tooltip-inner {
            background: black;
            color: white;
            border-radius: 16px;
            padding: 5px 10px 4px;
        }
        .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: black;
            z-index: 1;
        }
        &[x-placement^="top"] {
            margin-bottom: 5px;
            .tooltip-arrow {
                border-width: 5px 5px 0 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                bottom: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="bottom"] {
            margin-top: 5px;

            .tooltip-arrow {
                border-width: 0 5px 5px 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-top-color: transparent !important;
                top: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="right"] {
            margin-left: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 5px 0;
                border-left-color: transparent !important;
                border-top-color: transparent !important;
                border-bottom-color: transparent !important;
                left: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &[x-placement^="left"] {
            margin-right: 5px;

            .tooltip-arrow {
                border-width: 5px 0 5px 5px;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                right: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &.popover {
            $color: #f9f9f9;

            .popover-inner {
                background: $color;
                color: black;
                padding: 24px;
                border-radius: 5px;
                box-shadow: 0 5px 30px rgba(black, .1);
            }

            .popover-arrow {
                border-color: $color;
            }
        }

        &[aria-hidden='true'] {
            visibility: hidden;
            opacity: 0;
            transition: opacity .15s, visibility .15s;
        }

        &[aria-hidden='false'] {
            visibility: visible;
            opacity: 1;
            transition: opacity .15s;
        }
    }
</style>

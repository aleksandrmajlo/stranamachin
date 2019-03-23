<template>
    <div id="app">
                <div class="flip-container ">
                    <div :style="{'min-height':Height+'px'}" class="flipper" :class="{ 'flip-effect': $store.state.isFlip }">
                        <div class="constructor_block front">
                            <div class="getHeight constructor flex_block">
                                <div class="left">
                                    <div class=" parent-color">
                                         <models-constr></models-constr>
                                    </div>
                                    <div class=" parent-color">
                                        <h4>Основа Кожа</h4>
                                        <optioncolor-constr name="build"></optioncolor-constr>
                                    </div>
                                    <div class=" parent-color">
                                        <h4>Центральная вставка</h4>
                                        <optionselect-constr name="Vstavka"></optionselect-constr>
                                    </div>
                                    <div class=" parent-color">
                                        <h4>Боковая часть кожа</h4>
                                        <optionselect-constr name="Bokovaia"></optionselect-constr>
                                    </div>
                                    <div class=" parent-color">
                                        <h4>Дизайн</h4>
                                        <optionselect-constr name="Dizain"></optionselect-constr>
                                    </div>
                                </div>
                                <fon-constr></fon-constr>
                                <div class="right">

                                    <div class=" parent-color">
                                        <h4>Рисунок</h4>
                                        <hr class="ffffff">
                                        <optiongroup-constr name="RisunokSotu"></optiongroup-constr>
                                        <optiongroup-constr name="RisunokRomb"></optiongroup-constr>
                                        <optiongroup-constr name="RisunokClassic"></optiongroup-constr>
                                    </div>
                                    <div class=" parent-color">
                                        <h4>Отстрочка</h4>
                                        <optionselect-constr name="Otstrochka"></optionselect-constr>
                                    </div>
                                </div>
                            </div>
                            <div class="getHeight  constructor flex_block flex_block_three ">
                                <div class="item33">
                                    <resulttext-constr></resulttext-constr>
                                </div>
                                <div class="item33 pdl-20">
                                     <price-constr></price-constr>
                                </div>
                                <div class="item33 pdl-20">
                                    <div class="buttons ">
                                        <h4>Оформить заказ в один клик:</h4>
                                        <a @click.prevent="addToCart" class="btn btn-warning btn-lg" href="#">
                                            Заказать
                                        </a>
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
                <form-constr ref="form"></form-constr>

    </div>
</template>
<script>
    import ModelsConstr from './components/ModelsConstr.vue'
    import OptioncolorConstr from './components/OptioncolorConstr'
    import OptiongroupConstr from './components/OptiongroupConstr.vue'
    import OptionselectConstr from './components/OptionselectConstr.vue'
    import ResulttextConstr from './components/ResulttextConstr.vue'
    import FonConstr from './components/FonConstr'

    
    import FormConstr from './components/FormConstr'
    import PriceConstr from './components/PriceConstr'
    import loading from './components/Loading'

    export default {
        name: 'app',
        data(){
            return {
                Height:0
            }
        },
        components: {
            ModelsConstr,
            FonConstr,
            OptioncolorConstr,
            OptiongroupConstr,
            OptionselectConstr,
            FormConstr,
            PriceConstr ,
            loading,
            ResulttextConstr
        },
        mounted() {
            this.$store.dispatch('getData');
             this.minHeigth();
            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    this.minHeigth();
                });
            })

        },
        methods: {
            addToCart() {
                this.$refs.form.open();
            },
            back() {
                this.$store.commit('setFlip');
            },
            minHeigth(){
                let list = document.getElementsByClassName("getHeight");
                this.Height=0;
                for (let item of list) {
                    this.Height+=item.clientHeight;                
                }             
            }
        }
    }
</script>
<style lang="scss">
    @import url('https://use.fontawesome.com/releases/v5.4.1/css/all.css');
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
           min-height: 1000px;
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
        width: 100%;
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
        position: relative;
        color:#fff;
        img {
            max-width: 100%;
            width: 100%;
            height: auto;
        }
        .constructor_block {
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
                    z-index: 2;
                }
                .right {
                    width: 25%;
                    z-index: 2;
                }
                .parent-color {
                    margin-bottom: 20px;
                }
            }
            .flex_block_three{
                .item33{
                     width: 33.33333%;
                     box-sizing: border-box;
                }
                .pdl-20{
                     padding-left: 20px;
                }
            }
            .option_subject {
                font-size: 20px;
                margin-bottom: 10px;
                font-weight: bolder;
            }
            .subtitle {
                color: #fff;
                font-weight: bold;
                line-height: 18px;
                display: block;
                padding-top: 4px;
            }
            .desc {
                font-style: italic;
                color: #fff;
                line-height: 18px;
                display: block;
                margin-bottom: 15px;
            }
            .buttons {
               
            }

        }
        .result_block {
            width: 100%;
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
        h4{
            color: #FFF;
        }
        .flex_item {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .option_color_col {
                padding-left: 2px;
                padding-right: 2px;
                margin-bottom: 5px;
            }
            .option_color {
                display: block;
                position: relative;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                cursor: pointer;
                -webkit-transition: all 0.5s ease;
                transition: all 0.5s ease;
                box-sizing: border-box;
                border: 1px solid gray;
            }
            .option_color.active[title="Белый"] ,
            .option_color.active[title="Желтый"] {
                &:before{
                    content: '\2714';
                    position: absolute;
                    top: -5px;
                    left: 0;
                    font-size: 25px;
                    color: gray;
                }
            }
            .option_color.active {
                &:before{
                    content: '\2714';
                    position: absolute;
                    top: -5px;
                    left: 0;
                    font-size: 25px;
                    color: #FFF;
                }
            }

        }

        
    }

    hr.ffffff{
         background: #ffffff;
    }

    .tooltip {
        display: block !important;
        z-index: 10000;
        .tooltip-inner {
            background: black;
            border:#fff 1px solid;
            color: white;
            border-radius: 16px;
            padding: 5px 10px;
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
    .mb-20{
        margin-bottom: 20px;
    }
</style>

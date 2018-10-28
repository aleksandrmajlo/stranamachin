<template>
    <div>
        <sweet-modal ref="modal" title="Ваш заказ">
            <div class="form_block">
                <div class="photo_block">
                    <img :src="$store.state.result"/>
                </div>
                <div class="desc_block" v-cloak>

                    <div class="title">
                        {{$store.state.title}}
                    </div>
                    <div class="price">
                        Цена:<strong>{{$store.state.price}}</strong> <i class="fas fa-ruble-sign"></i>
                    </div>

                    <div class="char">
                        <div class="item" v-for="(item,key) in $store.state.formData " :key="key">
                            <strong>{{item.title}}:</strong> {{item.val}}
                        </div>
                    </div>

                    <div class="form">
                        <form @submit="checkForm" id="myForm">
                            <div class="form-group">
                                <label>Ваше имя:</label>
                                <input type="text" name="name" v-model="name"/>
                            </div>
                            <div class="form-group">
                                <label>Ваше телефон:</label>
                                <input type="tel" name="phone" v-model="phone" required/>
                            </div>
                            <button type="submit">Отправить</button>                     
                        </form>

                    </div>

                </div>
            </div>
        </sweet-modal>
        <sweet-modal icon="success" ref="suc">
         	Спасибо,Ваше сообщение получено.
        </sweet-modal>
    </div>
</template>

<script>
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue'

    export default {
        name: "Form",
        data() {
            return {
                name:'',
                phone:''
            }
        },
        components: {SweetModal, SweetModalTab},
        methods: {
            open() {
                this.$store.commit('setLoadimgFalse');
                let data = {
                    layer: this.$store.state.layer,
                    layer1: this.$store.state.layer1,
                    layer2: this.$store.state.layer2,
                };
                this.$http.post(this.$store.state.ajaxUrl,
                    data
                ).then((response) => {
                    let that = this;
                    let img = new Image();
                    img.onload = function () {

                        that.$store.state.result = response.data.img;
                        that.$store.commit('setLoadimg');
                        that.$refs.modal.open();
                    };
                    img.src = response.data.img;
                }).catch((error) => {
                    // Error
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    this.$store.commit('setLoadimg');
                    alert('Произошла ошибка, попробуйте позже')
                });
            },
            checkForm: function (e) {
                e.preventDefault();

                let myForm = document.getElementById('myForm');
                let formData = new FormData(myForm);
                formData.append('name', this.name);
                formData.append('phone', this.phone);
                formData.append('osn', this.$store.state.formData.build.val);
                formData.append('Otstrochka', this.$store.state.formData.Otstrochka.val);
                formData.append('Vstavka', this.$store.state.formData.Vstavka.val);

                this.$http.post(this.$store.state.ajaxUrlmail,
                    formData
                ).then((response)=>{
                    this.$refs.modal.close();
                    setTimeout(() => {
                        this.$refs.suc.open();
                    }, 500);
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .form_block {
        display: flex;
        .photo_block {
            width: 25%;
        }
        .desc_block {
            flex-grow: 2;
            box-sizing: border-box;
            padding-right: 10px;
            .title {
                font-weight: bold;
                font-size: 26px;
            }
            .price {
                margin-bottom: 15px;
            }
            .char {
                margin-bottom: 15px;
            }
            .form {
                .form-group {
                    margin-bottom: 15px;
                    label {
                        display: inline-block;
                        max-width: 100%;
                        margin-bottom: 5px;
                        font-weight: 700;
                    }
                    input {
                        display: block;
                        width: 100%;
                        padding: 6px 12px;
                        font-size: 14px;
                        line-height: 1.42857143;
                        color: #555;
                        background-color: #fff;
                        background-image: none;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
                        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
                        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
                    }
                }
            }
        }
    }
</style>
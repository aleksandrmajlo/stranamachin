<template>
    <div>
        <sweet-modal ref="modal" title="Oформить заказ">
            <div class="form_block">
                <div class="photo_block">
                    <img :src="$store.state.result"/>
                </div>
                <div class="desc_block" v-cloak>
                    <div class="form">
                        <form @submit="checkForm" id="myForm">
                            <div class="form-group">
                                <label>Ваше имя:</label>
                                <input class="form-control" type="text" name="name" v-model="name"/>
                            </div>
                            <div class="form-group">
                                <label>Ваше телефон:</label>
                                <input class="form-control" type="tel" name="phone" v-model="phone" required/>
                            </div>
                            <button class="btn btn-warning btn-lg" type="submit">Отправить</button>
                        </form>
                    </div>
                    <h2 class="text-center">Ваш заказ:</h2>
                    <div class="price">
                        <strong> Цена:</strong> {{$store.state.Total}} <i class="fas fa-ruble-sign"></i>
                    </div>

                    <div class="char">
                        <div class="item" v-for="(item,key) in $store.state.formData " :key="key">
                            <strong>{{item.title}}:</strong> {{item.val}}
                        </div>
                    </div>
                </div>
            </div>
        </sweet-modal>
        <sweet-modal icon="success" ref="suc">
           <h4 class="text-center color00">Спасибо,Ваше сообщение получено.</h4>
        </sweet-modal>
    </div>
</template>

<script>
    import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
    export default {
        name: "Form",
        data() {
            return {
                name: '',
                phone: ''
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
                    layer3: this.$store.state.layer3,
                    layer4: this.$store.state.layer4,
                    layer5: this.$store.state.layer5,
                };
                this.$http.post(imageUrl,
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
                if ((this.$store.state.activeMarka || this.$store.state.activeMarka === 0) && (this.$store.state.activeModel || this.$store.state.activeModel === 0)) {
                    formData.append('Marka', this.$store.state.models[this.$store.state.activeMarka].title);
                    formData.append('Model', this.$store.state.models[this.$store.state.activeMarka].items[this.$store.state.activeModel].name);
                }else{
                    formData.append('Marka', 'не выбран');
                    formData.append('Model', 'не выбран');
                }
                formData.append('data', JSON.stringify(this.$store.state.formData));
                formData.append('total', this.$store.state.Total);
                formData.append('photo', this.$store.state.result);

                this.$http.post(formUrl,
                    formData
                ).then((response) => {
                    this.$refs.modal.close();
                    setTimeout(() => {
                        this.$refs.suc.open();
                    }, 200);
                })

            }
        }
    }
</script>

<style scoped>
    .fa-ruble-sign {
        display: inline-block;
        margin-left: 5px;
    }
</style>
<style lang="scss">
    .form_block {
        display: flex;
        flex-direction: column;
        color: #000000;
        h2 {
            color: #000000 !important;
        }
        .photo_block {
            width: 100%;
        }
        .desc_block {
            width: 100%;
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
                margin-bottom: 20px;
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
    .color00{
        color: #000000 !important;
    }
    .sweet-title {
        h2 {
            color: #000000;
            line-height: 65px;
            text-align: center;
        }
    }
</style>
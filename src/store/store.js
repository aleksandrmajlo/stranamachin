import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    models:[],
    activeMarka:false,
    activeModel:false,
   
    price: 0,
    title: '',

    color_setting: {
        'Черный': '#000000',
        'Черный с полосками': '#000000',
        'Серый': '#808080',
        "Белый": "#ffffff",
        'Красный': '#FF0000',
        'Синий': '#0000ff',
        'Зеленый': '#00BB2D',
        'Желтый': '#FFFF00',
        'Оранжевый': '#FFA500',
        'Коричневый': '#A52A2A',
        'Бежевый': '#F5F5DC',

    },
    photo_name: {
        'Черный': 'CHernyj.png',
        'Черный с полосками': 'CHernyj_s_poloskami.png',
        'Серый': 'seryj.png',
        'Белый': 'belyj.png',
        'Красный': 'krasnyj.png',
        'Синий': 'sinij.png',
        'Желтый': 'ZHeltyj.png',
        'Оранжевый': 'oranzhevyj.png',
        'Коричневый': 'korichnevyj.png',
        'Бежевый': 'bezhevyj.png',
    },
    constr: {

        build: [

            {
                title: 'Черный',
                border: ' 1px solid #fff ',
                active: false
            },
            {
                title: 'Серый',
                active: false
            },
            {
                title: 'Белый',
                active: true
            },
            {
                title: 'Красный',
                active: false
            },
            {
                title: 'Синий',
                active: false
            },
            {
                title: 'Желтый',
                active: false
            },

            {
                title: 'Оранжевый',
                active: false
            },
            {
                title: 'Коричневый',
                active: false
            },
            {
                title: 'Бежевый',
                active: false
            },
        ],

        Otstrochka: [
            {
                title: 'Одинарная',
                path: '/Otstrochka/Odinarnaia/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },

                ]
            },
        ],

        Dizain: [

            {
                title: 'Отрезной верх и низ кожа',
                path: '/Dizain/kozha/',
                layer: 'layer3',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },

                ]
            },

            {
                title: 'Майка кожа',
                path: '/Dizain/Maika/',
                layer: 'layer3',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },

                ]
            },


        ],


        Bokovaia: [
            {
                title: 'Кожа',
                path: '/Bokovaia/kozha/',
                layer: 'layer4',
                items: [

                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },


                ]
            },
        ],

        Vstavka: [

            {
                title: 'Кожа перфорированная',
                path: '/Vstavka/kozha/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },
                ]
            },

            {
                title: 'Велюр',
                path: '/Vstavka/Veliur/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },


                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },

                ]
            },

            {
                title: 'Алькантара',
                path: '/Vstavka/Veliur/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },


                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },

                ]
            },

            {
                title: 'Жаккард',
                path: '/Vstavka/ZHakkard/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Черный с полосками',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Зеленый',
                        active: false
                    },


                ]
            },
        ],

        Risunok:[
            {
                title: 'Coтa 1',
                path: '/Risunok/sota1/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Черный',
                        border: ' 1px solid #fff ',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Белый',
                        active: false
                    },
                    {
                        title: 'Красный',
                        active: false
                    },
                    {
                        title: 'Синий',
                        active: false
                    },
                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },
                    {
                        title: 'Бежевый',
                        active: false
                    },
                ]
            },
        ]

    },


    layer: 'belyj.png',
    layer1: "",
    layer2: "",
    layer3: "",
    layer4: "",
    layer5: "",
    result: false,
    formData: {
        build: {
             title: 'Основа',
             val: 'Белый'
        },


        Otstrochka: {
            title: 'Отстрочка',
            val: 'Не выбрана'
        },

        Vstavka: {
            title: 'Центральная часть',
            val: 'Не выбрана'
        },

        Dizain: {
            title: 'Дизайн',
            val: 'Не выбрана'
        },
        Bokovaia: {
            title: 'Боковая часть',
            val: 'Не выбрана'
        },
        Risunok:{
            title: 'Рисунок',
            val: 'Не выбран'
        }

    },

    isLoad: false,
    isFlip: false

}


const mutations = {
    // загрузка json
    setData(state, data) {
        state.models=data.models;
    },

    //установка активной марки
    setMarka(state,index){
        state.activeMarka=index;
        state.activeModel=false;
    },
    
    //установка активной мoдели
    setModel(state,index){
        state.activeModel=index;
    },

    activebuild(state, ob) {
        let name = ob.name,
            key = ob.key;
        if (state.constr[name][key].active) return false;

        for (let index = 0; index < state.constr[name].length; index++) {

            console.log(index)
            console.log(index === key)
            if (index === key) {
                state.constr[name][index].active = true;
                state.isLoad = false;
                if (state.photo_name[state.constr.build[index].title]) {
                    state.layer = state.photo_name[state.constr.build[index].title];
                } else {
                    state.layer = state.constr.build[index].img;
                }
                state.formData.build.val = state.constr.build[index].title;

            } else {

                state.constr[name][index].active = false;

            }
        }
    },
    activeoption(state, ob) {
        let name = ob.name,
            k = ob.k,
            key = ob.key;
        // повторный клик    
        if (state.constr[name][key].items[k].active) {
            state.constr[name][key].items[k].active = false;
            state[state.constr[name][key].layer] = "";
            state.formData[name].val = 'Не выбрана';
            return false;
        }
        ;
        state.isLoad = false;
        for (let index = 0; index < state.constr[name].length; index++) {
            for (let i = 0; i < state.constr[name][index].items.length; i++) {
                const element = state.constr[name][index].items[i];
                element.active = false;
            }
        }
        state.constr[name][key].items[k].active = true;

        state[state.constr[name][key].layer] = state.constr[name][key].path + state.photo_name[state.constr[name][key].items[k].title];

        state.formData[name].val = state.constr[name][key].title + "  " + state.constr[name][key].items[k].title;
    },
    setLoadimg(state) {
        state.isLoad = true;
    },
    setLoadimgFalse(state) {
        state.isLoad = false;
    },

    setFlip(state) {
        state.isFlip = !state.isFlip;
    }

}
const actions = {

    getData() {
        let url = jsonUrl + "?time=" + new Date().getTime();
        Vue.axios.get(url).then(response => {
            this.commit("setData", response.data);
        });
    }

}

const getters = {}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

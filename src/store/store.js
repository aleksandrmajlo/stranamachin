import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
const state = {
    price:PRICE,
    title:TITLE,
    color_setting: {
        'Бежевый':'#F5F5DC',
        'Голубой':'#42AAFF',
        'Желтый':'#FFFF00',
        'Зеленый':'#00BB2D',
        'Золотистый':'#FFD700',
        'Какао':'#875f42',
        'Коричневый':'#A52A2A',
        'Красный':'#FF0000',
        'Мышиный':'#646B63',
        'Оранжевый':'#FFA500',
        'Салатовый':'#99FF99',
        'Серый':'#808080',
        'Светлосерый': '#9C9C9C',
        'Синий':'#0000ff',
        'Черный' : '#000000',
        'Черный с полосками' : '#000000',



    },
    photo_name: {
        'Белый': 'belyj.png',
        'Бежевый':'bezhevyj.png',
        'Голубой':'goluboj.png',
        'Желтый':'zheltyj.png',
        'Зеленый':'zelenyj.png',
        'Золотистый':'zolotistyj.png',
        'Какао':'kakao.png',
        'Коричневый':'korichnevyj.png',
        'Красный':'krasnyj.png',
        'Мышиный':'myshinyj.png',
        'Оранжевый':'oranzhevyj.png',
        'Салатовый':'salatovyj.png',
        'Синий':'sinij.png',
        'Серый':'seryj.png',
        'Светлосерый': 'svetloseryj.png',
        'Черный' : 'chernyj.png',
        'Черный с полосками' : 'chernyj_s_poloskami.png',
    },
    constr: {

        build: [

            {
                img: 'bel.png',
                title: 'Белый',
                color: '#ffffff',
                border: ' 3px solid #acacac',
                active: true
            },

            {
                img: 'svetloserye.png',
                title: 'Светлосерые',
                color: '#808080',
                border: '',
                active: false
            },

            {
                img: 'bezhevyj.png',
                title: 'Бежевый',
                color: '#F5F5DC',
                border: '',
                active: false
            },

            {
                img: 'goluboj.png',
                title: 'Голубой',
                color: '#42AAFF',
                border: '',
                active: false
            },


            {
                img: 'zheltyj.png',
                title: 'Желтый',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'zolotistyj.png',
                title: 'Золотистый',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'kakao.png',
                title: 'Какао',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'korichnevyj.png',
                title: 'Коричневый',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'krasnyj.png',
                title: 'Красный',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'myshinyj.png',
                title: 'Мышиный',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'oranzhevyj.png',
                title: 'Оранжевый',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'salatovyj.png',
                title: 'Салатовый',
                color: '#FFFF00',
                border: '',
                active: false
            },

            {
                img: 'seryj.png',
                title: 'Серый',
                color: '#FFFF00',
                border: '',
                active: false
            },



        ],

        Otstrochka: [
            {
                title: 'Боковины',
                path: '/Otstrochka/Bokoviny/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
                        active: false
                    },

                    {
                        title: 'Красный',
                        border: '',
                        active: false
                    },

                    {
                        title: 'Серый',
                        active: false
                    },
                    {
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Двойная вертикаль',
                path: '/Otstrochka/Dvoinaia_vertikal/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Ромб',
                path: '/Otstrochka/romb/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },


            {
                title: 'Мелкий ромб',
                path: '/Otstrochka/Melkii_romb/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Ромб двойной',
                path: '/Otstrochka/Romb_dvoinoi/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },


            {
                title: 'Дуга',
                path: '/Otstrochka/Duga/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },


            {
                title: 'Двойная дуга',
                path: '/Otstrochka/Dvoinaia_duga/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Имидж',
                path: '/Otstrochka/Imidzh/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Кант',
                path: '/Otstrochka/Kant/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Майка',
                path: '/Otstrochka/Maika/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Отрезной верх',
                path: '/Otstrochka/Otreznoi_verkh/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Отрезной низ',
                path: '/Otstrochka/Otreznoi_niz/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Подголовники',
                path: '/Otstrochka/Podgolovniki/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Полоски',
                path: '/Otstrochka/Poloski/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Соты',
                path: '/Otstrochka/Soty/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Углы',
                path: '/Otstrochka/Ugly/',
                layer: 'layer1',
                items: [
                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Желтый',
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
                        title: 'Черный',
                        active: false
                    },

                ]
            },


        ],

        Vverkh_i_niz: [

            {
                title: 'Кожа',
                path: '/Vverkh_i_niz/kozha/',
                layer: 'layer3',
                items: [
                    {
                        title: 'Бежевый',
                        active: false
                    },

                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Голубой',
                        active: false
                    },

                    {
                        title: 'Желтый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },

                    {
                        title: 'Красный',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        border: '',
                        active: false
                    },

                    {
                        title: 'Салатовый',
                        active: false
                    },


                    {
                        title: 'Светлосерый',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },

                    {
                        title: 'Черный',
                        active: false
                    },

                ]
            },


            {
                title: 'Велюр',
                path: '/Vverkh_i_niz/Veliur/',
                layer: 'layer3',
                items: [
                    {
                        title: 'Бежевый',
                        active: false
                    },


                    {
                        title: 'Красный',
                        active: false
                    },

                    {
                        title: 'Светлосерый',
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

                    {
                        title: 'Черный',
                        active: false
                    },

                ]
            },

            {
                title: 'Жаккард',
                path: '/Vverkh_i_niz/ZHakkard/',
                layer: 'layer3',
                items: [
                    {
                        title: 'Черный',
                        active: false
                    },


                    {
                        title: 'Черный с полосками',
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

        Bokovaia: [
            {
                title: 'Кожа',
                path: '/Bokovaia/kozha/',
                layer: 'layer4',
                items: [
                    {
                        title: 'Бежевый',
                        active: false
                    },

                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Голубой',
                        active: false
                    },

                    {
                        title: 'Желтый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },

                    {
                        title: 'Красный',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        border: '',
                        active: false
                    },

                    {
                        title: 'Салатовый',
                        active: false
                    },


                    {
                        title: 'Светлосерый',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },

                    {
                        title: 'Черный',
                        active: false
                    },

                ]
            },
        ],

        Vstavka: [

            {
                title: 'Кожа',
                path: '/Vstavka/kozha/',
                layer: 'layer2',
                items: [
                    {
                        title: 'Бежевый',
                        active: false
                    },

                    {
                        title: 'Белый',
                        border: ' 1px solid #acacac ',
                        active: false
                    },

                    {
                        title: 'Голубой',
                        active: false
                    },

                    {
                        title: 'Желтый',
                        active: false
                    },
                    {
                        title: 'Коричневый',
                        active: false
                    },

                    {
                        title: 'Красный',
                        active: false
                    },

                    {
                        title: 'Оранжевый',
                        border: '',
                        active: false
                    },

                    {
                        title: 'Салатовый',
                        active: false
                    },


                    {
                        title: 'Светлосерый',
                        active: false
                    },
                    {
                        title: 'Серый',
                        active: false
                    },

                    {
                        title: 'Черный',
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
                        title: 'Бежевый',
                        active: false
                    },


                    {
                        title: 'Красный',
                        active: false
                    },

                    {
                        title: 'Светлосерый',
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

                    {
                        title: 'Черный',
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
                        active: false
                    },


                    {
                        title: 'Черный с полосками',
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




    },
    layer: 'bel.png',
    layer1: "",
    layer2: "",
    layer3: "",
    layer4: "",
    result:false,
    formData:{
        build:{
            title:'Основа',
            val: 'Белый'
        },
        Otstrochka:{
            title:'Отстрочка',
            val: 'Не выбрана'
        },

        Vstavka:{
            title:'Центральная часть',
            val: 'Не выбрана'
        } ,

        Vverkh_i_niz:{
            title:'Вверх и низ',
            val: 'Не выбрана'
        } ,
        Bokovaia:{
            title:'Боковая часть',
            val: 'Не выбрана'
        }
    },

    isLoad: false,
    isFlip: false

}


const mutations = {

    activebuild(state, ob) {
        let name = ob.name,
            key = ob.key;
        if (state.constr[name][key].active) return false;
        for (let index = 0; index < state.constr[name].length; index++) {

            if (index === key) {
                state.constr[name][index].active = true;
                state.isLoad = false;
                if(state.photo_name[state.constr.build[index].title]){
                    state.layer = state.photo_name[state.constr.build[index].title];
                }else{
                    state.layer = state.constr.build[index].img;
                }
                state.formData.build.val=state.constr.build[index].title;
                state.isLoad = false;

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
            state.constr[name][key].items[k].active=false;
            state[state.constr[name][key].layer]="";
            state.formData[name].val='Не выбрана';
            return false;
        };
        state.isLoad = false;
        for (let index = 0; index < state.constr[name].length; index++) {
            for (let i = 0; i < state.constr[name][index].items.length; i++) {
                const element = state.constr[name][index].items[i];
                element.active = false;
            }
        }
        state.constr[name][key].items[k].active = true;

        state[state.constr[name][key].layer] = state.constr[name][key].path + state.photo_name[state.constr[name][key].items[k].title];

        state.formData[name].val=state.constr[name][key].title +"  "+ state.constr[name][key].items[k].title;
    },
    setLoadimg(state) {
        state.isLoad = true;
    },
    setLoadimgFalse(state) {
        state.isLoad = false;
    },

    setFlip(state){
        state.isFlip= !state.isFlip;
    }

}
const actions = {
    /*
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
  */

}

const getters = {
    // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

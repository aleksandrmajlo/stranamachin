import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
const state = {
    // ajaxUrl:'image.php',
    price:1000,
    title:'Модельные чехлы «Люкс»',

    ajaxUrl:'image.php',
    // ajaxUrl:'http://stranamachin.local/image.php',
    ajaxUrlmail:'mail.php',
    // ajaxUrlmail:'http://stranamachin.local/mail.php',

    constr: {

        build: [
            {
                img: 'bel.png',
                title: 'Белый',
                color: '#ffffff',
                border: 'border: 3px solid #acacac;',
                active: true
            },
            {
                img: 'svetloserye.png',
                title: 'Светлосерые',
                color: '#808080',
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
                        img: 'belyj.png',
                        title: 'Белый',
                        color: '#ffffff',
                        border: 'border: 1px solid #acacac;',
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
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },
                    {
                        img: 'chernyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
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
                        img: 'belyj.png',
                        title: 'Белый',
                        color: '#ffffff',
                        border: 'border: 1px solid #acacac;',
                        active: false
                    },

                    {
                        img: 'zheltyj.png',
                        title: 'Желтый.',
                        color: '#FFFF00',
                        border: '',
                        active: false
                    },

                    {
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },
                    {
                        img: 'chernyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
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
                        img: 'belyj.png',
                        title: 'Белый',
                        color: '#ffffff',
                        border: 'border: 1px solid #acacac;',
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
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },
                    {
                        img: 'chernyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
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
                        img: 'belyj.png',
                        title: 'Белый',
                        color: '#ffffff',
                        border: 'border: 1px solid #acacac;',
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
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },
                    {
                        img: 'chernyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
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
                        img: 'bezhevyj.png',
                        title: 'Бежевый',
                        color: '#F5F5DC',
                        border: '',
                        active: false
                    },

                    {
                        img: 'belyj.png',
                        title: 'Белый',
                        color: '#ffffff',
                        border: 'border: 1px solid #acacac;',
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
                        img: 'korichnevyj.png',
                        title: 'Коричневый',
                        color: '#964B00',
                        border: '',
                        active: false
                    },

                    {
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'oranzhevyj.png',
                        title: 'Оранжевый',
                        color: '#FFA500',
                        border: '',
                        active: false
                    },

                    {
                        img: 'salatovyj.png',
                        title: 'Салатовый',
                        color: '#99FF99',
                        border: '',
                        active: false
                    },


                    {
                        img: 'svetloseryj.png',
                        title: 'Светлосерый',
                        color: '#9C9C9C',
                        border: '',
                        active: false
                    },
                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },

                    {
                        img: 'zheltyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
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
                        img: 'bezhevyj.png',
                        title: 'Бежевый',
                        color: '#F5F5DC',
                        border: '',
                        active: false
                    },


                    {
                        img: 'krasnyj.png',
                        title: 'Красный',
                        color: '#FF0000',
                        border: '',
                        active: false
                    },

                    {
                        img: 'svetloseryj.png',
                        title: 'Светлосерый',
                        color: '#9C9C9C',
                        border: '',
                        active: false
                    },

                    {
                        img: 'seryj.png',
                        title: 'Серый',
                        color: '#808080',
                        border: '',
                        active: false
                    },
                    {
                        img: 'sinij.png',
                        title: 'Синий',
                        color: '#0000FF',
                        border: '',
                        active: false
                    },

                    {
                        img: 'chernyj.png',
                        title: 'Черный',
                        color: '#000000',
                        border: '',
                        active: false
                    },

                ]
            },

        ],


    },
    layer: 'bel.png',
    layer1: "",
    layer2: "",
    result:false,
    formData:{
        build:{
            title:'Основа',
            val: 'Белый'
        },
        Otstrochka:{
            title:'Отстрочка',
            val: 'Не вырабана'
        },
        Vstavka:{
            title:'Вставка',
            val: 'Не вырабана'
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
                state.layer = state.constr.build[index].img;
                state.formData.build.val=state.constr.build[index].title;
            } else {
                state.constr[name][index].active = false
            }
        }
    },
    activeoption(state, ob) {
        let name = ob.name,
            k = ob.k,
            key = ob.key;
        if (state.constr[name][key].items[k].active) return false;
        state.isLoad = false;
        for (let index = 0; index < state.constr[name].length; index++) {
            for (let i = 0; i < state.constr[name][index].items.length; i++) {
                const element = state.constr[name][index].items[i];
                element.active = false;
            }
        }
        state.constr[name][key].items[k].active = true;
        state[state.constr[name][key].layer] = state.constr[name][key].path + state.constr[name][key].items[k].img;

        console.log(state.constr[name][key])
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

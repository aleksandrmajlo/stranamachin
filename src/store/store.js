import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    models: [],
    activeMarka: false,
    activeModel: false,

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
        'Зеленый': 'zelenyj.png',
    },
    constr: {
        build: [{
                title: 'Черный',
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
        Vstavka: [{
                title: 'Кожа перфорированная',
                path: '/Vstavka/kozha/',
                layer: 'layer2',
                items: [{
                        title: 'Черный',
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
                items: [{
                        title: 'Черный',
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
                path: '/Vstavka/Alkantara/',
                layer: 'layer2',
                items: [{
                        title: 'Черный',
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
                items: [{
                        title: 'Черный',
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
        Bokovaia: [{
            title: 'Кожа',
            path: '/Bokovaia/kozha/',
            layer: 'layer4',
            items: [

                {
                    title: 'Черный',
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
        }, ],
        Dizain: [{
                title: 'Не выбран',
                active: true
            },

            {
                title: 'Отрезной верх и низ кожа',
                path: '/Dizain/kozha/',
                layer: 'layer3',
                active: false,
                items: [

                ]
            },
            {
                title: 'Майка кожа',
                path: '/Dizain/Maika/',
                layer: 'layer3',
                active: false,
                items: [
                ]
            },


        ],
        RisunokSotu: {
            titleGroup: 'Соты',
            layer: 'layer5',
            itemsGroup: [

                {
                    title: '1',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/sota/1/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/sota/1/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },


                {
                    title: '2',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/sota/2/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/sota/2/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },

                {
                    title: '3',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/sota/3/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/sota/3/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },

                {
                    title: '19',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/sota/19/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/sota/19/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },


            ]
        },
        RisunokRomb: {
            titleGroup: 'Ромб',
            layer: 'layer5',
            itemsGroup: [{
                    title: '5',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/Romb/5/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/Romb/5/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },
                {
                    title: '6',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/Romb/6/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/Romb/6/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },
                {
                    title: '7',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/Romb/7/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/Romb/7/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },
                {
                    title: '9',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/Romb/9/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/Romb/9/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },
                {
                    title: '10',
                    items: [{
                            name: "Отрезной",
                            path: '/Risunok/Romb/10/otr/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },
                        {
                            name: "Цельный",
                            path: '/Risunok/Romb/10/cel/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        }
                    ]
                },
            ]
        },
        RisunokClassic: {
            titleGroup: 'Классика',
            layer: 'layer5',
            itemsGroup: [{
                    title: '11',
                    items: [{
                            name: "",
                            path: '/Risunok/Classic/11/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },

                    ]
                },
                {
                    title: '12',
                    items: [{
                            name: "",
                            path: '/Risunok/Classic/12/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },

                    ]
                },
                {
                    title: '14',
                    items: [{
                            name: "",
                            path: '/Risunok/Classic/14/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },

                    ]
                },
                {
                    title: '17',
                    items: [{
                            name: "",
                            path: '/Risunok/Classic/17/',
                            innerItems: [

                                {
                                    title: 'Черный',
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
                                    title: 'Желтый',
                                    active: false
                                },

                            ]
                        },

                    ]
                },

            ]
        },
        Otstrochka: [{
            title: 'Одинарная',
            path: '/Otstrochka/Odinarnaia/',
            layer: 'layer1',
            items: [{
                    title: 'Черный',
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
        }, ],
    },


    layer: 'belyj.png',
    layer1: "", //Otstrochka
    layer2: "",
    layer3: "", //Dizain
    layer4: "", //Боковая
    layer5: "", // для рисунка
    result: false,
    formData: {
        build: {
            title: 'Основа',
            val: 'Белый',
            key: false
        },
        Vstavka: {
            title: 'Центральная часть',
            val: 'Не выбрана',
            key: false
        },
        Dizain: {
            title: 'Дизайн',
            val: 'Не выбран',
            key: false
        },
        Bokovaia: {
            title: 'Боковая часть',
            val: 'Не выбрана',
            key: false
        },
        RisunokSotu: {
            title: 'Рисунок соты',
            val: 'Не выбран',
            key: false
        },
        RisunokRomb: {
            title: 'Рисунок ромб',
            val: 'Не выбран',
            key: false
        },
        RisunokClassic: {
            title: 'Рисунок классика',
            val: 'Не выбран',
            key: false
        },
        Otstrochka: {
            title: 'Отстрочка',
            val: 'Не выбрана',
            key: false
        },


    },

    isLoad: false,
    isFlip: false

}


const mutations = {
    // загрузка json
    setData(state, data) {
        state.models = data.models;
    },
    //установка активной марки
    setMarka(state, index) {
        state.activeMarka = index;
        state.activeModel = false;
    },
    //установка активной мoдели
    setModel(state, index) {
        state.activeModel = index;
    },
    // установка активной основы
    activeBuild(state, ob) {
        let name = ob.name,
            key = ob.key;
        if (state.constr[name][key].active) return false;
        for (let index = 0; index < state.constr[name].length; index++) {
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
    // установка активного слоя для типа селект
    activeOption(state, ob) {
        let name = ob.name,
            k = ob.k,
            key = ob.key;
        // повторный клик
        if (state.constr[name][key].items[k].active) {
            state.constr[name][key].items[k].active = false;
            state[state.constr[name][key].layer] = "";
            state.formData[name].val = 'Не выбран';
            state.formData[name].key = false;
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
        state.formData[name].val = state.constr[name][key].title + "  " + state.constr[name][key].items[k].title;
        state.formData[name].key = key;
    },
    // установка активной соты ...
    activeSotu(state, ob) {
        let name = ob.name,
            k = ob.k,
            activeIndex = ob.activeIndex,
            key = ob.key;
        let th = state.constr[name].itemsGroup[activeIndex].items[key].innerItems[k];
        // повторный клик 
        if (th.active) {
            state.constr[name].itemsGroup[activeIndex].items[key].innerItems[k].active = false;
            state.formData[name].val = "не выбрано";
            state[state.constr[name].layer] = "";
            return;
        }
        state.isLoad = false;
        this.commit('clearActiveSotu');

        state.constr[name].itemsGroup[activeIndex].items[key].innerItems[k].active = true;
        state[state.constr[name].layer] = state.constr[name].itemsGroup[activeIndex].items[key].path + state.photo_name[state.constr[name].itemsGroup[activeIndex].items[key].innerItems[k].title];
        state.formData[name].val = state.constr[name].titleGroup + " / " +
            state.constr[name].itemsGroup[activeIndex].title +
            " / " + state.constr[name].itemsGroup[activeIndex].items[key].innerItems[k].title;

    },
    // удаление активноой соты при переключении между 1 2 
    clearActiveSotu(state) {
        let ar = ['RisunokSotu', 'RisunokRomb', 'RisunokClassic'];
        ar.forEach(name => {
            state.formData[name].val = "не выбрано";
            state[state.constr[name].layer] = "";
            state.constr[name].itemsGroup.forEach(element => {
                const items = element.items;
                for (let index = 0; index < items.length; index++) {
                    const innerItems = items[index].innerItems;
                    for (let ind = 0; ind < innerItems.length; ind++) {
                        const el2 = innerItems[ind];
                        el2.active = false;
                    }
                }
            });
        });
    },
    setLoadimg(state) {
        state.isLoad = true;
    },
    setLoadimgFalse(state) {
        state.isLoad = false;
    },
    setFlip(state) {
        state.isFlip = !state.isFlip;
    },
    // устанавливаем активный индекс дизайна
    setDizainActive(state, val) {
        state.constr.Dizain.forEach(element => {
            element.active = false;
        });
        state.constr.Dizain[val].active = true;
        this.commit('setDizainItems');
    },
    // добавление значений в дизайн
    setDizainItems(state) {
        let activeBokovaia = false;
        state.constr.Bokovaia[0].items.forEach((element, index) => {
            if (element.active) {
                state.constr.Dizain.forEach((el, ind) => {
                    el.items = [];
                    if (el.active && ind !== 0) {
                        activeBokovaia = true;
                        el.items.push({
                            title: element.title,
                            active: false
                        });
                        this.commit('activeOption', {
                            name: "Dizain",
                            key: ind,
                            k: 0
                        })
                    }

                });
            }
        });
        // если нет активной боковой- то обнуляем и дизайн
        if (!activeBokovaia) {
            state.constr.Dizain.forEach((el, ind) => {
                el.items = [];
            })
            state.layer3 = "";
            state.formData.Dizain.val = "Не выбран";
            state.formData.Dizain.key = false;
        }
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
const getters = {
    Total(state) {
        if ((state.activeMarka || state.activeMarka === 0) && state.activeMarka !== -1 && (state.activeModel || state.activeModel === 0) && state.activeModel !== -1) {
            let item = state.models[state.activeMarka].items[state.activeModel],
                key = state.formData.Vstavka.key;
            if (key === 0) {
                return item.Ekokozha;
            } else if (key == 1) {
                return item.Veliur_zhakkard;
            } else if (key == 2) {
                return item.Ekokozha_alkantara;
            } else if (key == 3) {
                return item.Veliur_zhakkard;
            } else {
                return item.Veliur_zhakkard;
            }
        } else {
            return 0;
        }
    },

}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
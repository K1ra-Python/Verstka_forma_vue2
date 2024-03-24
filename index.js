Vue.use(VeeValidate); // good to go.
var app = new Vue({
    el: '#app',
    data: {
        isVisible: false,
        isVisibleDoctor: false,
        activeForma: 'you',
        activeButtonStyles:{
            you:false,
            adress: false,
            passport: false,
        },
        changeActiveButton: {
            'border-bottom':'none',
            'width': '231px',
            'height': '75px',
        },
        selectedOptions: []
    },
    methods: {
        switchForma(formName) {
            this.activeForma = formName
        },
        selectStyle(buttonKey){
            for(let key in this.activeButtonStyles){
                this.activeButtonStyles[key] = false
            }
            this.activeButtonStyles[buttonKey] = true
        }
    },
    computed: {
        selectedLabels() {
            return this.selectedOptions.join(', ')
        }
    }
});
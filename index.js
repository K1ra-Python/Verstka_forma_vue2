import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate); // good to go.
var app = new Vue({
    el: '#app',
    data: {
        isVisible: false,
        isVisibleDoctor: false,
        activeForma: 'you',
        activeButtonStyles: {
            you: true,
            adress: false,
            passport: false,
        },
        changeActiveButton: {
            'border-bottom':'none',
            'height': '75px',
        },
        selectedOptions: []
    },
    methods: {
        switchForma(formName) {
            this.activeForma = formName
        },
        selectStyle(buttonKey) {
            for (let key in this.activeButtonStyles) {
                this.activeButtonStyles[key] = false
            }
            this.activeButtonStyles[buttonKey] = true
        },
        validateForm(scope) {
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    // eslint-disable-next-line
                    alert('Форма успешно заполнена и все важные поля заполнены!!');
                }
            });
        }
    },
    computed: {
        selectedLabels() {
            return this.selectedOptions.join(', ')
        }
    },
    mounted() {
        Validator.localize('ru', ru);
    }
});
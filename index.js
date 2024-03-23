
var app = new Vue({
    el: '#app',
    data: {
        isVisible: false,
        isVisibleDoctor: false,
        selectedOptions: []
    },
    computed: {
        selectedLabels() {
            return this.selectedOptions.join(', ')
        }
    }
});
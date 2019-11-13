Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        list: [
            {id: 0, text: 'tomate'},
            {id: 1, text: "laranja"},
            {id: 2, text: "ovos"},
            {id: 3, text: "my ovos"},
            {id: 4, text: "mi cohones"},
            {id: 5, text: "meus eggs"}

        ]
    }
});

import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(element, binding, vnode){

        let current = 0;
        element.addEventListener('dblclick', function(){
            current += 90;
            element.style.transform = `rotate(${current}deg)`;
        });
    }
});
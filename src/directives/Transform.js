import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(element, binding, vnode){

        let current = 0;
        element.addEventListener('dblclick', function(){

            let incremento = binding.value || 90;
                        
            current += incremento;

            element.style.transform = `rotate(${current}deg)`;

            //testando se ha o modifier 'animate'
            if(binding.modifiers.animate) element.style.transition = 'transform 0.5s';

        });
    }
});
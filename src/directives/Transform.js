import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(element, binding, vnode){

        let current = 0;
        element.addEventListener('dblclick', function(){

            let incremento = 90;
            let animate = false;

            if(binding.value){
                incremento = binding.value.incremento;
                animate = binding.value.animate;
            }
            
            current += incremento;

            element.style.transform = `rotate(${current}deg)`;

            if(animate) element.style.transition = 'transform 0.5s';

        });
    }
});
export default {

    bind(element, binding, vnode){

        let current = 0;
        element.addEventListener('dblclick', function(){

            let incremento = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate'){
                if(binding.modifiers.reverse){
                    current -= incremento;
                } else {
                    current += incremento;
                }
                efeito = `rotate(${current}deg)`;
            } else if(binding.arg == 'scale') {
                efeito = `scale(${incremento})`;
            }
                
            element.style.transform = efeito;

            //testando se ha o modifier 'animate'
            if(binding.modifiers.animate) element.style.transition = 'transform 0.5s';

        });
    }
};
<template>
    <div>
        <app-contador/>
        <app-contador/>
        <app-contador/>
    </div>
</template>

<script>

import AppContador from './AppContador.vue'

export default {
    // pascal case é normalmente convertido para kebab-case nos templates
    // assim podemos definir o componente como Pascal normalmente 
    // o template no arquivo do mesmo componente podemos usar kebab ou pascal case 
    // no entanto se o componente for definido como kebab-case não será possível usar o pascal case
    // o pascal é convertido no kebab, o contrário não acontece 
    // já no DOM final no html o pascal não funciona, se formos escrever nele 
    // devemos colocar kebab-case obrigatoriamente   
    components: {
        AppContador
    }
}
</script>
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
    components: {
        'app-contador': AppContador
    }
}
</script>
<template>
    <li class="list-group-item">
        <span>{{movieTitle}}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props : [
        'movieTitle'
    ]
}
</script>
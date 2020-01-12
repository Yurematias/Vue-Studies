<template>
    <div>
        <h2>Filme selecionado</h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{selectedMovie}}</h5>
                <button class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        selectedMovie: String
    }
}
</script>
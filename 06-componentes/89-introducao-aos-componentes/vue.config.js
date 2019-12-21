module.exports = {
    // para habilitar os templates é preciso habilitar o compilador Vue 
    // normalmente o vue runtime não vem com o compilador 
    // para habilitar há duas formas...
    // runTimeCompiller: true
    runtimeCompiler: process.env.NODE_ENV !== 'production'
};
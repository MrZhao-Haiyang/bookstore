<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
        <div class="navbar navbar-inverse">
            <div class="container">
                <div class="container-fluid">
                    <a class="navbar-brand">BookStore</a>
                    <ul class="navbar-nav nav">
                    <li><router-link to="/list">图书列表</router-link></li>
                    <li><router-link to="/add">添加图书</router-link></li>
                </ul>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>

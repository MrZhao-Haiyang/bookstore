<template>
    <div>
        <div class="col-md-3" v-for="book in books">
            <div class="panel panel-warning">
                <div class="panel-heading text-center">
                    {{book.bookName}}
                </div>
                <div class="panel-body  text-center">
                    <img :src="book.bookCover" alt="">
                </div>
                <div class="panel-footer">
                    价格：{{book.bookPrice | currency("￥")}}
                    <router-link :to="{name:'Detail',params:{id:book.id}}">查看详情</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        filters:{
            currency(input,param1){
                return param1+input;
            }
        },
        data(){
            return {books:[]}
        },
        components: {},
        methods: {},
        created(){
            this.$http.get("/book").then(res=>{
                this.books=res.body;
            });
        }
    }
</script>
<style scoped>
img {
    width: 150px;
    height:200px;
}
</style>

<template>
    <div>
        <div class="panel panel-warning">
            <div class="panel-heading text-center">
                {{book.bookName}}
                <input type="text" v-model="book.bookName" v-show="flag">
            </div>
            <div class="panel-body  text-center">
                <img :src="book.bookCover" alt="">
            </div>
            <div class="panel-footer">
                价格：{{book.bookPrice | currency("￥")}}
                <input type="text" v-model="book.bookPrice" v-show="flag">
                <button type="button" class="btn btn-danger" @click="remove" v-show="!flag">删除</button>
                <button type="button" class="btn btn-warning" @click="change" v-show="!flag">修改</button>
                <button type="button" class="btn btn-success" @click="confirm" v-show="flag">确认修改</button>
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
            return {
                book:{
                    bookName:'',
                    bookCover:'',
                    bookPrice:''
                },
                id:"",
                flag:false
            }
        },
        components: {},
        methods: {
            change(){
                this.flag=!this.flag;
            },
            remove(){
                this.$http.delete("/book?id="+this.id).then(res=>{
                    this.$router.push("/list");
                })
            },
            confirm(){
                this.$http.put("/book?id="+this.id,this.book).then(res=>{
                    this.$router.push("/list");
                })
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.$http.get("/book?id="+this.id).then(res=>{
                this.book=res.body;
            })
        }
    }
</script>
<style scoped>
    img {
        width: 150px;
        height:200px;
    }
</style>

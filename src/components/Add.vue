<template>
    <div>
        <form>
            <div class="form-group">
                <label for="bookName" class="control-label">书名</label>
                <input type="text" id="bookName" class="form-control" name="bookName" autocomplete="off" placeholder="请输入书名" v-model="book.bookName">
            </div>
            <div class="form-group">
                <label for="bookCover" class="control-label">封面</label>
                <input type="text" id="bookCover" class="form-control" name="bookCover" autocomplete="off" placeholder="请输入封面地址" v-model="book.bookCover">
            </div>
            <div class="form-group">
                <label for="bookPrice" class="control-label">价格</label>
                <input type="text" id="bookPrice" class="form-control" name="bookPrice" autocomplete="off" placeholder="请输入价格" v-model="book.bookPrice">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-success" @click="add">添加图书</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                book:{
                    bookName:'',
                    bookCover:'',
                    bookPrice:''
                },
                id:""
            }
        },
        components: {},
        methods: {
            add(){
                this.id=this.$route.params.id;
                this.$http.post("/book?id="+this.id,this.book).then(res=>{
                    this.$router.push("/list");
                })
            }
        }
    }
</script>
<style scoped>

</style>

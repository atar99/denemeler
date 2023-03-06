<template>
    <h1>İsim</h1>
    <input v-model="isim" type="text" placeholder="İSİM GİRİN">
    <h1>şifre</h1>
    <input v-model="sifre" type="password" name="" id="">
    <h1>tarih</h1>
    <input v-model="tarih" type="date" name="" id="">
    <h1>resim</h1>
    <input v-model="resim" type="text" src="" alt="">
    <button type="submit" @click="bitir()">Bitir</button>
    

</template>

<script>



export default{
    data(){
 return{
 }
    },
    methods:{
        
        bitir(){

            const newUser={
                    isim:this.isim,
                    sifre:this.sifre,
                    tarih:this.tarih,
                    resim:this.resim,
                }
                this.user.push(newUser);
                console.log(this.user);
}
    },
    props:{
        user:Array,
    }


}
</script>
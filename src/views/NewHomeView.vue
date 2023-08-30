<template>
    <div>
        <div>
            <h1>New Home</h1>
        </div>
        <TestVue food="魷魚"/>
        <TestVue food="玉米"/>
        <TestVue food="鮭魚"/>
        <div>--------</div>
        <template v-for="(food, index) in foodArray" :key="food + index">
            <TestVue :food="food" @choose="chosen"/>
        </template>
        <button @click="foodArray[0] = '響食天堂'">變</button>
        <div>
            我選了
            <div v-for="item in list" :key="item">
                {{ item }}
            </div>  
            當我今晚要吃什麼的選項  
        </div>
        <div>--------</div>
        <TestVue :food="'鱈魚'" ref="foodTest"/>
        <button @click="getRef">鱈魚</button>
        <div>{{ fish }}</div>
    </div>
</template>

<script>
import TestVue from "@/components/Test.vue";
export default {
    name: "NewHomeView",
    components: {
        TestVue,
    },
    data() {
        return {
            foodArray:["飯糰","麻辣鍋","饗饗","橘色"],
            list:[],
            fish:''
        }
    },
    methods: {
        chosen(arry){
            // 解構賦值
            let [food,amount] = arry;
            this.list.push(food + amount);
        },
        getRef(){
            console.log(this.$refs.foodTest.food);
            this.fish = this.$refs.foodTest.food;
        }
    },
    watch: {
        list:{
            handler: function(newVal){
                if(newVal.length > 2){
                    alert('吃太多囉')
                }
            },
            // deep: false 的話 除非型態從 array 改變成別的型態 如string 才會觸發
            deep: true, // deep:true 才會偵測到 array 裡面有改變
        }
    }
};
</script>

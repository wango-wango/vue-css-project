<template>
  <div>
    <span>{{ food }}</span>
    <span>{{ amount }}</span>
    <button @click="clickHandler()">選我</button>
  </div>
</template>

<script>

export default {
  name: 'testView',
  props:{
    food: String,
  },
  data() {
    return {
      localFood: '飯糰'
    }
  },
  computed: {
    amount(){
      return this.food.length ** 3;
    }
  },
  methods: {
    clickHandler(){
      alert(this.food);
      this.$emit('choose',[this.food,this.amount]);
    }
  },
}
</script>

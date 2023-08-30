<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ name }}</div>
    <div>{{ a.name }}</div>
    <input type="text" :value="name" @input="name = $event.target.value">
    <input type="text" v-model="name">
    <!-- .lazy 在onChange 的時候觸發 -->
    <input type="text" v-model.lazy="name">
    <!-- prevent 阻擋原先的事件, stop 阻擋冒泡事件 -->
    <div @click="name = '123456'">
      <a href="http://google.com" @click.prevent.stop>google</a>
    </div>
    <div>{{ array }}</div>
    <div v-for="(item, index) in array" :key="item + index">
      <span>{{ item }}</span>
      |
      <span>{{ index }}</span>
    </div>
    <br>
    <div v-for="(value, key) in object" :key="value + key">
      <span>{{ value }}</span>
      |
      <span>{{ key }}</span>
    </div>
    <button @click="visible=!visible">開開關關</button>
    <div v-show="visible">跳</div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      visible: true,
      name: "abcdefg",
      a: {
        name: 'ccc'
      },
      array: [... new Array(10)].map((_, i) => i),
      object: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  },
  methods: {

  },
}
</script>
<template>
  <div>
      <button class="h-btn" @click="open(false)">Js打开弹出框</button>
      <button class="h-btn" @click="openModal = true">Vue打开弹出框</button>
      <Modal v-model="openModal">
        <ModalTest param2="test" :params="{a: 'test1'}" @close="openModal=false" @event="event"></ModalTest>
      </Modal>
  </div>
</template>

<script>
import ModalTest from './modalTest';

export default {
  components: {
    ModalTest
  },
  data() {
    return {
      openModal: false
    }
  },
  methods: {
    event(type, data) {
      this.$Message(data);
    },
    open() {
      let that = this;
      this.$Modal({
        component: {
          // 这里也可以定义异步调用
          // vue: (resolve) => {
          //   require(['./modalTest'], resolve);
          // },
          vue: ModalTest,
          data: { a: 'test1' }, // 子组件使用props params参数获取数据，建议使用datas
          datas: { param2: 'test2' } // 子组件直接使用 props 即可使用，兼容性 1.5.0+
        },
        events: {
          fromchildevent:(modal, data)=>{
            this.$Message(data);
          }
        }
      });
    }
  }
}
</script>
<template>
  <layout>
    <template v-slot:header>
      <van-nav-bar title="我的" />
    </template>
    <van-tabs
      v-model="active"
      color="#07c160"
      :animated="true"
      :swipeable="true"
    >
      <van-tab title="关于">
        <section class="content flex-xy-center">vue3 项目脚手架</section>
      </van-tab>
      <van-tab title="测试hooks">
        <section class="content flex-xy-center">
          <div class="box">
            <div style="margin-bottom: 40px">
              <template v-if="base64Img">
                <van-image width="100" height="100" :src="base64Img" />
              </template>
            </div>
            <div class="flex-xy-center">
              <van-button plain type="primary" @click="photograph"
                >点击按钮</van-button
              >
            </div>
          </div>
        </section>
      </van-tab>
      <van-tab title="VUEX">
        <section class="content">
          <van-cell-group>
            <van-cell title="昵称" :value="about.name" />
            <van-cell title="地址" :value="about.local" />
            <van-cell title="爱好">
              <van-tag
                type="primary"
                v-for="(vo, index) in about.likes"
                :key="index"
                >{{ vo }}</van-tag
              >
            </van-cell>
          </van-cell-group>
        </section>

        <section class="content">
          <div class="flex-xy-center">
            <p class="label">{{ num }}</p>
          </div>
          <div class="flex-xy-center">
            <van-button
              plain
              type="primary"
              @click="addNum(Math.floor(Math.random() * 100))"
              >点击生成随机数</van-button
            >
          </div>
        </section>
      </van-tab>
    </van-tabs>
    <template v-slot:footer>
      <base-tabbar active="mine" />
    </template>
  </layout>
</template>

<script lang="ts">
interface StateProps {
  active: number;
  color: string;
}
import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
import { useStore } from "vuex";
import usePhotographClick from "../../hooks/usePhotographClick";
import BaseTabbar from "../../components/BaseTabbar.vue";
export default defineComponent({
  name: "Mine",
  components: {
    BaseTabbar,
  },
  setup() {
    const store = useStore();
    const state: StateProps = reactive({
      active: 0,
      color: "blue",
    });

    const { base64Img, photograph } = usePhotographClick();
    const reqAbout = () => store.commit("SET_ABOUT_MUTATION");

    const num = computed(() => {
      return store.state.num;
    });

    const addNum = (payload: number) => {
      if (payload > 20) {
        state.color = "red";
      } else {
        state.color = "blue";
      }
      store.commit("SET_ADDNUM_MUTATION", payload);
    };

    const about = computed(() => {
      return store.state.about;
    });

    onMounted(() => {
      reqAbout();
    });

    return {
      about,
      num,
      addNum,
      base64Img,
      photograph,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.content {
  padding: 30px;
}
.label {
  font-size: 0.75rem;
  color: v-bind("color");
}
</style>

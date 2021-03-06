<template>
	<layout>
		<template v-slot:header>
			<van-nav-bar title="产品" />
		</template>
		<template v-if="skeletonShow">
			<base-skeleton v-for="item in 3" :key="item"></base-skeleton>
		</template>
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
			<van-list v-model:loading="loading" :finished="finished" :immediate-check="false" finished-text="没有更多了" @load="onLoad">
				<van-cell to="show" v-for="(vo, index) in dataList" :key="index" :title="vo.title" :value="vo.date" :label="vo.description"></van-cell>
			</van-list>
		</van-pull-refresh>
		<template v-slot:footer>
			<base-tabbar active="products" />
		</template>
	</layout>
</template>

<script lang="ts">
interface StateProps {
	refreshing: boolean
	skeletonShow: boolean
	dataList: string[]
	loading: boolean
	finished: boolean
	page: number
	limit: number
}
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import BaseTabbar from '../../components/BaseTabbar.vue'
import BaseSkeleton from '../../components/BaseSkeleton.vue'
import { reqProduct } from '../../api/index'
export default defineComponent({
	name: 'Products',
	components: {
		BaseTabbar,
		BaseSkeleton,
	},
	setup() {
		const state: StateProps = reactive({
			refreshing: false,
			skeletonShow: true, //骨架图显示状态
			dataList: [], //数据列表
			loading: false, //加载状态
			finished: false, //是否加载下一页
			page: 1, //页码
			limit: 10, //页码
		})

		const onLoad = async () => {
			if (state.refreshing) {
				state.refreshing = false
			}
			await reqProduct({})
				.then((result: any) => {
					if (state.skeletonShow) state.skeletonShow = false
					state.loading = false
					if (state.page === 3) {
						state.finished = true
					} else {
						state.page++
					}
					state.dataList = state.dataList.concat(result.data.list)
				})
				.catch((error: any) => {
					console.log(error)
					state.loading = false
				})
		}
		const onRefresh = () => {
			// 清空列表数据
			state.finished = false
			// 重新加载数据
			// 将 loading 设置为 true，表示处于加载状态
			state.loading = true
			state.page = 1
			state.dataList = []
			setTimeout(() => {
				onLoad()
			}, 1000)
		}
		onMounted(() => {
			onLoad()
		})
		return {
			onLoad,
			onRefresh,
			...toRefs(state),
		}
	},
})
</script>

<style lang="less" scoped></style>

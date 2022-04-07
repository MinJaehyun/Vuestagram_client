<template>
	<div class="post">
		<!-- post-header -->
		<div class="post-header">
			<div
				class="profile"
				:style="{ backgroundImage: `url(${post.userImage})` }"
			></div>
			<span class="profile-name">
				<strong>{{ post.name }}</strong>
			</span>
		</div>
		<div
			:class="post.filter + ' post-body'"
			:style="{ backgroundImage: `url(${post.postImage})` }"
			@click="$store.commit('likesUpButton', post)"
		></div>
		<!-- post-content -->
		<div class="post-content">
			<div
				style="cursor: pointer"
				@click="$store.commit('likesUpButton', post)"
			>
				<!-- '좋아요' 상태이면 하트를 보여주고, 아니면 빈하트 설정 -->
				<p v-if="!$store.state.like" style="margin-bottom: 0px">
					<ion-icon name="heart-outline"></ion-icon>
				</p>
				<p v-else style="margin-bottom: 0px">
					<ion-icon name="heart"></ion-icon>
				</p>
			</div>
			<p>{{ post.likes }} Likes</p>
			<p class="date">{{ post.date }}</p>
			<p>{{ post.content }}</p>
			<p class="gradient">{{ post.tag }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Post',
	props: {
		post: Object,
	},
};
</script>
<style>
@import '../assets/css/gradient.css';
@import '../assets/css/post.css';
@import url('https://fonts.googleapis.com/css2?family=Allura&family=Source+Sans+Pro&display=swap');
</style>

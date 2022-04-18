<template>
  <!-- ul>li>div 로 감싸고, class 입히기 -->
  <li>
    <div class="post-title">
      {{ post.title }}
    </div>
    <div class="post-contents">
      {{ post.contents }}
    </div>
    <div>
      <div class="post-createdBy">
        {{ $store.state.username }}
      </div>
      <div class="post-created_at">
        {{ post.created_at }}
        <!-- icon -->
        <ion-icon name="create-sharp" style="padding: 0px 12px; color: black"></ion-icon>
        <ion-icon
          name="trash-outline"
          style="color: black"
          @click="deleteItem"
        ></ion-icon>
      </div>
    </div>
  </li>
</template>

<script>
import { postDelete } from '@/api/posts';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      try {
        if (confirm('You wanna to delete it?')) {
          const { data } = await postDelete(this.post._id);
          this.$emit('refresh');
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
@import '../../assets/css/common.css';
</style>

<template>
  <div>
    <main-header navsel="front"></main-header>
    <div v-if="blog">
      <div class="hero-wrapper">
      <img src="@/assets/van2.png" class="logo" style="float: left" width="210" height="200"/>
      <h1>แนะที่ท่องเที่ยว </h1>
      <p>By 3ST</p>
      </div>
      <div class="blog-wrapper" v-if="blog != null">
        <h1>{{ blog.title }}</h1>
        <p>
          <strong>Category: </strong>:
          <a href="#" v-on:click.prevent="navigateTo(`/front?search=${blog.category}`)">{{ blog.category }}</a>
        </p>
        <div class="content" v-html="blog.content"></div>
        <!-- <p>category: {{ blog.category }}</p>
<p>status: {{ blog.status }}</p> -->
      </div>
      <div class="back-nav">
        <button class="btn btn-success" v-on:click="navigateTo('/front')">
          <i class="fas fa-arrow-left"></i>Back..
        </button>
      </div>
      <comment-comp v-bind:blogid="blog.id" v-bind:user="user"></comment-comp>
      <transition name="fade">
        <div v-if="resultUpdated != ''" class="popup-msg">
          <p>{{ resultUpdated }}</p>
        </div>
      </transition>
      <br />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BlogsService from "@/services/BlogsService";
import UsersService from "@/services/UsersService";
import CommentComp from "@/components/Fronts/Comment";
export default {
  data() {
    return {
      blog: null,
      users: null,
    };
  },
  components: {
    CommentComp,
  },
  async created() {
    // get blog
    // check permission first
    try {
      let blogId = this.$route.params.blogId;
      this.blog = (await BlogsService.show(blogId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"]),
  },
};
</script>
<style scoped>
  .hero-wrapper {
  margin-top: 80px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #ADBED2;
  height: 250px;
  color: white;
  padding: 20px;
}
.hero h1 {
  margin-top: 30px;
}
.blog-wrapper {
  margin-top: 20px;
  padding: 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.back-nav {
  margin-top: 20px;
  text-align: center;
}
.blog-wrapper h1 {
  text-align: center;
  font-family: "kanit";
  padding-bottom: 50px;
}
.blog-wrapper p {
  font-family: "kanit";
  font-size: 1.4em;
  padding-bottom: 20px;
}
.blog-wrapper .content {
  font-family: "kanit";
  font-size: 1.2em;
}
</style>
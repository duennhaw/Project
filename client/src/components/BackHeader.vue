<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/van2.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
       <span class="font1">ระบบจองตั๋วรถตู้</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'blogs' }"><span style="color: #ffffff">บล็อคท่องเที่ยว</span></router-link>
          </li>&nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <router-link :to="{ name: 'users' }"><span style="color: #ffffff">จำนวนผู้ใช้</span></router-link>
          </li>&nbsp;&nbsp;&nbsp;
          
          <li class="nav-item">
            <router-link :to="{ name: 'comments' }"><span style="color: #ffffff">ความคิดเห็นผู้เข้าชม </span></router-link>
          </li>&nbsp;&nbsp;&nbsp;
         <li class="nav-item">
            <router-link :to="{ name: 'bookinlover' }"><span style="color: #ffffff">ดูข้อมูลการจอง</span></router-link>
          </li>&nbsp;&nbsp;&nbsp;

          

      
          <li class="nav-item">
            <a v-on:click.prevent="logout" href="#"><span style="color: #ffffff">ออกจากระบบ</span></a>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.bg-light {
    background-color:#6C838B!important;
}
</style>
<template>
  <div>
    <main-header navsel="back"></main-header>
    <h2>Get all bookings</h2>
    <h4>จำนวนผู้ใช้งาน {{ bookings.length }}</h4>
    <div class="shadow-lg p-3 mb-5 bg-white rounded">
    <p>
      <button v-on:click="navigateTo('/booking/create')">ข้อมูลผู้ใช้</button>
    </p>

    <div v-for="booking in bookings" v-bind:key="booking.id">
      <p>ชื่อ : {{ booking.name }} </p>
      <p>นามสกุล: {{ booking.lastname }}</p>
      <p>เบอร์โทรศัพท์: {{ booking.tel }}</p>
      <p>รอบ: {{ booking.rond }}</p>
      <p>วันที่: {{ booking.date }}</p>
      <p>จุดหมาย: {{ booking.destination }}</p>
      <p>จำนวนคน: {{ booking.people }}</p>
      <p>ที่นั่ง: {{ booking.seat }}</p>
   
      <p><button v-on:click="logout">Logout</button></p>
      <hr class="shadow-lg p-3 mb-5 bg-white rounded">
    </div>
    </div>
  </div>
</template>
<script>
import BookingService from "@/services/BookingService";

export default {
  data() {
    return {
      bookings: [],
    };
  },
  async created() {
    this.bookings = (await BookingService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setBooking", null);
      this.$router.push({
        name: "login",
      });
    },
    async deleteBooking(booking) {
      try {
        await BookingService.delete(booking);
        this.refreshData();
      } catch (err) {
        console.log(err);
      }
    },
    async refreshData() {
      this.bookings = (await BookingService.index()).data;
    },
  },
};
</script>
<style scoped>
</style>
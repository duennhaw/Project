
<template>
<div>
    <main-header navsel="front"></main-header>
    <center>
    <div class="blog" align="center">
   <h1>จองตั๋วรถตู้</h1>
    <div class="shadow-lg p-3 mb-5 bg-white rounded"><div class="blog">
  <form v-on:submit.prevent="createBooking"> 
  <div class="form-row">
    <div class="col-md-5 mb-4" style="text-align:left;">
      <label for="validationCustom01">ชื่อ : </label>
      <input type="text" class="form-control" v-model="booking.name" required>
      <div class="valid-feedback">
       โปรดเลือก
      </div>
    </div>
    <div class="col-md-5 mb-4" style="text-align:left;">
      <label for="validationCustom02">นามสกุล : </label>
      <input type="text" class="form-control" v-model="booking.lastname" required>
      <div class="valid-feedback">
        โปรดเลือก
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-3 mb-3" style="text-align:left;">
      <label for="validationCustom03">โทร : </label>
      <input type="number" class="form-control" v-model="booking.tel" required>
      <div class="invalid-feedback">
        โปรดเลือก
      </div>
    </div>
    <div class="col-md-3 mb-3" style="text-align:left;">
      <label for="validationCustom04">รอบ : </label>
      <select class="custom-select" v-model="booking.rond" required>
        <option selected disabled value="">เลือก</option>
        <option>รอบ1</option>
        <option>รอบ2</option>
        <option>รอบ3</option>
        <option>รอบ4</option>
        <option>รอบ5</option>
        <option>รอบ6</option>
        <option>รอบ7</option>
        <option>รอบ8</option>
        <option>รอบ9</option>
        <option>รอบ10</option>
      </select>
      <div class="invalid-feedback">
      โปรดเลือก
      </div>
    </div>
    <div class="col-md-3 mb-3" style="text-align:left;">
      <label for="validationCustom05">วันที่ : </label>
      <input type="date" class="form-control" v-model="booking.date" required>
      <div class="invalid-feedback">
        โปรดเลือก
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-3" style="text-align:left;">
        <label for="validationCustom05">จุดหมาย : </label>
         <select class="custom-select" v-model="booking.destination" required>
        <option selected disabled value="">เลือก</option>
        <option value="สุราษฎร์ธานี-เขื่อนเชี่ยวหลาน">สุราษฎร์ธานี-เขื่อนเชี่ยวหลาน</option>
        <option value="เขื่อนเชี่ยวหลาน-สุราษฎร์ธานี">เขื่อนเชี่ยวหลาน-สุราษฎร์ธานี</option>
        <option value="สุราษฎร์ธานี-ท่าอากาศยานนานาชาติสุราษฎร์ธานี">สุราษฎร์ธานี-ท่าอากาศยานนานาชาติสุราษฎร์ธานี</option>
        <option value="เขื่อนเชี่ยวหลาน-สุราษฎร์ธานี">ท่าอากาศยานนานาชาติสุราษฎร์ธานี-สุราษฎร์ธานี</option>
        <option value="ท่าอากาศยานนานาชาติสุราษฎร์ธานี-สุราษฎร์ธานี">สุราษฎร์ธานี-อำเภอพนม</option>
        <option value="อำเภอพนม-สุราษฎร์ธานี">อำเภอพนม-สุราษฎร์ธานี</option>
        <option value="สุราษฎร์ธานี-อำเภอนาสาร">สุราษฎร์ธานี-อำเภอนาสาร</option>
        <option value="อำเภอนาสาร-สุราษฎร์ธานี">อำเภอนาสาร-สุราษฎร์ธานี</option>
        <option value="สุราษฎร์ธานี-อำเภอดอนสัก">สุราษฎร์ธานี-อำเภอดอนสัก</option>
        <option value="อำเภอดอนสัก-สุราษฎร์ธานี">อำเภอดอนสัก-สุราษฎร์ธานี</option>
      </select>
    </div>
    <div class="col-3" style="text-align:left;">
        <label for="validationCustom05">ที่นั่ง : </label>
         <select class="custom-select" v-model="booking.seat" required>
        <option selected disabled value="">เลือก</option>
        <option value="ธรรมดา 100 บาท">ธรรมดา 80 บาท</option>
        <option value="VIP 130 บาท">VIP 120 บาท</option>
      </select>
    </div>
    <div class="col-3" style="text-align:left;">
        <label for="validationCustom05">จำนวนคน : </label>
      <input type="number" class="form-control" v-model="booking.people" placeholder="">
    </div>
  </div>
  <br>
  <button class="btn btn-primary" type="submit">ยืนยัน</button>
</form>
    </div>
   </div>
    </div>
    </center>
    </div>


</template>
<script>

import BookingService from "@/services/BookingService";

export default {
  data() {
    return {
     booking: {
        name: "",
        lastname: "",
        tel: "",
        rond: "",
        date: "",
       destination: "",
        people: "",
        seat: "",
      
      },
    };
  },
  methods: {
    async createBooking() {
      try {
        await BookingService.post(this.booking);
        this.$router.push({
          name: "front",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.blog{
  padding: 2%;
  width:80%;
}
</style>

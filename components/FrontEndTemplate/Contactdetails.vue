<template>
  <div class="flex items-start mb-[50px]">
    <icon class="color" name="uil:map-marker" />
    <div>
      <h4 class="title">Address</h4>
      <span class="info-text"> Your address goes here</span>
    </div>
  </div>

  <div class="flex items-start mb-[50px]">
    <icon class="color" name="uil:phone" />
    <div>
      <h4 class="title">Contact</h4>
      <span class="info-text">Mobile:<strong>0123456789</strong></span
      ><br />
      <span class="info-text">Hotline:<strong>0123456789</strong></span
      ><br />
      <span class="info-text">Mail:<strong>demo@example.com</strong></span>
    </div>
  </div>

  <div class="flex items-start mb-[50px]">
    <icon class="color" name="uil:clock" />
    <div>
      <h4 class="title">Hour of operation</h4>
      <span class="info-text">Monday - Friday : 09:00 - 20:00</span><br />
      <span class="info-text">Sunday & Saturday : 10:30 - 32:00</span>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 15px;
  color: white;
}

.info-text {
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: #ddd;
  line-height: 30px;
}

.color {
  font-size: 32px;
  color: #20ad96;
  margin-top: 0;
  margin-right: 20px;
}
</style>
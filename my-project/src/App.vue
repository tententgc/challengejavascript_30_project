<template>
  <div id="app">
    <div class="container">
          <h2 align = "center ">limit message</h2>
    <hr>
    <div class= "input-group">
      <div class= "input-group-prepend">
        <span class="input-group-text" v-text="max-message.length">20</span>
      </div>


      
      <input type= "text" class= "form-control"  v-model="message" :maxlength="max">
    </div>
  </div>
  </div>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
      message: '',
      max : 20
    }
  }
}



</script>

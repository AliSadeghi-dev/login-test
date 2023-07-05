<template>
     <section class="container">
      <div class="loader" v-if="loading"></div>
      <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field" v-if="!reciverdCode">
          <input type="text" required v-model="phoneNumber">
          <span></span>
          <label>Phone Number</label>
        </div>
        <div class="txt_field" v-else>
          <input type="password" required v-model="code">
          <span></span>
          <label>Password</label>
        </div>
        <input class="login-btn" required value="send code" @click="getAuth" v-if="!reciverdCode">
        <input class="login-btn" value="Login" v-else @click="verify">
      </form>
    </div>
     </section>
</template>

<script src="./LoginView"></script>
<style scoped lang="css" src="./LoginView.css"></style>
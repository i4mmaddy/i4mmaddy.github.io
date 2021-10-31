const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'https://www.linkedin.com/in/m4dhavan/',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  }
})


app.mount('#app')

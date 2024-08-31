<template>
    <div class="contact-form">
        <form @submit.prevent="submitForm">
        <div class="name">
            <label for="name">Name</label>
            <div>
                <input type="text" id="name" v-model="form.name">
                <span v-if="errors.name">{{ errors.name }}</span>
            </div>
        </div>
        <div class="email">
            <label for="email">E-Mail</label>
            <div>
                <input type="email" id="email" v-model="form.email">
                <span v-if="errors.email">{{ errors.email }}</span>
            </div>
        </div>
        <div class="subject">
            <label for="subject">Subject</label>
            <div>
                <input type="text" id="subject" v-model="form.subject">
                <span v-if="errors.subject">{{ errors.subject }}</span>
            </div>
        </div>
        <div class="message">
            <label for="message">Message</label>
            <div>
                <textarea id="message" v-model="form.message"></textarea>
            <span v-if="errors.message">{{ errors.message }}</span>
        </div>
        </div>
        <div class="gradient-border">
        <button class="submit-btn" type="submit">Send Message</button>
    </div>
        </form>
    </div>
  </template>
  
<script setup>
    import { reactive, computed } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const errors = reactive({})
  
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const validateForm = () => {
    errors.name = form.name.length < 3 ? 'Name must be at least 3 characters long' : ''
    errors.email = !form.email ? 'Email is required' : !isValidEmail(form.email) ? 'Invalid email format' : ''
    errors.subject = !form.subject ? 'Subject is required' : ''
    errors.message = form.message.length < 10 ? 'Message must be at least 10 characters long' : ''
    
    return Object.values(errors).every(error => error === '')
  }
  
  const submitForm = () => {
    if (validateForm()) {
      console.log('Form submitted:', form)
      // Add your form submission logic here
    } else {
      console.log('Form has errors')
    }
  }
</script>
<style lang="scss" scoped>

input{
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.334);
    border-radius: 10px;
    background: transparent;
    color: #fdfdfd;
    padding: 20px;
    // -webkit-transition: all .4s;
    // -o-transition: all .4s;
    // transition: all .4s;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #0e0e0e inset;
    box-shadow: 0 0 0 1000px #0e0e0e inset;
    -webkit-text-fill-color: #fdfdfd;
}
textarea{
    // width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.334);

    border-radius: 10px;
    background: transparent;
    color: #fff;
    padding: 20px;
    resize: vertical;
    display: block;
    width: calc(100% - 0px) !important;
    height: 130px;
   
}
.submit-btn{
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    padding: 20px 25px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fdfdfd;
    font-size: 18px;
    font-weight: 500;
    background-color: #0e0e0e;
    border: none;
    z-index: 2;
    cursor: pointer;
    background-color: #191919;
    
    &:hover{
        background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
    }
}
.gradient-border{
    margin: 25px auto 0;
    position: relative;
    z-index: 9;
    padding: 1px;
    overflow: hidden;
    margin: 25px auto 0;
    border-radius: 12px;
    min-width: 150px;
    display: flex;
    width: fit-content;
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
        }
    .gradient-border::before {
        content: "";
        position: absolute;
        top: -100px;
        left: -190px;
        right: -190px;
        width: 230px;
        height: 250px;
        bottom: -100px;
        margin: auto;
        z-index: -1;
        // border-radius: 15px;
        background-image: conic-gradient(from 324deg, #202020 50%, #0ead69 60%, #202020, #202020);
        animation: spin-2adedd72 8s linear infinite;

    }
.contact-form{
       
    .name,
    .email,
    .subject,
    .message,
    .textarea
    {
    display: block;
    margin-bottom: 20px;
    position: relative;
    width: calc(100% - 43px);
    label{
        position: absolute;
        left: 20px;
        top: -10px;
        background-color: #0e0e0e;
        border-radius: 4px;
        padding: 0 8px;
    }
    span{
        color: crimson;
        font-size: 12px
    }
    }
}
</style>
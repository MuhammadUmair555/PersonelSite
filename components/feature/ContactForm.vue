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
        
        <MyButton buttonMargin="25px auto 0;" buttonType="submit" buttonText="Send Message " />
   
        </form>
    </div>
  </template>
  
<script setup>
    import { reactive, computed } from 'vue'
    import emailjs from 'emailjs-com';
    import MyButton from './MyButton.vue';
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
        emailjs.send('service_66tgm2b', 'template_xnuxqfq', {
            from_name: form.name,
            to_name: 'Umair',
            subject: form.subject,
            message: form.message,
            reply_to: form.email
        }, 'nJpzbX2_NqoOtAWdW')  // Ensure this is your correct EmailJS User ID
        .then((response) => {
          
            alert('Your Form is submitted!')
                
            console.log('Email successfully sent!', response.status, response.text);
            console.log('Form submitted:', subject)
            alert('Message sent successfully!');
        }, (error) => {
            console.error('Failed to send email.', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        console.log('Form has errors');
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
    font-family: "Poppins", sans-serif;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #0e0e0e inset;
    box-shadow: 0 0 0 1000px #0e0e0e inset;
    -webkit-text-fill-color: #fdfdfd;
}
textarea{
    // width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.334);
    font-family: "Poppins", sans-serif;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    padding: 20px;
    resize: vertical;
    display: block;
    width: calc(100% - 0px) !important;
    height: 130px;
   
}

.contact-form{
       
    .name,
    .email,
    .subject,
    .message,
    .textarea
    {
    font-family: "Poppins", sans-serif;
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
.dark-mode input{
    border: 1px solid #181818;
    color: #181818;
}
.dark-mode textarea{
    color: #181818;
    border: 1px solid #181818;
}
.dark-mode .contact-form{ 

    label{
        background-color: #fdfdfd;
      
    }
}
.dark-mode input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fdfdfd inset;
    box-shadow: 0 0 0 1000px #fdfdfd inset;
    -webkit-text-fill-color: #181818;
}
</style>
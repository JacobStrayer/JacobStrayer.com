<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #00b4d8;
  border-radius: 4px;
  background: #242424;
  color: #fff;
}

button {
  padding: 10px;
  background-color: #00b4d8;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>

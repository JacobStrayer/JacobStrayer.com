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
    padding: 40px;
    color: var(--color-background);
    text-align: center;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    color: var(--color-heading);
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  
  label {
    font-family: 'Roboto', sans-serif;
    color: var(--color-text);
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 2px solid var(--color-border);
    border-radius: 4px;
    background: var(--color-background-soft);
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  input:focus,
  textarea:focus {
    border-color: var(--accent-secondary);
    outline: none;
  }
  
  button {
    padding: 10px;
    background-color: var(--accent-primary);
    color: var(--vt-c-white);
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: var(--accent-hover);
  }
  </style>
  
<template>
    <div class="password-generator">
      <h2>Password Generator</h2>
      <div class="options">
        <label>
          Length:
          <input
            type="number"
            v-model="length"
            min="4"
            max="32"
            class="input"
          />
        </label>
        <label>
          <input
            type="checkbox"
            v-model="useUppercase"
          /> Uppercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            v-model="useLowercase"
          /> Lowercase Letters
        </label>
        <label>
          <input
            type="checkbox"
            v-model="useNumbers"
          /> Numbers
        </label>
        <label>
          <input
            type="checkbox"
            v-model="useSpecialChars"
          /> Special Characters
        </label>
      </div>
      <button @click="generatePassword" class="btn">Generate</button>
      <div v-if="password" class="generated-password">
        <strong>Password:</strong> {{ password }}
      </div>
      <div class="password-strength">
        Strength: {{ passwordStrength }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        length: 12,
        useUppercase: true,
        useLowercase: true,
        useNumbers: true,
        useSpecialChars: true,
        password: '',
      }
    },
    computed: {
      passwordStrength() {
        let score = 0
        if (this.useUppercase) score++
        if (this.useLowercase) score++
        if (this.useNumbers) score++
        if (this.useSpecialChars) score++
        if (this.length >= 16) score++
  
        if (score <= 2) return 'Weak'
        if (score === 3) return 'Moderate'
        return 'Strong'
      },
    },
    methods: {
      generatePassword() {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='
        let characterPool = ''
  
        if (this.useUppercase) characterPool += uppercase
        if (this.useLowercase) characterPool += lowercase
        if (this.useNumbers) characterPool += numbers
        if (this.useSpecialChars) characterPool += specialChars
  
        this.password = Array.from({ length: this.length })
          .map(() => characterPool[Math.floor(Math.random() * characterPool.length)])
          .join('')
      },
    },
  }
  </script>
  
  <style scoped>
  .password-generator {
    background-color: var(--color-background-soft);
    color: var(--color-text);
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 1rem;
  }
  
  label {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .input {
    width: 60px;
    padding: 5px;
    border: 1px solid var(--color-border-hover);
    background-color: var(--color-background);
    color: var(--color-text);
  }
  
  .generated-password {
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: var(--color-heading);
  }
  
  .password-strength {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: var(--accent-secondary);
  }
  
  .btn {
    background-color: var(--accent-primary);
    color: var(--vt-c-white);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.4s;
  }
  
  .btn:hover {
    background-color: var(--accent-hover);
  }
  </style>
  
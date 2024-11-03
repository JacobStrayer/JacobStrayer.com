<template>
    <div>
      <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const width = 750;
  const height = 750;
  
  const canvas = ref(null);
  const balls = [];
  
  function initBalls() {
    const numBalls = 5;
    for (let i = 0; i < numBalls; i++) {
      balls.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 4 - 2, // Velocity x
        vy: Math.random() * 4 - 2, // Velocity y
        radius: 10 + Math.random() * 10,
      });
    }
  }
  
  function updateBalls() {
    balls.forEach(ball => {
      // Move the ball
      ball.x += ball.vx;
      ball.y += ball.vy;
  
      // Bounce off walls
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
        ball.vx *= -1;
      }
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
        ball.vy *= -1;
      }
    });
  }
  
  function drawBalls(ctx) {
    ctx.clearRect(0, 0, width, height); // Clear the canvas
    balls.forEach(ball => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
    });
  }
  
  function animate() {
    const ctx = canvas.value.getContext('2d');
    updateBalls();
    drawBalls(ctx);
    requestAnimationFrame(animate);
  }
  
  onMounted(() => {
    initBalls();
    animate();
  });
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid black;
  }
  </style>
  
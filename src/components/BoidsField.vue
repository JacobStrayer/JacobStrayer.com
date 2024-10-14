<template>
  <canvas ref="canvasRef" class="boids-canvas"></canvas>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const canvasRef = ref(null);

class Boid {
  constructor(x, y, size) {
    this.position = { x, y };
    this.velocity = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
    this.acceleration = { x: 0, y: 0 };
    this.maxSpeed = 2;
    this.maxForce = 0.03;
    this.size = size;
  }

  update(canvasHeight, canvasWidth) {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.velocity.x = Math.max(-this.maxSpeed, Math.min(this.velocity.x, this.maxSpeed));
    this.velocity.y = Math.max(-this.maxSpeed, Math.min(this.velocity.y, this.maxSpeed));
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.acceleration.x = 0;
    this.acceleration.y = 0;

    // Screen wrapping logic: if the boid goes out of bounds, wrap it to the opposite side
    if (this.position.x > canvasWidth) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = canvasWidth;
    }

    if (this.position.y > canvasHeight) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = canvasHeight;
    }
  }

  draw(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    context.fillStyle = "#b2b2b2";
    context.fill();
  }

  applyForce(force) {
    this.acceleration.x += force.x;
    this.acceleration.y += force.y;
  }

  cohesion(boids) {
    let avgPos = { x: 0, y: 0 };
    let count = 0;
    for (let other of boids) {
      const distance = this.distance(other);
      if (other !== this && distance < 50 && other.size > this.size) {
        avgPos.x += other.position.x;
        avgPos.y += other.position.y;
        count++;
      }
    }
    if (count > 0) {
      avgPos.x /= count;
      avgPos.y /= count;
      return this.seek(avgPos);
    }
    return { x: 0, y: 0 };
  }

  distance(other) {
    return Math.sqrt(
      Math.pow(this.position.x - other.position.x, 2) + Math.pow(this.position.y - other.position.y, 2)
    );
  }

  seek(target) {
    const desired = {
      x: target.x - this.position.x,
      y: target.y - this.position.y,
    };
    const mag = Math.sqrt(desired.x * desired.x + desired.y * desired.y);
    desired.x = (desired.x / mag) * this.maxSpeed;
    desired.y = (desired.y / mag) * this.maxSpeed;

    const steer = {
      x: desired.x - this.velocity.x,
      y: desired.y - this.velocity.y,
    };
    steer.x = Math.max(-this.maxForce, Math.min(steer.x, this.maxForce));
    steer.y = Math.max(-this.maxForce, Math.min(steer.y, this.maxForce));
    return steer;
  }

  alignment(boids) {
    let avgVel = { x: 0, y: 0 };
    let count = 0;
    for (let other of boids) {
      const distance = this.distance(other);
      if (other !== this && distance < 50) {
        avgVel.x += other.velocity.x;
        avgVel.y += other.velocity.y;
        count++;
      }
    }
    if (count > 0) {
      avgVel.x /= count;
      avgVel.y /= count;
      avgVel.x = (avgVel.x / Math.sqrt(avgVel.x * avgVel.x + avgVel.y * avgVel.y)) * this.maxSpeed;
      avgVel.y = (avgVel.y / Math.sqrt(avgVel.x * avgVel.x + avgVel.y * avgVel.y)) * this.maxSpeed;
      const steer = {
        x: avgVel.x - this.velocity.x,
        y: avgVel.y - this.velocity.y,
      };
      steer.x = Math.max(-this.maxForce, Math.min(steer.x, this.maxForce));
      steer.y = Math.max(-this.maxForce, Math.min(steer.y, this.maxForce));
      return steer;
    }
    return { x: 0, y: 0 };
  }

  separation(boids) {
    let steer = { x: 0, y: 0 };
    let count = 0;
    for (let other of boids) {
      const distance = this.distance(other);
      const combinedSize = this.size + other.size;

      if (other !== this && distance < combinedSize + 10) { 
        const diff = {
          x: this.position.x - other.position.x,
          y: this.position.y - other.position.y,
        };
        // stronger forces based on distance
        const mag = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
        diff.x = (diff.x / mag) * this.maxSpeed;
        diff.y = (diff.y / mag) * this.maxSpeed;
        steer.x += diff.x;
        steer.y += diff.y;
        count++;
      }
    }
    if (count > 0) {
      steer.x /= count;
      steer.y /= count;
      steer.x = (steer.x / Math.sqrt(steer.x * steer.x + steer.y * steer.y)) * this.maxSpeed;
      steer.y = (steer.y / Math.sqrt(steer.x * steer.x + steer.y * steer.y)) * this.maxSpeed;
      steer.x -= this.velocity.x;
      steer.y -= this.velocity.y;
      steer.x = Math.max(-this.maxForce, Math.min(steer.x, this.maxForce));
      steer.y = Math.max(-this.maxForce, Math.min(steer.y, this.maxForce));
      return steer;
    }
    return { x: 0, y: 0 };
  }

  flock(boids) {
    const sep = this.separation(boids);
    const ali = this.alignment(boids);
    const coh = this.cohesion(boids);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }
}

onMounted(() => {
  nextTick(() => {
    const canvas = canvasRef.value;
    
    // If the canvas is not found, log an error
    if (!canvas) {
      console.error("Canvas not found!");
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      console.error("Failed to get the canvas context.");
      return;
    }

    const boids = [];
    const sizes = [3, 5, 7, 9];

    const sizeProbabilities = [0.6, 0.25, 0.1, 0.05]
    function getRandomSize() {
      const randomValue = Math.random()
      let cumulativeProbability = 0

      for (let i = 0; i < sizes.length; i++) {
        cumulativeProbability += sizeProbabilities[i]
        if (randomValue < cumulativeProbability) {
          return sizes[i]
        }
      }
      return sizes[0]
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = getRandomSize()
      boids.push(new Boid(x, y, size));
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let boid of boids) {
        boid.flock(boids);
        boid.update(canvas.height, canvas.width);
        boid.draw(context);
      }
      requestAnimationFrame(animate);
    }

    animate();
  });
});
</script>

<style scoped>
.boids-canvas {
  display: block;
  background: #251b1b;
  width: 50vw;
  height: 50vh;
}
</style>

<template>
    <div class="deals">
        <h1>Deals App</h1>
        <CreateDeal @dealCreated="CreateDeal" />
        <DealList ref="dealList" />
    </div>
</template>
<script setup>
import DealList from '../components/Deals/DealList.vue'
import CreateDeal from '../components/Deals/CreateDeal.vue'
</script>
<style scoped>
.resume-container {
    padding: 20px;
    text-align: center;
    background-color: #1c1c1c;
    color: #fff;
}

.pdf-viewer {
    margin-top: 20px;
    border: 1px solid #ddd;
}
</style>

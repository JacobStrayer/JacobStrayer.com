<template>
    <div class="share-page">
        <h1 v-if="errorMessage">Error: {{ errorMessage }}</h1>
        <div v-else>
            <h1>Welcome to the shared page!</h1>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { viewShare } from '../api/endpoints'

export default {
    name: 'SharePage',
    data() {
        return {
            message: '',
            errorMessage: ''
        }
    },
    async created() {
        const customLink = this.$route.path.split('/')[2]
        try {
            const response = await viewShare(customLink)
            console.log('response', response)
        } catch (error) {
            this.errorMessage = error.response?.data?.message || 'An error occurred.'
        }
    }
}
</script>

<style scoped>
.share-page {
    padding: 2rem;
    text-align: center;
}
</style>

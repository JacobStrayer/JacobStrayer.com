<template>
    <div>
        <h2>Create a New Deal</h2>
        <form @submit.prevent="submitDeal">
            <div>
                <label for="reward">Reward:</label>
                <input id="reward" v-model="reward" required />
            </div>
            <div>
                <label for="shares">Required Shares:</label>
                <input id="shares" type="number" v-model="requiredShares" required />
            </div>
            <button type="submit">Create Deal</button>
        </form>
    </div>
</template>

<script>
import { createDeal } from '../../api/endpoints.js'

export default {
    data() {
        return {
            reward: '',
            requiredShares: 0
        }
    },
    methods: {
        async submitDeal() {
            const userId = 'user123' // Replace with actual logged-in user ID
            const newDeal = { reward: this.reward, requiredShares: this.requiredShares, userId }
            await createDeal(newDeal)
            alert('Deal created!')
            this.$emit('dealCreated')
        }
    }
}
</script>

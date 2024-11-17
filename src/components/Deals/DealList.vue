<template>
    <div>
        <h2>Available Deals</h2>
        <ul v-if="deals.length">
            <li v-for="deal in deals" :key="deal._id">
                <strong>{{ deal.reward }}</strong> - Requires {{ deal.requiredShares }} shares
                <button @click="shareDeal(deal._id)">Share</button>
            </li>
        </ul>
        <p v-else>No deals available.</p>
    </div>
</template>

<script>
import { getDeals, createShare } from '../../api/endpoints.js'

export default {
    data() {
        return {
            deals: []
        }
    },
    async created() {
        this.deals = (await getDeals()) || []
        console.log('here', this.deals)
    },
    methods: {
        async shareDeal(dealId) {
            const userId = 'user123' // Replace with actual logged-in user ID
            const link = await createShare(dealId, userId)
            alert(`Your share link: ${link}`)
        }
    }
}
</script>

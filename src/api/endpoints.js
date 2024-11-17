import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

// auth

export const register = async () => {
    const response = await axios.post(`${API_URL}/auth/register`)
    return response.data
}

export const login = async ({ email, password }) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password })
    return response.data
}

// deals

export const getDeals = async () => {
    const response = await axios.get(`${API_URL}/deal/deals`)
    return response.data
}

export const createDeal = async (deal) => {
    const response = await axios.post(`${API_URL}/deal/create`, deal)
    return response.data
}

export const createShare = async (dealId, userId) => {
    const response = await axios.get(`${API_URL}/deal/share`, { dealId, userId })
    return response.data
}

export const viewShare = async (customLink) => {
    const response = await axios.post(`${API_URL}/deal/share`, { customLink })
    return response.data
}

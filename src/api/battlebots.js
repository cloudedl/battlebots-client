import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllBattleBots = () => {
    return axios(`${apiUrl}/battlebots`)
}
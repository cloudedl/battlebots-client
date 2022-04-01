import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllBattleBots = () => {
    return axios(`${apiUrl}/battlebots`)
}

// show function
export const getOneBot = (battlebotId) => {
    return axios(`${apiUrl}/battlebots/${battlebotId}`)
}

// Post -> create function
export const createBattleBot = (user, newBattleBot) => {
    return axios({
        url:`${apiUrl}/battlebots`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {battlebot: newBattleBot}
    })

}

// Patch -> update function

// DELETE -> remove function
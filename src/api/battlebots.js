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
export const updateBattleBot = (user, updatedBattleBot) => {
    console.log('user', user)
    console.log('this is newBattleBot', updatedBattleBot)
    return axios({
        url: `${apiUrl}/battlebots/${updatedBattleBot._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { battlebot: updatedBattleBot }
    })
}

// DELETE -> remove function
export const removeBattleBot = (user, battlebotId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/battlebots/${battlebotId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createBattleBot } from '../../api/battlebots'
import { createBattleBotSuccess, createBattleBotFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'

// create battlebot renders a form and calls createbattlebot function
// maybe redirect(navigate) to the new battlebot show page
// props we'll need are user, msgAlert
const CreateBattleBot = (props) => {

    const navigate = useNavigate()
    const { user } = props
    console.log('user in create', user)
    // we'll need two states
    const [battlebot, setBattleBot] = useState({name: '', primaryWeapon: '', currentWins: '', currentLosses: ''})
    //  an empty battlebot object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()

        setBattleBot(prevBattleBot => {
            const name = e.target.name
            let value = e.target.value

            if(e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log('prevBattleBot', prevBattleBot)
            console.log('updatedValue', updatedValue)

            

            return {...prevBattleBot, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
       
        createBattleBot(user, battlebot)
            // if create is successful, then we should navigate to the show page
            .then(res => {navigate(`/battlebots/${res.data.battlebot._id}`)})
            
            // then we send a success message
            // if there is an error, we'll send an error message
            .catch(console.error)
        console.log('this is the battlebot', battlebot)
    }

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="what is your battlebot's name?"
                    value={battlebot.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Primary Weapon</Form.Label>
                <Form.Control 
                    placeholder="what is the primary weapon of the battlebot?"
                    value={battlebot.primaryWeapon}
                    name='primaryWeapon'
                    onChange={handleChange}
                />
                <Form.Label>Current Wins</Form.Label>
                <Form.Control 
                    placeholder="How many times has the battlebot won this season?"
                    value={battlebot.currentWins}
                    type="number"
                    name='currentWins'
                    onChange={handleChange}
                />
                <Form.Label>Current Losses</Form.Label>
                 <Form.Control 
                    placeholder="How many times has the battlebot lost this season?"
                    value={battlebot.currentLosses}
                    type="number"
                    name='currentLosses'
                    onChange={handleChange}
                />
              
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CreateBattleBot
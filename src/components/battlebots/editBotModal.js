import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { Form, Container, Button } from 'react-bootstrap'
import BattleBotForm from '../shared/BattleBotForm'

const EditBattleBotModal = (props) => {
    const { user, show, handleClose, updateBattleBot, triggerRefresh } = props
    const [battlebot, setBattleBot] = useState(props.battlebot)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setBattleBot(prevBattleBot => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
            if(name === "adoptable" && e.target.checked){
                value = true
            } else if (name === "adoptable" && !e.target.checked){
                value = false
            }

            if (e.target.type === 'number') {
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

        console.log('the battlebot to submit', battlebot)
        updateBattleBot(user, battlebot)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
         
        console.log('this is the battlebot', battlebot)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
        </Modal>
    )
}
    
export default EditBattleBotModal
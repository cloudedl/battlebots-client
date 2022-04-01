import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const BattleBotForm = (props) => {
    
    const {battlebot, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="what is your battlebot's name?"
                    value={battlebot.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Type</Form.Label>
                <Form.Control 
                    placeholder="what type of animal is your battlebot?"
                    value={battlebot.type}
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Age</Form.Label>
                <Form.Control 
                    placeholder="what is your battlebot's age?"
                    value={battlebot.age}
                    type="number"
                    name='age'
                    onChange={handleChange}
                />
                <Form.Check 
                    label='is this battlebot adoptable?'
                    name='adoptable'
                    defaultChecked={battlebot.adoptable}
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default BattleBotForm
import React, { useState, useEffect } from "react";
import { getAllBattleBots } from '../../api/battlebots'
import { Card } from 'react-bootstrap'

// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS Syntax

const cardContainerLayout = {
    display:'flex',
    justifyContent: 'center', 
    flexFlow: 'row wrap'
}

const Indexbattlebots = (props) => {
    const [battlebots, setBattleBots] = useState(null)

    useEffect(() => {
        getAllBattleBots()
            .then(res => {
                setBattleBots(res.data.battlebots)
            })
            .catch(console.error)
    }, [])


    const battlebotCards = battlebots.map(battlebot => (
        <Card key={battlebot.id} style={{ width: '30%' }} className="m-2">
            <Card.Header>
                {battlebot.name}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Primary Weapon: {battlebot.primaryWeapon}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    if (!battlebots) {
        return <p>loading...</p>
    } else if (battlebots.length === 0) {
        return <p>No battlebots yet, please add some</p>
    }

    let battlebotsJSX

    if (battlebots.length > 0) {
        battlebotsJSX = battlebots.map(battlebot => (
            <li key={battlebot.id}>
                {battlebot.name}
            </li>
        ))
    }

    return (
        <>
            <h3>All the battlebots</h3>
            <div style={cardContainerLayout}>
                {battlebotCards}
            </div>
        </>
    )
}

export default Indexbattlebots
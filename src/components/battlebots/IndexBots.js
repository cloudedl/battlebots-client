import React, { useState, useEffect } from "react";
import { getAllBattleBots } from '../../api/battlebots'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS Syntax

const cardContainerLayout = {
    display:'flex',
    justifyContent: 'center', 
    flexFlow: 'row wrap'
}

const IndexBattlebots = (props) => {
    const [battlebots, setBattleBots] = useState(null)

    useEffect(() => {
        getAllBattleBots()
            .then(res => {
                setBattleBots(res.data.battlebots)
            })
            .catch(console.error)
    }, [])



    if (!battlebots) {
        return <p>loading...</p>
    } else if (battlebots.length === 0) {
        return <p>No battlebots yet, please add some</p>
    }

    let battlebotCards
    console.log('what is battlebot in indexBots', battlebots)
    if (battlebots.length > 0) {
        battlebotCards = battlebots.map(battlebot => {
            console.log('type of battlebot._id', typeof(battlebot._id))
            console.log('type of battlebot._id', (battlebot._id))
            const id = battlebot._id
            console.log()
            return(
            <Card key={id} style={{ width: '30%' }} className="m-2">
                <Card.Header>
                    {battlebot.name}
                </Card.Header>
                <Card.Body>
                    <Card.Text >
                        <Link to={`/battlebots/${id}`}>Primary Weapon: {battlebot.primaryWeapon}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            )
        })
        
        
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

export default IndexBattlebots
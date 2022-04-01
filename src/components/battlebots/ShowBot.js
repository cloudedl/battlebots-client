import React, { useState, useEffect } from "react";
import {getOneBot} from '../../api/battlebots'
import {useParams} from 'react-router-dom'
import { Container, Spinner, Card } from "react-bootstrap";

const ShowBot = (props) => {
    const [battlebot, setBattleBot] = useState(null)
    console.log('props in showBot', props)
    const { id } = useParams()
    console.log('id in showBot', id)

    useEffect(() => {
        getOneBot(id)
            .then(res => setBattleBot(res.data.battlebot))
            .catch(console.error)
    }, [id])

    if (!battlebot) {
        return (
            <Container className="justify-content-md-center">
            <Spinner  animation="border" role="status">
                <span className="visually-hidden" size="xxl">Loading...</span>
            </Spinner>
            </Container>
        )
    }
    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{battlebot.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small> Primary Weapon: {battlebot.primaryWeapon}</small><br/>
                        <small>Wins: {battlebot.currentWins} Losses: {battlebot.currentLosses}</small>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}


export default ShowBot
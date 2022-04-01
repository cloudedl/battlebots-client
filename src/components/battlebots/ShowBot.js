import React, { useState, useEffect } from "react";
import {getOneBot, updateBattleBot, removeBattleBot} from '../../api/battlebots'
import {useParams, useNavigate} from 'react-router-dom'
import { Container, Spinner, Card , Button} from "react-bootstrap";
import EditBattleBotModal from "./editBotModal";

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowBot = (props) => {
    const [battlebot, setBattleBot] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    const {user} = props
    console.log('props in showBot', props)
    const { id } = useParams()
    console.log('id in showBot', id)

    useEffect(() => {
        getOneBot(id)
            .then(res => setBattleBot(res.data.battlebot))
            .catch(console.error)
    }, [updated])

    const removeTheBot = () => {
        removeBattleBot(user, battlebot._id)
            .then(() => {navigate('/')})
            .catch(console.error)
    }

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
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{battlebot.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small> Primary Weapon: {battlebot.primaryWeapon}</small><br/>
                            <small>Wins: {battlebot.currentWins} Losses: {battlebot.currentLosses}</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                Edit BattleBot
                            </Button>
                        <Button onClick={() => removeTheBot()}className="m-2" variant="danger">
                            Delete BattleBot
                        </Button>
                    </Card.Footer>
                </Card>

            </Container>
            <EditBattleBotModal
                battlebot={battlebot}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateBattleBot={updateBattleBot}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}


export default ShowBot



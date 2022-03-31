import React, { useState, useEffect } from "react";
import {getOneBot} from '../../api/battlebots'
import {useParams} from 'react-router-dom'

const ShowBot = (props) => {
    console.log('props in showBot', props)
    const {params} = useParams()
    console.log('params in showBot', params)
    return (
        <p>Show battlebot component</p>
    )
}


export default ShowBot
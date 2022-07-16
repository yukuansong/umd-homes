
import {useEffect} from 'react';

export default function Logout(props){
    const {setScreen} = props;
    useEffect(()=>{
        setScreen("auth")
    })
}
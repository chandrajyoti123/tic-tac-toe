import React, { useEffect, useState } from 'react'
import './Home.css'
import cross from './cross.png'
import circle from './circle.png'


export default function Home() {
    const [player,setPlayer]=useState(1)
    const [board, setBoard]=useState({
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",

    })
    // useEffect(()=>{
    //     setWinner('')
    // },[])
    const [winner,setWinner]=useState("")
    useEffect(()=>{
        getwinner()
     
        setPlayer(player===1?2:1)
    },[board])

    const getwinner=()=>{
        const symbol= player==1?cross:circle
        if(board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" && board[6] != "" && board[7] != "" && board[8] != "" && board[9] != "" ){
            setWinner("no")
        }
        if(board[1]==symbol && board[2]==symbol && board[3]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
            
        }
        else if(board[4]==symbol && board[5]==symbol && board[6]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[7]==symbol && board[8]==symbol && board[9]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[1]==symbol && board[4]==symbol && board[7]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[2]==symbol && board[5]==symbol && board[8]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[3]==symbol && board[6]==symbol && board[9]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[1]==symbol && board[5]==symbol && board[9]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else if(board[3]==symbol && board[5]==symbol && board[7]==symbol){
            // alert(`player who have symbol ${symbol} is win `)
            setWinner(player)
        }
        else{
            return;
        }

    }
    const play=(box)=>{
        if(board[box] != "" ||  winner != ""){
            return
        }
        if(player===1){
            setBoard({...board, [box]:cross})
        }
        else{
            setBoard({...board, [box]:circle})

        }
       

    }
    const reset=()=>{
        setWinner('')
        setPlayer(1)
        setBoard({
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
            6:"",
            7:"",
            8:"",
            9:"",
        })
    }
  return (
    <div className='main-container'>
        <h1 className='heading'>tic tac toe</h1>
        <div className='players'>
            <div className='players'>player one(<img src={circle} className='imghead'/>)</div>
            <div className='players'>player two(<img src={cross} className='imghead'/>)</div>

        </div>
        <div className='winner'>
            {
               winner=="no"?(<h1>No One Win The game</h1>): winner != ""?(<h1>player {player==1? "one": "two"} win</h1>):null

            }
        </div>
        <div className='baord'>
            <div className='row'>
                <div className='box box1' onClick={()=>{
                    play(1)
                }}><img src={board[1]} className='img'/></div>
                <div className='box box2'onClick={()=>{
                    play(2)
                }}><img src={board[2]} className='img'/></div>
                <div className='box box3' onClick={()=>{
                    play(3)
                }}><img src={board[3]} className='img'/></div>
            </div>
            <div className='row'>
                <div className='box box4' onClick={()=>{
                    play(4)
                }}><img src={board[4]} className='img'/></div>
                <div className='box box5' onClick={()=>{
                    play(5)
                }}><img src={board[5]} className='img'/></div>
                <div className='box box6' onClick={()=>{
                    play(6)
                }}><img src={board[6]} className='img'/></div>
            </div>
            <div className='row'>
                <div className='box box7' onClick={()=>{
                    play(7)
                }}><img src={board[7]} className='img'/></div>
                <div className='box box8' onClick={()=>{
                    play(8)
                }}><img src={board[8]} className='img'/></div>
                <div className='box box9' onClick={()=>{
                    play(9)
                }}><img src={board[9]} className='img'/></div>
            </div>
      

        </div>
        <button className='btn' onClick={reset}>reset</button>      
    </div>
  )
}

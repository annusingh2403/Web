import React, {useState} from 'react';
import './ProjectFive.css';

const ProjectFive = () => {

    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [draw, setDraw] = useState();

    const checkForWinner = (square) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [6, 4, 2]
            ],
        };

        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    square[pattern[0]] === '' || 
                    square[pattern[1] === ''] ||
                    square[pattern[2] === '']
                ) {
                    setDraw('Play Again')
                } else if (
                    square[pattern[0]] === square[pattern[1]] && 
                    square[pattern[1]] === square[pattern[2]] 
                ) {
                    setWinner(square[pattern[0]])
                }
            });
        }
    }


    const handleClick = (num) => {

        if( cells[num] !== ''){
            alert('already clicked');
            return;
        }

        let square = [...cells];

        if(turn === 'X'){
            square[num] = 'X';
            setTurn('O')
        }else{
            square[num] = 'O';
            setTurn('X');
        }

        checkForWinner(square)
        setCells(square);
    }

    const playAgain = () => {
        setWinner();
        setCells(Array(9).fill(''));
        setDraw(!draw);
    }

    const Cell = ({num}) => {
        return (
            <td onClick={() => handleClick(num)}>{cells[num]}</td>
        )
    }

  return <>
            <div>
                <p style={{color: 'steelblue'}}>Project Five ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>T</span>ic <span style={{color: "tomato"}}>T</span>ac <span style={{color: "tomato"}}> T</span>oe</p>
            </div>
            <div className='five-container'>
                <div className='turn'>
                    Turn : <span style={{color: 'red'}}>{turn}</span>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <Cell num={0}/>
                            <Cell num={1}/>
                            <Cell num={2}/>
                        </tr>
                        <tr>
                            <Cell num={3}/>
                            <Cell num={4}/>
                            <Cell num={5}/>
                        </tr>
                        <tr>
                            <Cell num={6}/>
                            <Cell num={7}/>
                            <Cell num={8}/>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='winner'>
                {winner ? (
                    <div className='winner-text'>
                        <div>{winner} is the winner</div>
                    </div>
                ) : null}
                {draw && <button onClick={playAgain}>Play Again</button>}
            </div>
            
        </>;
};

export default ProjectFive;

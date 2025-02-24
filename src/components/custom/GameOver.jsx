import { useContext } from "react"
import { GameContext } from "../../contexts/gameContext"

const GameOver = () => {
    const {gameConfig}= useContext(GameContext);
    return (
        <section className='flex flex-col justify-center items-center z-10 pt-6'>
            <div className='flex flex-col font-coiny text-white text-center text-2xl gap-2'>
                <h1>So Close Yet So Far:</h1>
                <span>{gameConfig.score}/9 Score</span>
            </div>
            <div className="font-kreon text-white text-center text-xl pt-4 px-18">
                <p><strong className="text-2xl underline">{gameConfig.count - gameConfig.score}</strong> Mark Away from Seeing the Full Picture! </p>
            </div>
            <div>
                <img src="/images/astronaut-2.png" alt="astronaut" />
            </div>
        </section>
    )
}

export default GameOver
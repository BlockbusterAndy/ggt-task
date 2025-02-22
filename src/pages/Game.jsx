import Question from '../components/custom/Question'

const Game = () => {

  return (
    <section>
        <div className="flex flex-col justify-center items-center pt-32">
          <h1 className="text-2xl text-white text-center font-coiny">Mystery Blocks</h1>
          <div className='pt-2'>
            <Question />
          </div>
        </div>
    </section>
  )
}

export default Game
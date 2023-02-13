import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import Axios from 'axios'

const ResponseApp = () => {

    const [question1, setQuestion1] = useState(-1)
    const [question2, setQuestion2] = useState(-1)
    const [question3, setQuestion3] = useState(-1)
    const [question4, setQuestion4] = useState(-1)
    const [question5, setQuestion5] = useState(-1)
    // const {questions, setQuestions} = useState({})
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            if(response.data[0]) {
                setQuestionList(response.data[0])
            }
        })
    }, [])
    
    // console.log('--------------', response.data[0].q1)
    // console.log('---------', setQuestion1(response.data[0].q1)

  return (

    <form  className='border-solid border-8 border-slate-200 m-8' id='myFrom'>
    <div className='mb-8'>
        {/*header section */}
        <div>
            <p className="text-teal-600 text-xl text-left px-2 m-5">Week2: WHO-5 Well-Being Index</p>
        </div>
        {/* body section */}
        <div className='bg-slate-200 w-auto h-auto mx-5 pb-2 rounded-lg'>
            <div>
                <table className='min-w-full'>
                    <thread>
                        <tr>           
                            <div className='m-4 px-4'>
                                <th>Over the last two weeks:</th>
                                <th className='px-14'></th>
                                <th className='px-28 p-12'></th>
                                <th>All the time</th>
                                <th className='px-8'></th>
                                <th className='px-2 p-10'></th>
                                <th>Most of the time</th>
                                <th className='px-8'></th>
                                <th className='px-2 p-10'></th>
                                <th>More than half of the time</th>
                                <th className='px-8'></th>
                                <th className='px-2 p-10'></th>
                                <th>Less than half of the time</th>
                                <th className='px-8'></th>
                                <th className='px-2 p-10'></th>
                                <th>Some of the time</th>
                                <th className='px-8'></th>
                                <th className='px-2 p-10'></th>
                                <th>At no time</th>
                            </div>
                        </tr> 
                        <hr className="w-90 h-1 bg-gray-100 border-0 rounded md:my-2 "></hr>
                    </thread>

                    {/* <span>testing q1: {questionList.q1}</span>
                    <span>testing q2: {questionList.q2}</span>
                    <span>testing q3: {questionList.q3}</span>
                    <span>testing q4: {questionList.q4}</span>
                    <span>testing q5: {questionList.q5}</span> */}

                    <tbody> 
                        <tr>
                            <td className='text-left py-4 px-4 '>1. I have felt cheerful and in good spirits</td>
                            <span className='absolute right-80'>
                                <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            value="5"
                                            name="qestionnaire1"
                                            checked={questionList.q1 === 5}
                                            /> 
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            value="4"
                                            name="qestionnaire1"
                                            onChange={(e) => {setQuestion1(e.target.value="4")}}
                                            checked={questionList.q1 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            value="3"
                                            name="qestionnaire1"
                                            onChange={(e) => {setQuestion1(e.target.value="3")}}
                                            checked={questionList.q1 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            value="2"
                                            name="qestionnaire1"
                                            onChange={(e) => {setQuestion1(e.target.value="2")}}
                                            checked={questionList.q1 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            value="1"
                                            name="qestionnaire1"
                                            onChange={(e) => {setQuestion1(e.target.value="1")}}
                                            checked={questionList.q1 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            value="0"     
                                            onChange={(e) => {setQuestion1(e.target.value="0")}}
                                            checked={questionList.q1 === 0}                                           
                                            />
                                    </span>
                                </td>
                                <span className='relative right-60 top-4'>
                                    <span className='relative right-80'>
                                        {/* <div className='relative right-80'>Error</div> */}
                                    </span>
                                </span>
                
                            </span>
                        </tr>
                        <tr>
                            <td className='text-left py-4 px-4'>2. I have felt calm and relaxed</td>
                            <span className='absolute right-80'>
                                <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            value="5"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="5")}}
                                            checked={questionList.q2 === 5}
                                            /> 
                                            
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            value="4"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="4")}}
                                            checked={questionList.q2 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            value="3"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="3")}}
                                            checked={questionList.q2 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            value="2"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="2")}}
                                            checked={questionList.q2 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            value="1"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="1")}}
                                            checked={questionList.q2 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            value="0"
                                            name="qestionnaire2"
                                            onChange={(e) => {setQuestion2(e.target.value="0")}}
                                            checked={questionList.q2 === 0}
                                            />
                                    </span>
                                </td>
                                <span className='relative right-60 top-4'>
                                    <span className='relative right-80'>
                                        {/* <div className='relative right-80'>Error</div> */}
                                    </span>
                                </span>
                            </span>
                        </tr>
                        <tr>
                            <td className='text-left py-4 px-4'>3. I have felt active and vigorous</td>
                            <span className='absolute right-80'>
                            <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            value="5"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="5")}}
                                            checked={questionList.q3 === 5}
                                            /> 
                                            
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            value="4"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="4")}}
                                            checked={questionList.q3 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            value="3"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="3")}}
                                            checked={questionList.q3 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            value="2"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="2")}}
                                            checked={questionList.q3 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            value="1"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="1")}}
                                            checked={questionList.q3 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            value="0"
                                            name="qestionnaire3"
                                            onChange={(e) => {setQuestion3(e.target.value="0")}}
                                            checked={questionList.q3 === 0}
                                            />
                                    </span>
                                </td>
                                <span className='relative right-60 top-4'>
                                    <span className='relative right-80'>
                                        {/* <div className='relative right-80'>Error</div> */}
                                    </span>
                                </span>
                            </span>
                        </tr>
                        <tr>
                            <td className='text-left py-4 px-4'>4. I wake up feeling fresh and rested</td>
                            <span className='absolute right-80'>
                            <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            value="5"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="5")}}
                                            checked={questionList.q4 === 5}
                                            />                                   
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            value="4"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="4")}}
                                            checked={questionList.q4 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            value="3"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="3")}}
                                            checked={questionList.q4 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            value="2"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="2")}}
                                            checked={questionList.q4 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            value="1"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="1")}}
                                            checked={questionList.q4 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            value="0"
                                            name="qestionnaire4"
                                            onChange={(e) => {setQuestion4(e.target.value="0")}}
                                            checked={questionList.q4 === 0}
                                            />
                                    </span>
                                </td>
                                <span className='relative right-60 top-4'>
                                    <span className='relative right-80'>
                                        {/* <div className='relative right-80'>Error</div> */}
                                    </span>
                                </span>
                            </span>
                        </tr>
                        <tr>
                            <td className='text-left py-4 px-4'>5. My daily life has been filled with things that interest me</td>
                            <span className='absolute right-80'>
                            <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            value="5"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="5")}}
                                            checked={questionList.q5 === 5}
                                            />                                          
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            value="4"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="4")}}
                                            checked={questionList.q5 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            value="3"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="3")}}
                                            checked={questionList.q5 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            value="2"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="2")}}
                                            checked={questionList.q5 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            value="1"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="1")}}
                                            checked={questionList.q5 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            value="0"
                                            name="qestionnaire5"
                                            onChange={(e) => {setQuestion5(e.target.value="0")}}
                                            checked={questionList.q5 === 0}
                                            />
                                    </span>
                                </td>
                                <span className='relative right-60 top-4'>
                                    <span className='relative right-80'>
                                        {/* <div className='relative right-80'>Error</div> */}
                                    </span>
                                </span>
                            </span>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
         {/* back section */ }
        <span className='relative justify-start m-6 top-5 ml-10'>
            <Link
                type="submit"
                to='/'
                className='w-32 h-10 bg-teal-600 text-white text-center inline-block align-middle font-bold rounded-lg cursor-pointer'  
            >back</Link>
        </span>
      </div>
    </form>

  )
}

export default ResponseApp
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"; 
import Axios from 'axios'

const ResponseApp = () => {

    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            if(response.data[0]) {
                setQuestionList(response.data[0])
            }
        })
    }, [])
    

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


                    <tbody> 
                        <tr>
                            <td className='text-left py-4 px-4 '>1. I have felt cheerful and in good spirits</td>
                            <span className='absolute right-80'>
                                <td className="text-center">
                                    <span className='relative right-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-80 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 5}
                                            /> 
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q1 === 0}                                           
                                            />
                                    </span>
                                </td>
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
                                            checked={questionList.q2 === 5}
                                            /> 
                                            
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q2 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q2 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q2 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q2 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q2 === 0}
                                            />
                                    </span>
                                </td>
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
                                            checked={questionList.q3 === 5}
                                          />                                             
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q3 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q3 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q3 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q3 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q3 === 0}
                                            />
                                    </span>
                                </td>
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
                                            checked={questionList.q4 === 5}
                                            />                                   
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q4 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q4 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q4 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q4 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q4 === 0}
                                            />
                                    </span>
                                </td>
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
                                            checked={questionList.q5 === 5}
                                            />                                          
                                    </span>
                                </td>
                                
                                <td>
                                    <span className='relative right-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q5 === 4}
                                            />
                                    </span>
                                </td>
                                <td >
                                    <span className='relative right-5'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q5 === 3}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-10'>
                                        <input 
                                            type="radio" 
                                            className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q5 === 2}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-20'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q5 === 1}
                                            />
                                    </span>
                                </td>
                                <td>
                                    <span className='relative left-40'>
                                        <input 
                                            type="radio" 
                                            className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                            checked={questionList.q5 === 0}
                                            />
                                    </span>
                                </td>
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
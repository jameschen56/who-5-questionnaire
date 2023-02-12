import React, {useState} from 'react'

const ResponseApp = () => {

    const [question1, setQuestion1] = useState('')
    const [question2, setQuestion2] = useState('')
    const [question3, setQuestion3] = useState('')
    const [question4, setQuestion4] = useState('')
    const [question5, setQuestion5] = useState('')
    const [questionList, setQuestionList] = useState([])


  return (

      <form>
            {/*header section */}
            <div>
                <p className="text-teal-600 text-xl text-left px-2 m-5">Week2: WHO-5 Well-Being Index</p>
            </div>
            {/* body section */}
            <div className='bg-slate-200 w-auto h-auto mx-5 pb-5 rounded-lg'>
                <div>
                    <table className='min-w-full'>
                        <thread>
                            <tr>
                            
                                <div className='m-4 px-4'>
                                    <th>Over the last two weeks:</th>
                                    <th className='px-16'></th>
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
                                                value="5"
                                                name="qestionnaire1"
                                                onChange={(e) => {setQuestion1(e.target.value="5")}}
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
        </form>

  )
}

export default ResponseApp
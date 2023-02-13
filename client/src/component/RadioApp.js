import React, {useState} from 'react'
import { Link } from "react-router-dom"; 
import Axios from 'axios'

const RadioApp = () => {

    const [question1, setQuestion1] = useState('')
    const [question2, setQuestion2] = useState('')
    const [question3, setQuestion3] = useState('')
    const [question4, setQuestion4] = useState('')
    const [question5, setQuestion5] = useState('')
    const [questionList, setQuestionList] = useState([])


  // submit review
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {

        status: '1',
        q1: question1,
        q2: question2,
        q3: question3,
        q4: question4,
        q5: question5

    })

    
    setQuestionList([...questionList, {status: "1", question1: question1, question2: question2, question3:question3, question4:question4, question5:question5}])
    console.log('xxxxxxxxxxxxxxxx', setQuestionList)

  }

  // validating data
  function validate(e) {
    e.preventDefault();
    var a = document.getElementsByName("qestionnaire1");
    var check1 = 0;

    for (var i=0; i < a.length; i++) {
        if(a[i].checked) {
            check1 = true;
            break
        } 
    }

    var b = document.getElementsByName("qestionnaire2");
    var check2 = 0;

    for (var j=0; j < b.length; j++) {
        if(b[j].checked) {
            check2 = true;
            break
        }
    }

    var c = document.getElementsByName("qestionnaire3");
    var check3 = 0;

    for (var k=0; k < c.length; k++) {
        if(c[k].checked) {
            check3 = true;
            break
        }
    }

    var d = document.getElementsByName("qestionnaire4");
    var check4 = false;

    for (var l=0; l < d.length; l++) {
        if(d[l].checked) {
            check4 = true;
            break
        }
    }

    var f = document.getElementsByName("qestionnaire5");
    var check5 = false;

    for (var m=0; m < f.length; m++) {
        if(f[m].checked) {
            check5 = true;
            break
        }
    }

    if (check1 && check2 && check3 && check4 && check5 ) {
        alert("Thank you for completing questionnaire!");
        document.getElementById('myFrom').reset();
    }
    else  {
        alert("Please select a field");

    }
  }

  return (

      <form onSubmit={validate} className='border-solid border-8 border-slate-200 m-8' id='myFrom'>
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
                                                name="qestionnaire1"    
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
             {/* view section */ }
            <span className='relative justify-start m-6 top-5 ml-10'>
                <Link
                    type="submit"
                    value="View"
                    className='w-32 h-10 bg-teal-600 text-white text-center inline-block align-middle font-bold rounded-lg cursor-pointer'  
                    to="/qestionnaire"
                >View </Link>
            </span>
            {/* submit section */ }
            <span className='ml-40'>
                <span className='relative justify-end m-6 top-5 left-60 ml-80'>
                    <input
                        type="submit"
                        value="Submit"
                        className='w-32 h-10 bg-teal-600 text-white font-bold rounded-lg cursor-pointer ml-80'  
                        onClick={submitReview}
                    />
                </span>
            </span>
          </div>
        </form>
    
  )
}

export default RadioApp
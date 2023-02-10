<form onsubmit={validate}>
            <div>
                <p className="text-teal-600 text-xl text-left px-2 m-5">Week2: WHO-5 Well-Being Index</p>
            </div>
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
                                                value="all the same"
                                                name="qestionnaire1"
                                                /> 
                                        </span>
                                    </td>
                                    
                                    <td>
                                        <span className='relative right-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                                value="most of the time"
                                                name="qestionnaire1"
                                                />
                                        </span>
                                    </td>
                                    <td >
                                        <span className='relative right-5'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                                value="more than half of the time"
                                                name="qestionnaire1"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-10'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                                value="less than half of the time"
                                                name="qestionnaire1"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                                value="some of the time"
                                                name="qestionnaire1"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-40'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                                value="at no time"                                                
                                                />
                                        </span>
                                    </td>
                                    <span className='relative right-60 top-4'>
                                        <span className='relative right-80'>
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
                                                name="qestionnaire2"
                                                /> 
                                                
                                        </span>
                                    </td>
                                    
                                    <td>
                                        <span className='relative right-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire2"
                                                />
                                        </span>
                                    </td>
                                    <td >
                                        <span className='relative right-5'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire2"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-10'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire2"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire2"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-40'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire2"
                                                />
                                        </span>
                                    </td>
                                    <span className='relative right-60 top-4'>
                                        <span className='relative right-80'>
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
                                                name="qestionnaire3"
                                                /> 
                                                
                                        </span>
                                    </td>
                                    
                                    <td>
                                        <span className='relative right-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire3"
                                                />
                                        </span>
                                    </td>
                                    <td >
                                        <span className='relative right-5'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire3"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-10'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire3"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire3"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-40'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire3"
                                                />
                                        </span>
                                    </td>
                                    <span className='relative right-60 top-4'>
                                        <span className='relative right-80'>
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
                                                name="qestionnaire4"
                                                />                                   
                                        </span>
                                    </td>
                                    
                                    <td>
                                        <span className='relative right-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire4"
                                                />
                                        </span>
                                    </td>
                                    <td >
                                        <span className='relative right-5'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire4"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-10'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire4"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire4"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-40'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire4"
                                                />
                                        </span>
                                    </td>
                                    <span className='relative right-60 top-4'>
                                        <span className='relative right-80'>
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
                                                name="qestionnaire5"
                                                />                                          
                                        </span>
                                    </td>
                                    
                                    <td>
                                        <span className='relative right-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-60 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire5"
                                                />
                                        </span>
                                    </td>
                                    <td >
                                        <span className='relative right-5'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-40 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire5"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-10'>
                                            <input 
                                                type="radio" 
                                                className="peer relative right-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire5"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-20'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-10 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire5"
                                                />
                                        </span>
                                    </td>
                                    <td>
                                        <span className='relative left-40'>
                                            <input 
                                                type="radio" 
                                                className="peer relative left-20 h-4 w-5 cursor-pointer top-2"
                                                name="qestionnaire5"
                                                />
                                        </span>
                                    </td>
                                    <span className='relative right-60 top-4'>
                                        <span className='relative right-80'>

                                        </span>
                                    </span>
                                </span>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-end m-6'>
                <input
                    type="submit"
                    value="Submit"
                    className='w-32 h-10 bg-teal-600 text-white font-bold rounded-lg cursor-pointer'  
                    // onSubmit={validate}
                />
            </div>
        </form>






function validate() {
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

    var e = document.getElementsByName("qestionnaire5");
    var check5 = false;

    for (var m=0; m < e.length; m++) {
        if(e[m].checked) {
            check5 = true;
            break
        }
    }

    if (check1 && check2 && check3 && check4 && check5 ) {
        alert("Thank you for completing questionnaire!");
        console.log('xxxxxxxxxxxxxxxxxxx')
    }
    else {
        alert("Please select a field");
        console.log('yyyyyyyyyyyyyyyyyy')
    }
  }




import React from 'react'

const RadioApp = () => {

  return (
   <React.Fragment>
    <section>
        <form>
            {/*header section */}
            <div>
                <p className="text-teal-600 text-xl text-left px-2 m-5">Week2: WHO-5 Well-Being Index</p>
            </div>
            {/* body section */}
            <div className='bg-slate-200 w-auto h-auto mx-5 rounded-lg'>
                <div>
                    <table className='min-w-full'>
                        <thread>
                            <tr>
                            
                                <div className='m-4 px-4'>
                                    <th>Over the last weeks:</th>
                                    <th className='px-16'></th>
                                    <th className='px-28 p-12'></th>
                                    <th>All the time</th>
                                    <th className='px-10'></th>
                                    <th className='px-2 p-10'></th>
                                    <th>Most of the time</th>
                                    <th className='px-10'></th>
                                    <th className='px-2 p-10'></th>
                                    <th>More than half of the time</th>
                                    <th className='px-10'></th>
                                    <th className='px-2 p-10'></th>
                                    <th>Less than half of the time</th>
                                    <th className='px-10'></th>
                                    <th className='px-2 p-10'></th>
                                    <th>Some of the time</th>
                                    <th className='px-10'></th>
                                    <th className='px-2 p-10'></th>
                                    <th>At no time</th>
                                </div>
                            </tr> 
                        </thread>

                        <tbody> 
                            <tr>
                                <td className='text-left py-4 px-4'>1. I have felt cheerful and in good spirits</td>
                                <span className='absolute right-80'>
                                    <td className="text-center">
                                        <input type="radio" className="peer relative right-80 h-4 w-5 cursor-pointer"/> 
                                    </td>
                                    
                                    <td>
                                        <input type="radio" className="peer relative right-60 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td >
                                        <input type="radio" className="peer relative right-40 h-4 w-5 cursor-pointer "/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative right-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative left-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                </span>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>2. I have felt calm and relaxed</td>
                                <span className='absolute right-80'>
                                    <td className="text-center">
                                        <input type="radio" className="peer relative right-80 h-4 w-5 cursor-pointer"/> 
                                    </td>
                                    
                                    <td>
                                        <input type="radio" className="peer relative right-60 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td >
                                        <input type="radio" className="peer relative right-40 h-4 w-5 cursor-pointer "/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative right-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative left-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                </span>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>3. I have felt active and vigorous</td>
                                <span className='absolute right-80'>
                                    <td className="text-center">
                                        <input type="radio" className="peer relative right-80 h-4 w-5 cursor-pointer"/> 
                                    </td>
                                    
                                    <td>
                                        <input type="radio" className="peer relative right-60 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td >
                                        <input type="radio" className="peer relative right-40 h-4 w-5 cursor-pointer "/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative right-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative left-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                </span>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>4. I wake up feeling fresh and rested</td>
                                <span className='absolute right-80'>
                                    <td className="text-center">
                                        <input type="radio" className="peer relative right-80 h-4 w-5 cursor-pointer"/> 
                                    </td>
                                    
                                    <td>
                                        <input type="radio" className="peer relative right-60 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td >
                                        <input type="radio" className="peer relative right-40 h-4 w-5 cursor-pointer "/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative right-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative left-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                </span>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>5. My daily life has been filled with things that interest me</td>
                                <span className='absolute right-80'>
                                    <td className="text-center">
                                        <input type="radio" className="peer relative right-80 h-4 w-5 cursor-pointer"/> 
                                    </td>
                                    
                                    <td>
                                        <input type="radio" className="peer relative right-60 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td >
                                        <input type="radio" className="peer relative right-40 h-4 w-5 cursor-pointer "/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative right-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="peer relative left-20 h-4 w-5 cursor-pointer"/>
                                    </td>
                                </span>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* submit section */ }
            <div className='flex justify-end m-6'>
                <input
                    type="submit"
                    value="submit"
                    className='w-32 h-10 bg-teal-600 text-white font-bold rounded-lg cursor-pointer'  
                />
            </div>
        </form>
    </section>
   </React.Fragment>
  )
}

export default RadioApp
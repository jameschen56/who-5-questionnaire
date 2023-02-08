import React from 'react'
import './RadioApp.css'

const RadioApp = () => {
  return (
   <React.Fragment>
    <section>
        <form>
            <div className='bg-slate-200 w-auto h-auto pb-10 mt-16 mx-5 rounded-lg'>
                {/*header section */}
                <div>
                    <p className="text-teal-600 text-xl text-left m-5">Week2: WHO-5 Well-Being Index</p>
                </div>
                {/* body section */}
                <div>
                    <table className='min-w-full'>
                        <thread >
                            <tr>
                                <th className='px-14'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">Over the last weeks:</th>
                                <th className='px-16'></th>
            
                                <th classNamte="tex-center py-4 px- uppercase font-bold">All the time</th>
                                <th className='px-16'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">Most of the time</th>
                                <th className='px-16'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">More than half of the time</th>
                                <th className='px-16'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">Less than half of the time</th>
                                <th className='px-16'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">Some of the time</th>
                                <th className='px-16'></th>
                                <th classNamte="tex-center py-4 px-4 uppercase font-bold">At no time</th>
                            </tr> 
                        </thread>

                        <tbody> 
                            <tr>
                                <td className='text-left py-4 px-4'>1. I have felt cheerful and in good spirits</td>
                                <td className="text-center">
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    
                                </td>
                                
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td >
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer "/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>2. I have felt calm and relaxed</td>
                                <td className="text-center">
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    
                                </td>
                                
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td >
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer "/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>3. I have felt active and vigorous</td>
                                <td className="text-center">
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    
                                </td>
                                
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td >
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer "/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>4. I wake up feeling fresh and rested</td>
                                <td className="text-center">
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    
                                </td>
                                
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td >
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer "/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-left py-4 px-4'>5. My daily life has been filled with things that interest me</td>
                                <td className="text-center">
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                    
                                </td>
                                
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td >
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer "/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                                <td>
                                    <input type="radio" className="peer relative h-4 w-5 cursor-pointer"/>
                                </td>
                            </tr>
                        </tbody>
                        {/* submit section */ }
                        <div className='flex justify-end'>
                            <input
                                type="submit"
                                value="submit"
                                className='w-32 h-10 bg-teal-700 text-white font-bold rounded-lg'  
                            />
                        </div>
                    </table>
                </div>
            </div>
        </form>
    </section>
   </React.Fragment>
  )
}

export default RadioApp
import React from 'react';
import {appleImg, bagImg, searchImg} from '../utils';
import {navLists} from '../constants'

const Navbar =()=>{
    return(
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className='flex w-full screen-max-width'>
                <img src ={appleImg} alt ="Apple" width={26} height={20} />
                <div className='flex flex-1 justify-center max-sm:hidden pt-2 '>
                    {navLists.map((nav)=>(
                        <div key ={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all hover:text-2xl' >
                            {nav}
                        </div>
                ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 pt-2'>
                    <img src ={searchImg} alt ="search" width={18} height ={18} className='cursor-pointer'/>
                    <img src ={bagImg} alt ="bag" width={18} height ={18} className ="cursor-pointer"/>
                </div>

            </nav>
        </header>
    )    
}
export default Navbar
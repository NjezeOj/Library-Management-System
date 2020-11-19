import React from 'react'
import { Link } from "react-router-dom"


export const Navbar = () => {    
    return(
        <nav class=" text-white h-full bg-teal-400 fixed top-0 left-0 overflow-x-hidden w-40">
            <div id="sidenav" class="flex flex-col items-center">
                <div class="pt-8">
                    <ul>
                        <li class="text-xl pb-8">
                            <Link to="/">BlueTag Library</Link>
                        </li>

                        <li>
                            <Link to="/registercategory">Register Category</Link>
                        </li>
                        <li>
                            <Link to="/policy">Book Lending Policy</Link>
                        </li>
                        <li>
                            <Link to="/registerbook">Register Book</Link>
                        </li>
                        <li>
                            <Link to="/lendreturn">Lend/Return Book</Link>
                        </li>
                        <li>
                            <Link>Borrowed Book Log</Link>
                        </li>
                        <li>
                            <Link>Book Status</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    )
}
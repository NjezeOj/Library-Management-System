import React from 'react'

export const BookTable = ({close}) => {

    return (
        <>
            <div class="bg-white">
                <div className="flex justify-between">
                    <div className="flex text-black py-4 pl-8">
                        <svg className="fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-2xl -mt-2">Register Books</p>
                    </div>
                    <button class="focus:outline-none mr-8" onClick={close} >
                        <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <table>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year of Publication</th>
                        <th>Call Number</th>
                        <th>Volume</th>
                        <th>Size</th>
                        <th>Qty</th>
                    </tr>
                    <tr>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                        <td>bast</td>
                    </tr>
                </table>
            </div>

        </>
    )


} 
    

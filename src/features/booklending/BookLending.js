import React from 'react'


export const BookLending = () => {
    return (
        <div class="ml-40">
            <div class="bg-teal-400 text-white pt-2 pb-2">
                <p class="text-2xl pl-4">Book Lending Policy</p>
            </div>
            <form class="pt-2 pl-4 pb-2 bg-gray-100 border-b-8">
                <div>
                    <label class="block" for="maxnoofbooksstudents">
                        Maximum Number Of Books - Students
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxnoofbooksstudents" type="text" placeholder="Enter Max Number of Books Per Time" />
                </div>

                <div>
                    <label class="block" for="maxnoofbookslecturers">
                        Maximum Number Of Books - Lecturers
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxnoofbookslecturers" type="text" placeholder="Enter Max Number of Books Per Time" />
                </div>

                <div>
                    <label class="block" for="maxnoofdaysstudents">
                        Maximum Number Of Days A Book Can Be Held - Students
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxnoofdaysstudents" type="text" placeholder="Enter Max Number Of Days" />
                </div>

                <div>
                    <label class="block" for="maxnoofdayslecturers">
                        Maximum Number Of Days A Book Can Be Held - Lecturers
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maxnoofdayslecturers" type="text" placeholder="Enter Max Number Of Days" />
                </div>

                <div>
                    <label class="block" for="penaltystudents">
                        Penalty-Students
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="penaltystudents" type="text" placeholder="Enter Amount To Pay If Returned Late" />
                </div>

                <div>
                    <label class="block" for="penaltylecturers">
                        Penalty-Lecturers
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="penaltylecturers" type="text" placeholder="Enter Amount To Pay If Returned Late" />
                </div>

                <div class="pt-6">
                    <button class="border py-1 px-4 rounded focus:outline-none inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Save</span>
                    </button>
                </div>
            </form>
            
        </div>

    )
}
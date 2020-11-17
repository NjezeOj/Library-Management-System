import React from 'react'


export const CategoryPage = () => {
    return(
        <div class="ml-40">
            <div class="bg-teal-400 text-white pt-2 pb-2">
                <p class="text-2xl pl-4">Create Book Category</p>
            </div>
            <form class="pt-2 pl-4 pb-2 bg-gray-100 border-b-8">
                <div>
                    <label class="block" for="category">
                        Category
                    </label>
                    <input class="appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Enter Category Name" />
                </div>
                <div class="pt-6">
                    <button class="border py-1 px-4 rounded focus:outline-none ">
                        Create
                    </button>
                </div>
            </form>
            <div class="mt-10 bg-gray-100 py-4">
                <div class="ml-16 pl-2 border-l-2 border-r-2 w-1/5">
                    Category
                </div> 
                <div class="border-b-2 border-teal-400 pb-4 pl-16">                                       
                </div>                
            </div>
        </div>

    )
}
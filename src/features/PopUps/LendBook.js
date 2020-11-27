import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectAllCategories, fetchCategories} from '../category/categoriesSlice'
import {selectAllUsers, fetchUsers} from '../User/UserSlice'


export const LendBook = ({ close }) => {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [callnumber, setCallNumber] = useState('')
    const [author, setAuthor] = useState('')
    const [pubyear, setPubYear] = useState('')
    const [volume, setVolume] = useState('')
    const [size, setSize] = useState('')
    const [user, setUser] = useState({})    
    const [regno, setRegNo] = useState('')
    
    /*const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [phoneno, setPhoneNo] = useState('')*/
    const [returndate, setReturnDate] = useState('')

    const onCategoryChanged = e => setCategory(e.target.value)
    const onTitleChanged = e => setTitle(e.target.value)
    const onCallNumberChanged = e => setCallNumber(e.target.value)
    const onAuthorChanged = e => setAuthor(e.target.value)
    const onPubYearChanged = e => setPubYear(e.target.value)
    const onVolumeChanged = e => setVolume(e.target.value)
    const onSizeChanged = e => setSize(e.target.value)
    
    const onSetReturnDate = (e) => setReturnDate(e.target.value)

    //const onSetName = (e) => setName(e.target.value)
    //const onSetDepartment = (e) => setDepartment(e.target.value)
    //const onSetPhoneNo = (e) => setPhoneNo(e.target.value)

    
    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)
    const users = useSelector(selectAllUsers)
    const categoryStatus = useSelector(state=>state.categories.status)
    const userStatus = useSelector(state => state.users.status)

    
    

    const onSetRegNo = (e) => {
        setRegNo(e.target.value)
        
    }
    /*function nameSetter() {
        var userObject = users.filter(el => el.regno === regno)
        setUser(...userObject)
    }*/
    

    const onLog = (e) => {
        e.preventDefault()
        console.log(users)
        var userObject = users.filter(el => el.regno === regno) 
        console.log(...userObject)
        setUser(...userObject)
        console.log(user._id)
    }
    useEffect(() => {
        if (userStatus === 'idle' && categoryStatus === 'idle' ) {
            dispatch(fetchCategories())
            dispatch(fetchUsers())
        }
    }, [categoryStatus,userStatus, dispatch])

    const lendbook = {
        category: category,

        title: title ,

        callnumber: callnumber,

        author: author,

        pubyear: pubyear,

        volume: volume,

        size: size,
    }

    return (
        <>
            <div className="bg-white">
                <div className="flex justify-between bg-teal-400">
                    <div className="flex text-black py-4 pl-8">
                        <svg className="fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-2xl -mt-2 font-bold">Lend Book</p>
                    </div>
                    <button className="focus:outline-none mr-8" onClick={close} >
                        <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="border-b-2 border-teal-400">
                </div>

                <form className="px-8 py-4 grid grid-cols-2 gap-4">
                    <div className="relative">
                        <label className="block font-bold" htmlFor="category">
                            Category
                        </label>
                        <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="category"
                            id="category"
                            type="text"
                            value={category}
                            onChange={onCategoryChanged}>
                                <option>Choose Category</option>
                            {
                                categories.map(element => {
                                    return <option key={category._id}>{element.category}</option>
                                })
                            }
                        </select>
                        <div>
                            <svg className="text-black absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="yearofpublication">
                            Year Of Publication
                    </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="pubyear"
                            name="pubyear"
                            value={pubyear}
                            onChange={onPubYearChanged}
                            type="number" 
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="title">
                            Title
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="title"
                            name="title"
                            value={title}
                            onChange={onTitleChanged}
                            type="text" 
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="volume">
                            Volume
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="volume"
                            name="volume"
                            value={volume}
                            onChange={onVolumeChanged}
                            type="text"
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="callnumber">
                            Call Number
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="callnumber"
                            name="callnumber"
                            value={callnumber}
                            onChange={onCallNumberChanged}
                            type="number" 
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>

                   

                    <div className="relative">
                        <label className="block font-bold" htmlFor="author">
                            Author
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="author"
                            name="author"
                            value={author}
                            onChange={onAuthorChanged}
                            type="text"
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="size">
                            Size
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="size"
                            name="size"
                            value={size}
                            onChange={onSizeChanged}
                            type="text" 
                            placeholder="" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="regno">
                            Student Reg/Staff Number
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="regno"
                            value={regno}
                            onChange={onSetRegNo}
                            type="text" 
                            placeholder="Reg./Staff Number" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="name">
                            Name
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name"
                            name="name"
                            value={user.name}
                            disabled
                            type="text"
                            placeholder="Auto-Generated" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div className="relative font-bold">
                        <label className="block" htmlFor="department">
                            Department
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="department"
                            type="text"
                            value={user.department}
                            disabled
                            placeholder="Auto-Generated" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="phoneno">
                            Phone Number
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="phoneno"
                            type="text"
                            disabled
                            value={user.phoneno}
                            placeholder="Auto-Generated" />
                        <svg className="text-teal-400 absolute right-0 mr-2 -mt-8 fill-current w-6 h-6"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>

                    <div className="relative">
                        <label className="block font-bold" htmlFor="duedateofreturn">
                            Due Date Of Return
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="duedateofreturn" 
                            type="date"
                            value={returndate}
                            onChange={onSetReturnDate}  
                            placeholder="" />
                    </div>
                    <div></div>

                    <div className="flex justify-end right-0 pt-6">
                        <button className="border py-1 px-4 rounded focus:outline-none">
                            <span>Cancel</span>
                        </button>

                        <button onClick={onLog} className="border py-1 px-4 rounded focus:outline-none inline-flex items-center">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Search</span>
                        </button>
                    </div>
                </form>

                <div className="border-b-2 border-teal-400">
                </div>
            </div>
        </>






    )
}
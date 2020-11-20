import React from 'react'
import {useSelector} from 'react-redux'

export const CategoriesList = () => {
    const categories = useSelector(state => state.categories)

    const renderedCategories = categories.map( category => (
        <article key={category.id}>
            <h3>{category.category}</h3>    
        </article>
    ))
    
    return (
        <section>
            <h2>Posts</h2>
            {renderedCategories}
        </section>
    )
}
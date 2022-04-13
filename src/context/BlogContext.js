import React, { useReducer } from 'react'

const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch(action.type)
    {
        case 'ADD_BLOG':
            return [ ...state, {
                                id: Math.floor(Math.random()*99999),
                                ...action.payload
                               }]
        case 'DELETE_BLOG' :
            return state.filter(blog => blog.id !== action.payload)
        case 'EDIT_BLOG' :
            return state.map(blog => {
                return blog.id === action.payload.id
                ? action.payload
                : blog
            })
        default :
            return state
    }
}

export const BlogProvider = ({ children }) => {

    const [blogs, blogDispatch] = useReducer(blogReducer, [])
    
    const addBlog = (title, content) => {
        if(title === '' && content === '')
            blogDispatch({
                type: 'ADD_BLOG',
                payload: {title: `Blog title ${blogs.length+1}`, content: `Blog content ${blogs.length+1}`}
            })
        else if(title === '')
            blogDispatch({
                type: 'ADD_BLOG',
                payload: {title: `Blog title ${blogs.length+1}`, content}
            })
        else if(content === '')
            blogDispatch({
                type: 'ADD_BLOG',
                payload: {title, content: `Blog content ${blogs.length+1}`}
            })
        else
            blogDispatch({
                type: 'ADD_BLOG',
                payload: {title, content}
            })
    }

    const deleteBlog = (id) => {
        blogDispatch({
            type: 'DELETE_BLOG',
            payload: id
        })
    }

    const editBlog = (id, title, content) => {
        const index = blogs.findIndex(blog => blog.id === id)
        if(title === '' && content === '')
            blogDispatch({
                type: 'EDIT_BLOG',
                payload: {id, title: `Blog title ${index+1}`, content: `Blog content ${index+1}`}
            })
        else if(title === '')
            blogDispatch({
                type: 'EDIT_BLOG',
                payload: {id, title: `Blog title ${index+1}`, content}
            })
        else if(content === '')
            blogDispatch({
                type: 'EDIT_BLOG',
                payload: {id, title, content: `Blog content ${index+1}`}
            })
        else
            blogDispatch({
                type: 'EDIT_BLOG',
                payload: {id, title, content}
            })
    }

    return <BlogContext.Provider value={{data: blogs, addBlog, deleteBlog, editBlog}} >
        {children}
    </BlogContext.Provider>
}

export default BlogContext

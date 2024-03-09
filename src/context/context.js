import { createContext, useContext } from "react";

export const BlogContext = createContext({
    blog: [],
    user: [],
    deleteBlog: (id) => { },
    isLoggin: false
})

export const useBlog = () => {
    return useContext(BlogContext)
}

export const BlogProvider = BlogContext.Provider
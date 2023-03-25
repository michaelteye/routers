import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


export default function Article() {
    const { id } = useParams()
    const url = `http://localhost:3000/articles/${id}`
    const {data: article, isPending, error} = useFetch(url)
    const history = useHistory()

    useFetch(()=>{
        if(error){
            setTimeout(()=>{
                history.push('/')
            },2000)
        }
    },[error])


  return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {article && (
            <div>
                <h2>{article.title}</h2>
                <h2>By {article.author}</h2>
                <h2>{article.body}</h2>

            </div>
        )}
    </div>
  )
}

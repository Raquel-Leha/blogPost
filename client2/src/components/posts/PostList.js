import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../../graphql/posts"
import { PostCard } from "./PostCard"
import "./PostList.css"
import { Pagination } from "../Pagination/Pagination"
import { useState } from "react"
import { Search } from "../search/Search"


export const PostList = () => {

    const {loading, error, data } = useQuery(GET_POSTS)
    const [valueFilter, setValueFilter] = useState("")
    
    const [dataQ, setDataQ] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    if(data) {
      console.log(data.posts.length)
    }

    const indexFin = currentPage * dataQ;
    const indexIni = indexFin - dataQ;


    const filteredValue = data.posts.filter((post) => post.title.toLowerCase().includes(valueFilter.toLowerCase()));

    const nData = filteredValue.slice(indexIni, indexFin);
    const nPages = Math.ceil(filteredValue.length / dataQ);

  return (
    <div className="container-post-list">
        <Search setValueFilter= {setValueFilter}/>
        {nData.map((post) => (
            <PostCard key={post._id} post={post} />

        ))}
        <Pagination 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        nPages={nPages}

        />
    </div>
  )
}


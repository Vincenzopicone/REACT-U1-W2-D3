import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import Loading from './Loading'
import Error from './Error'
import AddComment from "./AddComment"

const CommentArea = (props) => {
  /* state = {
    comments: [],
    isLoading: true,
    isError: false,
  } */


  const [commenti, setCommenti] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false)


/*   componentDidMount = async () => {
    this.fetchComment()
    
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComment()
      
    }
  } */

  useEffect (()=>{
    fetchComment()
  },[props.imdbID])

  const fetchComment = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          props.imdbID,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmQyNmEyNDc4ZDAwMTNhMDU4MGYiLCJpYXQiOjE2NzYzODg3MTAsImV4cCI6MTY3NzU5ODMxMH0.V__mWAWP11vX-woR8M_OvjNBskf9f2R9ejiiZ3DFFkM",
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        /* this.setState({ comments: comments, isLoading: false, isError: false }) */
        setCommenti(comments);
        setisLoading(false);
        setisError(false)
      } else {
       /*  this.setState({ isLoading: false, isError: true }) */
       setisLoading(false);
       setisError(true)
      }
    } catch (error) {
     /*  this.setState({ isLoading: false, isError: true }) */
     setisLoading(false);
     setisError(true)
    }
  }


    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <CommentList commentsToShow={commenti} />
        <AddComment imdbID={props.imdbID}/>
      </div>
    )
  }


export default CommentArea


import './App.css'
import CreatePost from './CreatePost'
import NavBar from './NavBar'
import PostBox from './PostBox'
import PostMenu from './PostMenu'
import SinglePost from './SinglePost'


function App() {


  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <CreatePost></CreatePost>
      <PostMenu></PostMenu>
      <PostBox></PostBox>
      <SinglePost data={{
        name: '',
        img: '',
        tag: '',
        comment: 0,
        date: '',
        heading: '',
        post_body: ''
      }}></SinglePost>
    </div>
  )
}

export default App

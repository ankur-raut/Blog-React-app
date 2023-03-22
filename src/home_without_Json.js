import {useState,useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [name,setName] = useState("mario");
    const [age,setAge] = useState(20);
    const [blogs,setBlogs] = useState([
        {title:'My new Website!',body:'lorem maskfbds...',author:'mario',id:1},
        {title:'Hey This is me',body:'lorem maskfbds...',author:'luigi',id:2},
        {title:'Web developers tools',body:'lorem maskfbds...',author:'mario',id:3}
    ])

    const butOnClick = ()=>{
        console.log("hey its me!");
    }
    const butOnClickAgain = (n) =>{
        console.log("heyyaa this is " + n);
    }
    const change = () =>{
        setName ('luigi');
        // setAge(25);
    }

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect ran');
        // console.log(blogs);
        console.log(name);
    },[name]);

    return ( 
        <div className="home">
            {/* <h2>Home</h2>
            <br />
            <p>{name}</p>
            <p>{age}</p>
            <br />
            <button onClick={butOnClick}>click me</button>
            <br />
            <button onClick={()=>{
                butOnClickAgain("Ankur")
            }}>click me again</button>*/}
            <br />
            <button onClick={change}>click to change text</button> 
            
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs!"/> */}
            <br />
            <br />
        </div>
     );
}
 
export default Home;
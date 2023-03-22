import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,SetAuthor] = useState('mario');
    const navigate = useNavigate();

    const hangleSubmit =(e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('blog Added');
            navigate('/');
        })
    };


    return (
        <div className="create">
            <h2>Add a blog</h2>
            <form onSubmit ={hangleSubmit}>
                <label>Blog Title:</label>
                <input 
                 type="text"
                 required
                 value={title}
                 onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                 onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange = {(e) => SetAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;
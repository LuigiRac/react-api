import { useState } from "react";
import posts from "../data/posts";

function Form() {
    const [userPosts, setUserPosts] = useState('Inserisci nuovo post')
    const [postsList, setPostsList] = useState(posts);

    function handleSubmit(e) {
        e.preventDefault();

        const newPostsList = [...postsList];
        newPostsList.push(userPosts)
        setPostsList(newPostsList)
        console.log(newPostsList)
        // const newPosts = {
        //     id: postsList.length + 1,
        //     title: userPosts,
        //     image: '',
        //     content:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        //     tags: ["html"],
        //     published: true,
        // }
        // console.log(newPosts);

    }


    return (

        <section className="input-group my-4">
            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={userPosts} onChange={(e) => setUserPosts(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit">Insert</button>
            </form>
        </section>
    )
}

export default Form
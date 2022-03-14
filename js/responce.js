import { Post, createPost } from "./index.js";
const result=[]
const getPosts = async () =>{
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
   const res = await responce.json();
   for(let i in res){result.push(new Post(res[i].title, res[i].body, res[i].id))};
   for(let i in result){createPost(result[i])};
}
 getPosts()
 
export{result};
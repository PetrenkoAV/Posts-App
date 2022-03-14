export {createPost};
export class Post{
    constructor(title, text, id){
        this.title = title,
        this.text = text,
        this.id = id
    }
}

const postContainer = document.querySelector('.post__container')

const createPost = (post) =>{
    const newDiv = document.createElement('div');
    newDiv.className = 'post';
    newDiv.innerHTML = `<h3> ${post.title}</h3><hr><p> ${post.text}</p>`
    postContainer.append(newDiv);
}

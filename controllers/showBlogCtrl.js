ShowBlogCtrl = async () => {
    const id = getParameterByName('id');
    const blogAPI = new BlogAPI
    const dataId = await blogAPI.getById(id);
    const data = dataId[0];

    document.getElementById("blog-image").src = data.image;

    document.getElementById("blog-title").innerText = data.title;

    document.getElementById("blog-subtitle").innerText = data.subTitle;

    document.getElementById("blog-visit").innerText = data.visitCount;

    document.getElementById("description").innerHTML = data.description;

}
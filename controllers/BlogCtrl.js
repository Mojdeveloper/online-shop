BlogCtrl = async () => {

    let blog = document.getElementById('blog')
    const blogAPI = new BlogAPI
    const data = await blogAPI.getAll()
    for (let index = 0; index < data.length; index++) {
        blog.innerHTML +=
            ` 
               
            <div class="blog-item">
                <a href="showBlog.html?id=${data[index].id}">
                    <img src="${data[index].image}" class="blog-image" />
                    <h3 class="blog-title">
                        ${data[index].title}
                    </h3>
                </a>
            </div>
        
            `

    }
}
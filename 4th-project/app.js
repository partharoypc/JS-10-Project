//Local Data Fetch

// const posts = [{
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 02",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 03",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 04",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 05",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     },
//     {
//         title: "This Is Main Title 01",
//         body: " This is heading"
//     }
// ];




// Fatch API

const fatchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("Data is not Fatched");
    }
}

//Selection

const postsElement = document.querySelector('.posts');

const loadAllData = async() => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });


};

loadAllData();
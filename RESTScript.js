//Clicking the first button will display all posts
document.querySelector("#button1").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((arr) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
      arr.forEach((i) => {
        let container = document.createElement("div");
        let userId = document.createElement("p");
        let postNum = document.createElement("p");
        let postTitle = document.createElement("p");
        let content = document.createElement("p");
        userId.innerHTML = "user ID: " + JSON.stringify(i.userId);
        postNum.innerHTML = "Post: " + JSON.stringify(i.id);
        postTitle.innerHTML = JSON.stringify(i.title);
        content.innerHTML = JSON.stringify(i.body);
        pageContent.appendChild(container);
        container.appendChild(userId);
        container.appendChild(postNum);
        container.appendChild(postTitle);
        container.appendChild(content);
      });
    });
});
//clicking the second button will display the post with id 10
document.querySelector("#button2").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((data) => data.json())
    .then((post10) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
        let container = document.createElement("div");
        let userId = document.createElement("p");
        let postNum = document.createElement("p");
        let postTitle = document.createElement("p");
        let content = document.createElement("p");
        userId.innerHTML = "user ID: " + JSON.stringify(post10.userId);
        postNum.innerHTML = "Post: " + JSON.stringify(post10.id);
        postTitle.innerHTML = JSON.stringify(post10.title);
        content.innerHTML = JSON.stringify(post10.body);
        pageContent.appendChild(container);
        container.appendChild(userId);
        container.appendChild(postNum);
        container.appendChild(postTitle);
        container.appendChild(content);
    });
});
// clicking the third button will create a new post with a server generated id
document.querySelector("#button3").addEventListener("click", () => {
  // fetches location
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // POST method for making a post to the server
    method: "POST",
    // create content for post
    body: JSON.stringify({
      title: "latin latin",
      body: "salve",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((newPost) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
      let post = document.createElement("p");
      post.innerHTML =
        "You have just created post #" + JSON.stringify(newPost.id);
      pageContent.appendChild(post);
    });
});
document.querySelector("#button4").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      title: "Replacing 12",
      body: "Using PUT we can replace post #12. Quite RESTful",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((new12) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
      let post = document.createElement("p");
      post.innerHTML = "This is the new post #12" + JSON.stringify(new12);
      pageContent.appendChild(post);
    });
});
document.querySelector("#button5").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Updating 12",
      body: "Using PATCH we can update post #12. Also very RESTful",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((new12) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
      let post = document.createElement("p");
      post.innerHTML = "This is the updated post #12" + JSON.stringify(new12);
      pageContent.appendChild(post);
    });
});
document.querySelector("#button6").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  })
    .then((data) => data.json())
    .then((new12) => {
      const pageContent = document.querySelector("main");
      pageContent.innerHTML = "";
      let post = document.createElement("p");
      post.innerHTML =
        "Post #12 has been successfully deleted using DELETE: " +
        JSON.stringify(new12);
      pageContent.appendChild(post);
    });
});

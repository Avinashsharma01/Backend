### i have fixed the update system

The issue might be related to how the findOneAndUpdate method is being used. Let's ensure that the findOneAndUpdate method is correctly updating the post without creating a duplicate.

Here's the updated code with comments to ensure the post is updated correctly:

Key changes:

Added { new: true } option to findOneAndUpdate to ensure the updated document is returned.
Added comments to explain each route's functionality.
This should ensure that the post is updated correctly without creating a duplicate.

```
// Route to render edit post page, only accessible if logged in
app.get("/edit/:id", isLoggedIN, async (req, res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")
    res.render("edit", { post })
})

// Route to update a post, only accessible if logged in
app.post("/update/:id", isLoggedIN, async (req, res) => {
    // Find the post by ID and update its content
    let post = await postModel.findOneAndUpdate(
        { _id: req.params.id },
        { postContent: req.body.postContent },
        { new: true } // Return the updated document
    )
    res.redirect("/profile")
})

// Route to delete a post, only accessible if logged in
app.get("/delete/:id", isLoggedIN, async (req, res) => {
    // Find the post by ID and delete it
    let post = await postModel.findOneAndDelete({ _id: req.params.id })
    res.redirect("/profile")
})

// Route to create a new post, only accessible if logged in
app.post("/post", isLoggedIN, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    let { postContent } = req.body
    // Create a new post
    let post = await postModel.create({
        user: user._id,
        postContent
    })
    // Add the post to the user's posts array
    user.posts.push(post._id)
    await user.save()
    res.redirect("/profile")
})
```

Key changes:

Added { new: true } option to findOneAndUpdate to ensure the updated document is returned.
Added comments to explain each route's functionality.
This should ensure that the post is updated correctly without creating a duplicate.

# SocialMedia/ Blog "back-end server"

- Reusable back-end code that deals with mongoDB 😄
- Scalable code that deals with code structure issues like
  - Single Responsibility👍
  - easy to change database middleware🚀️
  - easy to scale file structure❤️
- Passwords are hashed with ***JWT*** with **SECRET_KEY** "env variable"
- All user specefic actions are protected and can't be forged unless **cookie/ localstorage** is leaked
- Check **config.js** for all env variables

## Routes:

### Auth:

* [X] SignIn

```js
"/api/auth/signin" POST

{
   email:"email@host.com",
   password:"some password"

}
```

* [X] SignUp

```js
"/api/auth/signup" POST

{
   email:"email@host.com",
   password:"some password"

}
```

## Posts:

* [X] Create Post

```js
"/api/post/user/:id" POST

{
  "text": "some words in the post"
}
```

* [X] Delete Post

```js
"/api/post/:post_id/user/:id" DELETE
```

* [ ] Update Post

```js
"/api/post/:post_id/user/:id" PUT
```

* [X] Get all Posts

```js
"/api/post" GET
```

* [X] Get Post by ID

```js
"/api/posts/:post_id/user/:id"
```

* [X] Get user Post

```js
"/api/post/user/:id" GET
```

## Comments:

* [X] Create a Comment:

```js
"/api/comment/post/:post_id/user/:id" POST

{
  "text":"some comment"
}

```

* [X] Delete a Comment:

```js
"/api/comment/post/:post_id/user/:id/comment/:comment_id" DELETE
```

* [X] Update a Comment:

```js
"/api/comment/post/:post_id/user/:id/comment/:comment_id" PUT
```

* [X] Get all Comments on a Post:

```js
"/api/comment/post/:post_id" GET
```

* [X] Get user Comments on a certian Post:

```js
"/api/comment/post/:post_id/user/:id" GET
```

## Follow:

* [X] Follow a user

```js
"/api/follow/:id/:user_id" POST
```

* [X] unFollow a user

```js
"/api/follow/:id/:user_id" DELETE
```

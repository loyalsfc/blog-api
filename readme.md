# Blog API Documentation
Inspired by [@loyalsfc](https://github.com/loyalsfc)'s [twitter](https://twitter.com/lilrex_cyc).

## Base Url
https://blog-api-zpfq.onrender.com

# Table of Content

## Table of Contents

- [Authentication](#authentication)
  - [Login](#login)
  - [Register](#register)
- [Posts](#posts)
  - [Published Posts](#published-posts)
  - [Unpublished Posts](#unpublished-posts)
  - [All Posts](#all-posts)
  - [New Post](#new-post)
  - [Get Single Post](#get-single-post)
  - [Search Posts](#search-posts)
  - [Update Post](#update-post)
  - [Delete Post](#delete-post)
- [Comments](#comments)
  - [All Comments](#all-comments)
  - [Post Comments](#post-comments)
  - [New Comments](#new-comment)
  - [Delete Comments](#delete-comment)




# Authentication

## Login

Used to collect a Token for a registered User.

**URL** : `/user/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "accound_id": "[valid email address or username]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "johndoe@example.com",
    "password": "abcd1234"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1Y2IzMTQ2M2I5NGI4ZmJkMjc3OTAxNiIsInVzZXJuYW1lIjoibWlkZWJsaXNzIiwiZW1haWwiOiJtaWRlYmxpc3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkR2NyQTFRR3FTNDlWMjBCYWFDM2lHZVpuM2hzTmxJL1c0VG8ucHdyZzJocUFLRXR1UE03NGkiLCJuYW1lIjoiT2x1bWlkZSBCYW1iZSIsIl9fdiI6MH0sImlhdCI6MTcwNzgxNTI5OX0.e7Nw6O4BILDIpKIe7XbXlKqcOlB5BZaWZjV84Nmu_HB"
}
```

### Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "Invalid username or password"
}
```

## Register

Used to collect a Token for a registered User.

**URL** : `/user/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "name": "[Full Name]",
    "username": "[username in plain text]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "name": "John Doe",
    "username": "johndoe@example.com",
    "email": "john_doe",
    "password": "abcd1234"
}
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "status": 200,
    "message": "Registration Successful"
}
```

### Error Response

**Condition** : If any of the data required is missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

# Posts

## Published Posts

Used to get published posts

**URL** : `/post`

**Method** : `GET`

**Auth required** : NO

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c64cb62a03ec0967e0b8af",
        "title": "The Journey of life",
        "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
        "slug": "the-journey-of-life-1707494582024",
        "comments": [
            "65c65392d2b6904f234c8ec0",
            "65c6585a58e1c7566c9d6606"
        ],
        "status": "published",
        "createdAt": "2024-02-09T16:03:02.038Z",
        "updatedAt": "2024-02-09T16:52:42.582Z",
        "__v": 2
    },
    ...
]
```

### Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "Invalid request"
}
```

## Unpublished Posts

Use to get unpublished posts

**URL** : `/post/unpublished`

**Method** : `GET`

**Auth required** : YES

**Data constraints**

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c64cb62a03ec0967e0b8af",
        "title": "The Journey of life",
        "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
        "slug": "man-like-ebitare-1707494582024",
        "comments": [],
        "status": "unpublished",
        "createdAt": "2024-02-09T16:03:02.038Z",
        "updatedAt": "2024-02-09T16:52:42.582Z",
        "__v": 2
    },
    ...
]
```

### Error Response

**Condition** : Authentication missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

## All Posts

Used to get all posts, both published and unpublished.

**URL** : `/post/all`

**Method** : `GET`

**Auth required** : YES

**Data constraints**

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c64cb62a03ec0967e0b8af",
        "title": "The Journey of life",
        "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
        "slug": "the-journey-of-life-1707494582024",
        "comments": [],
        "status": "published",
        "createdAt": "2024-02-09T16:03:02.038Z",
        "updatedAt": "2024-02-09T16:52:42.582Z",
        "__v": 2
    },
    ...
]
```

### Error Response

**Condition** : Authentication missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

## New Post

Used to create new post.

**URL** : `/post`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{
    "title": "[post title]",
    "body": "[post content]",
    "status": "[either published or unpublished. Default to unpublished]"
}
```

**Data example**

```json
{
    "title": "The Journey of life",
    "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
    "status": "published",
},
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": "65c64cb62a03ec0967e0b8af",
    "title": "The Journey of life",
    "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
    "slug": "the-journey-of-life-1707494582024",
    "comments": [],
    "status": "published",
    "createdAt": "2024-02-09T16:03:02.038Z",
    "updatedAt": "2024-02-09T16:52:42.582Z",
    "__v": 2
},
```

### Error Response

**Condition** : Authentication missing and/or one or more data is missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occured"
}
```

## Get Single Post

Used to get a single post.

**URL** : `/post/:postId`

**Method** : `GET`

**Auth required** : NO

### Success Response

**Code** : `200 OK`

**Content example**

Set a query parameter of comment=1 to populate the comment field

```json
{
    "_id": "65c64cb62a03ec0967e0b8af",
    "title": "The Journey of life",
    "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
    "slug": "the-journey-of-life-1707494582024",
    "comments": [],
    "status": "published",
    "createdAt": "2024-02-09T16:03:02.038Z",
    "updatedAt": "2024-02-09T16:52:42.582Z",
    "__v": 2
},
```

### Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occured"
}
```

## Search Posts

Used to search posts

**URL** : `/post/search?query={searchQuery}`

**Method** : `GET`

**Auth required** : NO

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c64cb62a03ec0967e0b8af",
        "title": "The Journey of life",
        "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
        "slug": "the-journey-of-life-1707494582024",
        "comments": [
            "65c65392d2b6904f234c8ec0",
            "65c6585a58e1c7566c9d6606"
        ],
        "status": "published",
        "createdAt": "2024-02-09T16:03:02.038Z",
        "updatedAt": "2024-02-09T16:52:42.582Z",
        "__v": 2
    },
    ...
]
```

### Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "Invalid request"
}
```

## Update Post

Use to update post

**URL** : `/post/:postId`

**Method** : `PUT`

**Auth required** : YES

**Data constraints**

```json
{
    "title": "[post title]",
    "body": "[post content]",
    "status": "[either published or unpublished. Default to unpublished]"
}
```

**Data example**

```json
{
    "title": "The Journey of life",
    "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
    "status": "published",
},
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
    {
        "_id": "65c64cb62a03ec0967e0b8af",
        "title": "The Journey of life",
        "body": "Introduction:\nLife is a journey filled with twists and turns, challenges and triumphs. In the face of adversity, we are often presented with opportunities for growth and self-discovery. Join us as we embark on a transformative journey of embracing change and uncovering the depths of our inner strength.\n\nBody:\n\nNavigating Uncertainty: Change can be a daunting prospect, disrupting the familiar rhythms of our lives and leaving us feeling uncertain about the future...",
        "slug": "the-journey-of-life-1707494582024",
        "comments": [
            "65c65392d2b6904f234c8ec0",
            "65c6585a58e1c7566c9d6606"
        ],
        "status": "published",
        "createdAt": "2024-02-09T16:03:02.038Z",
        "updatedAt": "2024-02-09T16:52:42.582Z",
        "__v": 2
    },
```

### Error Response

**Condition** : Authentication missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```


## Delete Post

Use to delete post

**URL** : `/post/:postId`

**Method** : `DELETE`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
    {
        "status": 200,
        "message": "Delete successfull"
    }
```

### Error Response

**Condition** : Authentication missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

# Comments

## All Comments

Used to get all comments.

**URL** : `/comment`

**Method** : `GET`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c639356aa9c27ba1fc8a2b",
        "name": "John Doe",
        "text": "It is well and thoughfully written",
        "postId": "65c638b06aa9c27ba1fc8a28",
        "createdAt": "2024-02-09T14:39:49.344Z",
        "updatedAt": "2024-02-09T14:39:49.344Z",
        "__v": 0
    },
    ...
]
```

### Error Response

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

## Post Comments

Used to get all comments for a post.

**URL** : `/comment/:postId`

**Method** : `GET`

**Auth required** : No

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "65c639356aa9c27ba1fc8a2b",
        "name": "John Doe",
        "text": "It is well and thoughfully written",
        "postId": "65c638b06aa9c27ba1fc8a28",
        "createdAt": "2024-02-09T14:39:49.344Z",
        "updatedAt": "2024-02-09T14:39:49.344Z",
        "__v": 0
    },
    ...
]
```

### Error Response

**Code** : `400 BAD REQUEST`

**Condition** : invalid postId.

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```

## New comment

Used to create new comment.

**URL** : `/comment/:postId`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "name": "[full name]",
    "text": "[comment content]",
}
```

**Data example**

```json
{
    "Name": "John Doe",
    "text": "It is well and thoughfully written",
},
```

### Success Response

**Code** : `200 OK`

**Content example**

```json
    {
        "_id": "65c639356aa9c27ba1fc8a2b",
        "name": "John Doe",
        "text": "It is well and thoughfully written",
        "postId": "65c638b06aa9c27ba1fc8a28",
        "createdAt": "2024-02-09T14:39:49.344Z",
        "updatedAt": "2024-02-09T14:39:49.344Z",
        "__v": 0
    },
```

### Error Response

**Condition** : Invalid post id, or data missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occured"
}
```

## Delete Comment

Use to delete comments

**URL** : `/comment/delete/:commentId`

**Method** : `DELETE`

**Auth required** : YES

### Success Response

**Code** : `200 OK`

**Content example**

```json
    {
        "status": 200,
        "message": "Delete successfull"
    }
```

### Error Response

**Condition** : Authentication missing or invalid comment Id.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": 400,
    "message": "An error occurred"
}
```
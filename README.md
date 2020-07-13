
# Zyada Corp Coding Challenge

> Welcome to the Coding Challenge!

## Overview

To complete this challenge, you will need to write a simple [Next.js](https://nextjs.org/) Application, which is a [React](https://facebook.github.io/react/) framework, and provide us the source files to be built.

The purpose of this challenge is to assess your **skills and approach to composing a simple web app** given a set of screens and an API feed. 

This challenge is expected to take about 24 hours.

## The Challenge

It's pretty simple. You'll need to build a working Todo App, with user registration and login functionality.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and tested code** in the submission.

## Details

You will need to build the following 3 pages with Next and React:

- A "Login" page
- A "Registration" page
- A "Todo List" page

Please create components for each part of the page (eg. header, content, footer, etc).

The pages should also be usable on mobile and tablet devices.

### "Login" Page

This will be your home/index screen.

You will need to create a login form (email and password) with working validation that will redirect user to "Todo List page" if the user is authenticated, else display the error message to user.

### "Registration" Page

You will need to create a registration form with working validation. 
Registration form needs the following data:
- name
- email
- password
- age

### "Todo List" Page

You will need to create a todo list page that:
- Display all todos / tasks
- Show "Add Todo" Button
- Show a text area input field when user click "Add Todo" and user can save a new task / todo
- Then display the new inserted record to todo list.
- On every record of todo, show a checkbox and a delete button.
- Show a "Completed" button when user check minimum 1 checkbox, and then update the completed status of checked records when user click "Completed".
- Remove a task when user click the "Delete" button
- User can filter the todos based on completed task
- Only authorized user can access the "Todo List Page"

You will also need to handle the loading and error states of fetching the API

## FAQ

### What language, framework, build tool... should I use?

Please use our favorite [React](https://facebook.github.io/react/) Framework which is [Next.js](https://nextjs.org/)

We prefer you use [Material UI](https://material-ui.com/) as css framework. (will also help you speed up the development process)

### Where do I begin?

- Clone this repository 
- Create a new branch named ```solutions```
- Modify it with your solutions
- When you're done, you need to create a PULL REQUEST to the master branch.

Please override this `README` with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

### Where is the API?

Please refer to this API documentation:
- [Postman API Documenter](https://documenter.getpostman.com/view/5308540/T17FCpQ9?version=latest)

### How do I run this project?

Install it and run:

```sh
npm install
npm run dev
```

## Useful Links

- [Next.js](https://nextjs.org/)
- [React](https://facebook.github.io/react/)
- [Material UI](https://material-ui.com/)
- [Postman API Documenter](https://documenter.getpostman.com/view/5308540/T17FCpQ9?version=latest)

## Other Notes

Please send through any other code or projects that you're proud of and would like to share with us.

Any feedback on the coding challenge once you're done is also appreciated!

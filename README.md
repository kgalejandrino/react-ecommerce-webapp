# Nemirk Pc Build

A client side rendered React single page application, utilizing Firebase for backend.

![image](https://user-images.githubusercontent.com/48897896/219464410-5d92c7c0-8444-4279-bd10-94f148714489.png)

## Summary

This project was suppose to be my proposal to a friend who ask me to create a website for his business. But with less knowledge in back-end, I'm not just capable of builing a full stack application just yet. So the idea around this project was to create an ecommerce website and use Firebase as the database to save time and focused on the front-end logic.

Built with features of what a typical ecommerce website should have, a user can view item details, add items to the cart, and checkout items.

## What I learned

Overall, doing this project has further my understanding on React. Implementing different concepts and features React have, I was able to compare its differences and advantages. One instance is when using useState vs useReducer. I learned that when working with complex states like objects or arrays, useReducer is preferable because the parameters depends from each other and all logic can be encapsulated into one reducer.

There are different ways to manage state in React and sometimes it is code-efficient to use them. There are cases where we need to pass data between disconnected components, and we have to pass data as a prop on each level of the tree until we get to the desired component. This results in writing extra code and giving components properties that they don't need. In this project, I learned about Redux and useContext API that provides a global state where all components can directly access data no matter how deeply nested they are. Adding to this, was knowing other React Hooks and how to create custom hook to prevent code duplication.

Lastly, was learning about Single page application using React Router. It allows us to add client-side code that renders different React components when the URL changes. SPA are fast because it only loads a single HTML page and dynamically update the content as the user interacts with the application.

## Technologies Used

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,react,firebase" />
  </a>
</p>

import { writable } from "svelte/store";



export const users = writable([
    {
        id: 1,
        image : "src/assets/Images/child.png",
        name:"Tarak",
        email:"tarakmehta@gmail.com",
        active : true
    },
    {
        id:2,
        image :"src/assets/Images/lady.png",
        name:" Babita",
        email:"babita00@gmail.com",
        active : false     
    },
    {
        id:3,
        image :"src/assets/Images/man.png",
        name:"Jethalal",
        email:"gadjethalal@gmail.com",
        active : false
    },
    {
        id:4,
        image :"src/assets/Images/programmer.png",
        name:"Bhide",
        email:"atbhide@gmail.com",
        active : false
    },
    {
        id:5,
        image :"src/assets/Images/woman.png",
        name:"Daya",
        email:"dayaaa@gmail.com",
        active : true
    },
    {
        id:6,
        image :"src/assets/Images/emp.png",
        name:"Iyer",
        email:"iyer6@gmail.com",
        active : true
    }
  ]);
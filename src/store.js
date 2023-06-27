import { writable } from "svelte/store";


const path = "src/assets/";


export const users = writable([
    {
        id: 1,
        image : path + "child.png",
        name:"Tarak",
        email:"tarakmehta@gmail.com",
        active : true
    },
    {
        id:2,
        image : path + "lady.png",
        name:" Babita",
        email:"babita00@gmail.com",
        active : false     
    },
    {
        id:3,
        image : path+ "man.png",
        name:"Jethalal",
        email:"gadjethalal@gmail.com",
        active : false
    },
    {
        id:4,
        image : path + "programmer.png",
        name:"Bhide",
        email:"atbhide@gmail.com",
        active : false
    },
    {
        id:5,
        image : path + "woman.png",
        name:"Daya",
        email:"dayaaa@gmail.com",
        active : true
    },
    {
        id:6,
        image : path + "emp.png",
        name:"Iyer",
        email:"iyer6@gmail.com",
        active : true
    }
  ]);
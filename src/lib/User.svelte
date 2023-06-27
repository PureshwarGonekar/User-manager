<script>
    import { createEventDispatcher } from "svelte";
    import {slide} from "svelte/transition";

    const dispatch = createEventDispatcher();

    export let user;
    
    export let i;


    const remove = () =>{
        dispatch("remove",user.id);
    };


</script>

<div 
    
    class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative">

    <button 
        on:click={remove}
        class="absolute right-0 top-0 -mt-2 rounded-full w-4 h-4 bg-red-300 text-center items-center text-white text-sm hover:bg-red-700"><p class="-mt-0.5">X</p>
    
    </button>

    <p class="mx-4">{i+1}</p>
    <img class="rounded-full w-14 h-14 mx-4" src={user.image} alt="">
    <p class="mx-4 w-20">{user.name}</p>
    <p class="mx-4 w-20">{user.email}</p>

</div>
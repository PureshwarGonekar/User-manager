<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Model from "./Model.svelte";

    const dispatch = createEventDispatcher();

    let newUser = {};

    
    $: disableSubmitButton = !newUser.name || !newUser.email;

    let showModel = false;


    function handleForm(){
        // console.log(newUser);
        dispatch("newUser",newUser);
        showModel =!showModel;
    }

</script>
<div class="mt-4">
    <button 
    on:click={() => showModel =true}
    class="px-4 py-2 bg-blue-800 text-white rounded cursor-pointer hover:bg-blue-700">New User</button>

    <Model on:close= {()=>(showModel=false)}
    on:submit={handleForm} show={showModel}>
    <h1 class="text-2xl text-center">Create New User</h1>
    <div class="py-1 px-2 my-4">
        <label for="name" class="w-10">Name</label>
        <input bind:value={newUser.name} type="text" name="name" class="px-2 py-1 mx-5 rounded border">
    </div>
    <div class="py-1 px-2 my-4">
        <label for="email" class="w-10">Email</label>
        <input bind:value={newUser.email} type="text" name="email" class="px-2 py-1 mx-5 rounded border">
    </div>
    <div class="py-1 px-2 my-4 flex justify-between">
        <label for="active" class="w-10">Active:</label>
        <div class="flex">
            <label for="true">Yes</label>
            <input bind:group={newUser.active} type="radio" value="true" name="active" class="px-2 py-1 mx-5 rounded border mx-5">

            <label for="false">No</label>
            <input bind:group={newUser.active} type="radio" value="false" name="active" class="px-2 py-1 mx-5 rounded border mx-5">

        </div>
    </div>
    <div class="py-1 px-2 my-4 flex justify-between">
        <label for="gender" class="w-10">Gender:</label>
        <div class="flex">
            <label for="true">Male</label>
            <input bind:group={newUser.image} type="radio" value="src/assets/man.png" name="gender" class="px-2 py-1 mx-5 rounded border mx-5">

            <label for="false">Female</label>
            <input bind:group={newUser.image} type="radio" value="src/assets/woman.png" name="gender" class="px-2 py-1 mx-5 rounded border mx-5">

        </div>
    </div>

    <button 
        type="submit" 
        disabled={disableSubmitButton}
        id="submit-button" 
        slot="right-button" 
        class="px-2 py-1 bg-blue-800 text-white rounded cursor-pointer hover:bg-blue-700">Create</button>
    </Model>
</div> 
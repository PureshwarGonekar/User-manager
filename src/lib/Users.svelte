<script>
  import FilterUser from "./FilterUser.svelte";
  import NewUser from "./NewUser.svelte";
  import User from "./User.svelte";
  import {tweened} from "svelte/motion";
  import {cubicIn} from "svelte/easing";
  import {users} from '../store';
  import { onMount } from "svelte";
  import {flip} from "svelte/animate";

  $: filteredUsers = $users; // React variable whenever change in users automativally update in filteredUsers

  const filter = ({detail}) =>{
    if(detail === "null"){
        filteredUsers= $users;
        return;
    }

    const active = detail === "true";
    filteredUsers = $users.filter((user) => user.active === active)
  }

  const remove = ({detail}) =>{
      $users = $users.filter((user) => user.id != detail);
  };


  const add = ({detail}) =>{
    // console.log(detail);
    $users = [
      {
      id:$users.length +1,
      ...detail,
      image: "src/assets/Images/man.png"
      }, 
      ...$users
    ];
  }

  const progress = tweened(0,{
    duration : 1000,
    easing: cubicIn,
  });

  onMount(() => {
    progress.set(filteredUsers.length)
  });
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List Of Users</h1>

  <div class="flex justify-between mx-4 items-center">
    <FilterUser on:filter={filter}></FilterUser>


    <NewUser on:newUser={add}></NewUser>

  </div>

  <progress max="10" value={$progress} class="w-full mx-4 my-2" />
  {#each filteredUsers as user, i(user.id)}
    <div animate:flip>

        <User on:remove={remove} {user} {i}></User>
    </div>
    {:else}
        <p>No user found</p>
  {/each}
</div>
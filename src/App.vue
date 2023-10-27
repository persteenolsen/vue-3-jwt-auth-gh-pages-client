<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <div class="app-container bg-light">
	    
		
		 <!--Note: User not logged in - a dropdown menu by bootstrap-->
		 <nav v-show="!authStore.user" class="navbar navbar-expand-lg navbar-dark bg-dark" >
		 
		   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"             aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
			
			 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		 
              <div class="navbar-nav">
			
				<RouterLink to="/about" class="nav-item nav-link">About this Vue App</RouterLink>	
				
                <RouterLink to="/login" class="nav-item nav-link">Login</RouterLink>
                				
             </div>
			
		  </div>
			
        </nav>
	
	
	    <!--Note: User logged in - here the dropdown menu could have a different design - if wanted-->
		<nav v-show="authStore.user" class="navbar navbar-expand-lg navbar-dark bg-dark" >
		     
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
			
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			 
              <div class="navbar-nav">
			
                <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
                <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
				
             </div>
			
		 </div>
		 
        </nav>
		
        <div class="container pt-4 pb-4">
            <RouterView />
        </div>
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>
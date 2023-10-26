<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <div class="app-container bg-light">
	    
		 <nav v-show="!authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
			
				<RouterLink to="/about" class="nav-item nav-link">About this Vue 3 App</RouterLink>	
				
                <RouterLink to="/login" class="nav-item nav-link">Login</RouterLink>
                				
            </div>
        </nav>
	
        <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
			
                <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
                <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
				
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
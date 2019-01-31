<template>
  <div id="app">
<nav class="navbar navbar-expand-lg">
  <ul class="navbar-nav">
    <li class="nav-item">
        <router-link class="nav-link" to="/">Accueil</router-link>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Sign up</a>
    </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
          <img src="./assets/logo.svg" class="rounded" alt="avatar image" height="55">
      </li>
    </ul>
</nav>
	<router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Railway';
  src: local('../font/Railway.otf');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-brand {
  width: 150px;
  display: relative;
  right: 200px;
}
h1{
	margin-bottom: 100px;
	margin-top: 50px;
}
.nav-item::after{
    content:'';
    display:block;
    width:0px;
    height:4px;
    background:#86d2f7;
    transition: 0.2s;
    margin-top:-10px;
}

.nav-item:hover::after{width:100%;}


.nav-link{padding:15px 5px;transition:0.2s;}

.navbar-nav .nav-link {
    
    color:#000;
    font-weight:bold;
    font-size:18px;
}

.navbar-nav .active > .nav-link{
  
    width:100%;
    height:51px;
    
  border-bottom: .25rem solid transparent;
  border-bottom-color: #86d2f7;
   
}
</style>

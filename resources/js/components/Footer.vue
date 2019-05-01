<template>
	<div>
		 <div id="wrapper">

        <!-- Sidebar -->
        <ul class="sidebar navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
              <!-- <h6 class="dropdown-header">Login Screens:</h6> -->
              <a class="dropdown-item" href="login.html">Quản lí User</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Charts</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="fas fa-fw fa-table"></i>
              <span>
              <router-link :to="{ name: 'list' }">Quản lí user</router-link></span></a>
          </li>
        </ul>
      </div>
	</div>
</template>
<template id="user-list">
  <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark static-top" style="margin-bottom: 0">

        <a class="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

        <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar Search -->
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        <!-- Navbar -->
        <ul class="navbar-nav ml-auto ml-md-0">
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bell fa-fw"></i>
              <span class="badge badge-danger">9+</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-envelope fa-fw"></i>
              <span class="badge badge-danger">7</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user-circle fa-fw"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <a class="dropdown-item" href="#">Settings</a>
              <a class="dropdown-item" href="#">Activity Log</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" v-if="$auth.check()" @click.prevent="$auth.logout()" >Logout</a>
            </div>
          </li>
        </ul>

      </nav>

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
              <router-link :to="{ name: 'list' }">Quản lí nhân viên</router-link></span></a>
          </li>
        </ul>
    
    <div style="border: 1px solid #e7ecf1; margin-left: 19px; height: 660px; margin-top: 24px;  width: 100%">
        <div class="alert alert-success" v-if="success">
            <router-link :to="{name:'list'}"></router-link></p>
        </div>
        <div class="caption" style="font-size: 18px; margin-left: 39px; margin-top: 20px; color: #007bff;">
            <i class="fa fa-home" aria-hidden="true"></i>
            <a>  Trang chủ </a>
            <a> &nbsp;/&nbsp; <router-link :to="{ name: 'list' }">Quản lí nhân viên</router-link> </a>
            &nbsp;/&nbsp; Tạo mới nhân viên

        </div>
        <hr style="margin-left: 39px">
        <h2 style="margin-top: 37px; text-align: center;">Thêm mới user</h2>
        <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post" style="border: 1px solid white; width: 960px; margin-left: 99px;">
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.name }">
                <label for="name">Name (<span style="color: red">*</span>)</label>
                <input type="text" id="name" class="form-control" placeholder="Nhập name" v-model="name" >
                <span v-if="error && errors.name" style="color: red">{{ errors.name }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
                <label for="email">E-mail (<span style="color: red">*</span>)</label>
                <input type="email" id="email" class="form-control" placeholder="Nhập user@example.com" v-model="email" >
                <span  v-if="error && errors.email" style="color: red">{{ errors.email }}</span>
            </div>  
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.mobile }">
                <label for="mobile">Mobile (<span style="color: red">*</span>)</label>
                <input type="mobile" id="mobile" class="form-control" placeholder="Nhập số điện thoại" v-model="mobile" >
                <span  v-if="error && errors.mobile" style="color: red">{{ errors.mobile }}</span>
            </div>  

            <div class="form-group" v-bind:class="{ 'has-error': error && errors.address }">
                <label for="address">Địa chỉ (<span style="color: red">*</span>)</label>
                <input type="address" id="address" class="form-control" placeholder="Nhập địa chỉ" v-model="address" >
                <span  v-if="error && errors.address" style="color: red">{{ errors.address }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                <label for="password">Password (<span style="color: red">*</span>)</label>
                <input type="password" id="password" class="form-control" placeholder="*******" v-model="password" >
                <span  v-if="error && errors.password" style="color: red">{{ errors.password }}</span>
            </div>
            <button type="submit" class="btn btn-primary" style="text-align: center;">Thêm mới</button>
        </form>
    </div>
        <!-- /.content-wrapper -->

      </div>
      <!-- /#wrapper -->

      <!-- Scroll to Top Button-->
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>

      <!-- Logout Modal-->
      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a class="btn btn-primary" v-if="$auth.check()" @click.prevent="$auth.logout()" href="#" >Logout</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script> 
    export default {
        data(){
            return {
                name: '',
                email: '',
                mobile: '',
                address: '',
                password: '',
                error: false,
                errors: {},
                success: false
            };
        },
        methods: {
            register(){
                var app = this
                this.$auth.register({
                    params: {
                        name: app.name,
                        email: app.email,
                        mobile: app.mobile,
                        address: app.address,
                        password: app.password
                    }, 
                    success: function () {
                        app.success = app.$router.push('/list');
                    },
                    error: function (resp) {
                        app.error = true;
                        app.errors = resp.response.data.errors;
                    },
                    redirect: null
                });                
            }
        }
    }
</script>



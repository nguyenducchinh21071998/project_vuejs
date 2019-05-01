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

      <div class="row" style="border: 1px solid #e7ecf1; margin-left: 19px; height: 660px; margin-top: 24px;  width: 81%">
        <div class="caption" style="font-size: 18px; margin-left: 39px; margin-top: 20px; color: #007bff;">
            <i class="fa fa-home" aria-hidden="true"></i>
            <a>  Trang chủ </a>
            <a> &nbsp;/&nbsp; Quản lý nhân viên </a>

        </div>
        <hr style="margin-left: 39px">
        <button type="submit" class="btn btn-success" style="margin-top: -129px; height: 39px; float: left; margin-right: 643px; margin-left: 31px"><router-link :to="{ name: 'create-user' }"><p style=" color: #f2f5f9 !important;">Thêm mới</p></router-link></button>

        <table class="table table-hover" style="border: 1px solid #000; margin-left: 19px; margin-top: -237px; margin-right: 20px">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Họ và tên</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in filteredUser">
                  <td>{{index + 1}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.mobile}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.address}}</td>
                  <td>
                    <router-link :to="{name: 'EditUser', params: {id: user.id}}" class="btn btn-xs btn-primary">
                        Sửa
                    </router-link>
                    <!-- <router-link :to="{path: 'EditUser', params: {id: user.id}}" class="btn btn-xs btn-default">
                        Quyền hạn
                    </router-link> -->
                    <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(user.id, index)">
                        <i class="fa fa-trash-o" aria-hidden="true"></i> Xóa
                    </a>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
      </div>

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
        data: function () {
            return {
                filteredUser: []
            }
        },
        mounted() {
            var app = this;
            Axios.get('/admin/list-user')
                .then(function (resp) {
                    app.filteredUser = resp.data;
                })
                // .catch(function (resp) {
                //     console.log(resp);
                //     alert("Could not load companies");
                // });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Bạn có chắc chắn muốn xóa ?")) {
                    var app = this;
                    // alert()
                    Axios.delete('/delete-user/' + id)
                        .then(function (resp) {
                            app.filteredUser.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Xóa thành công");
                        });
                }
            }
        }
    }
</script>



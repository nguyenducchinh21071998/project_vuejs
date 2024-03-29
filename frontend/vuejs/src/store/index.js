function page(path) {
  return () => import(`@/views/${path}`).then(m => m.default || m);
}

export default [
  {
    path: '/',
    component: {
      render(c) {
        return c('router-view');
      }
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        meta: {
          layout: 'MainLayout'
        },
        component: page('User/DashBoard.vue')
      },
      {
        path: 'login',
        name: 'user.login',
        meta: {
          layout: 'GuestLayout'
        },
        component: page('User/Auth/Login.vue')
      },
      {
        path: '/employees/',
        component: {
          render(c) {
            return c('router-view');
          }
        },
        children: [
          {
            path: '/',
            name: 'Employees',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Employees/ListEmployee.vue'),
          },
          {
            path: 'create',
            name: 'CreateEmployee',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Employees/CreateEmployee.vue'),
          },
          {
            path: 'detail/:id',
            name: 'Employee',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Employees/EmployeeInformation.vue'),
          },

          {
            path: 'update/:id',
            name: 'Update Employees',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Employees/UpdateEmployee.vue'),
          },
          {
            path: 'resignation',
            name: 'EmployeeResignationIndex',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Employees/ListEmployeeResignation.vue'),
          },
        ]
      },
      {
        path: '/customers',
        component: {
          render(c) {
            return c('router-view');
          }
        },
        children: [
          {
            path: '/',
            name: 'Customers',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Customers/ListCustomer.vue'),
          },
          {
            path: 'create',
            name: 'Customer Create',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Customers/CreateCustomer.vue'),
          },
          {
            path: ':id',
            name: 'Customer Detail',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Customers/CustomerDetail.vue'),
          },
          {
            path: ':id/edit',
            name: 'Customer Edit',
            meta: {
              layout: 'MainLayout',
            },
            component: page('User/Customers/EditCustomer.vue'),
          }
        ]
      }
    ]
  }
];

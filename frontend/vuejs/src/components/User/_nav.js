export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/',
                icon: 'cil-bar-chart'
            },
            {
                _name: 'CSidebarNavTitle',
                _children: ['Management']
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Employees',
                to: '/employees',
                icon: 'cil-address-book',
                items: [
                    {
                        name: 'List Employees',
                        to: '/employees'
                    },
                    {
                        name: 'Employee Resignation',
                        to: '/employees/resignation'
                    },
                    {
                        name: 'CreateEmployee',
                        to: '/employees/create'
                    }
                ]
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Customers',
                to: '/customers',
                icon: 'cil-address-book',
                items: [
                    {
                        name: 'List Customers',
                        to: '/customers'
                    },
                    {
                        name: 'Create Customer',
                        to: '/customers/create'
                    }
                ]
            },
        ]
    }
];

<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>Users
                    <RouterLink to="/user/create" class="btn btn-primary" float-end> 
                        Add User
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Cpf</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>

  <script>
    import axios from 'axios'

    export default {
    name: 'users',
    data() {
        return {
        users: []
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers() {
        axios.get('http://127.0.0.1:8000/users/', { timeout: 10000 })
            .then(res => {
            console.log(res)
            })
            .catch(err => {
            console.error('Error:', err)
            });
        }
    },
    }

</script>
<template>
    <div class="container">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h4>Users</h4>
                <RouterLink to="/user/create" class="btn btn-primary" float-end> 
                    Add User
                </RouterLink>
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
                    <tbody v-if="this.users.length > 0">
                        <tr v-for="(user, index) in this.users" :key="index">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.age }}</td>
                            <td>{{ user.cpf }}</td>
                            <td>{{ user.address }}</td>
                            <td>{{ user.status }}</td>
                            <td>{{ user.creation_date }}</td>
                            <td class="d-flex gap-3">
                                <RouterLink :to="{path: '/user/' + user.id + '/edit'}" class="btn btn-success mr-3"> 
                                    Edit
                                </RouterLink>
                                <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="8">
                                Loading...
                            </td>
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
                this.users = res.data
                //console.log(this.users)
            })
            .catch(err => {
                console.error('Error:', err)
            });
        },

        deleteUser(userId) {
        axios.delete(`http://127.0.0.1:8000/users/${userId}/`)
        .then(res => {
            alert('User deleted successfully');
            this.$router.push('/users');
        })
        .catch(error => {
            console.error('There was an error deleting the user:', error);
            alert('Failed to delete the user');
        },)
        },
    },
}
</script>
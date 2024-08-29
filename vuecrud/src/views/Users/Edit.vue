<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Users</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>

                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.user.name" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Age</label>
                    <input type="text" v-model="model.user.age" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">CPF</label>
                    <input type="text" v-model="model.user.cpf" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Address</label>
                    <input type="text" v-model="model.user.address" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Status</label>
                    <input type="text" v-model="model.user.status" class="form-control"/>
                </div>
                <div class="mb-3">
                    <button type="button" @click="updateUser(this.$route.params.id)" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'userEdit',
    data() {
        return {
            errorList: {},
            model: {
                user: {
                    name: '',
                    age: '',
                    cpf: '',
                    address: '',
                    created_at: ''
                }
            }
        }
    },
    mounted() {
        this.getUserData(this.$route.params.id)
    },
    methods: {
        getUserData(userId) {
            axios.get(`http://127.0.0.1:8000/users/${userId}/`)
            .then(res => {
                console.log(res.data)

                if (res.data) {
                    this.model.user = res.data
                } else {
                    console.error('User data is not available:', res.data)
                }
            })
            .catch(error => {
                console.error("Error fetching user data:", error)
            })
            .catch(function(error) {
                if (error.response) {
                    if(error.response.status == 404) {
                        alert(error.response.data.message)
                    }
                }
            })
        },

        updateUser(userId) {
            var $this = this;

            axios.put(`http://127.0.0.1:8000/users/${userId}/`, this.model.user)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                this.errorList = '';
            })
            .catch(function(error) {
                if (error.response) {
                    if(error.response.status == 422) {
                        $this.errorList = error.response.data.errors;
                    }
                    if(error.response.status == 404) {
                        alert(error.response.data.message);
                    }
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            });
        }
    }
}
</script>
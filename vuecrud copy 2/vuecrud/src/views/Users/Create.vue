<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Users</h4>
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
                    <button type="button" @click="saveUser" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'userCreate',
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
    methods: {
        saveUser() {

            var $this = this

            axios.post('http://127.0.0.1:8000/users/', this.model.user)
            .then(res => {
                console.log(res)
                alert(res.data.message)
                this.model.user = {
                    name: '',
                    age: '',
                    cpf: '',
                    address: '',
                    created_at: ''
                }
                this.errorList = ''
            })
            .catch(function(error) {
                if (error.response) {
                    if(error.response.status == 422) {
                        $this.errorList = error.response.data.errors
                    }
                    //console.log(error.response.data);
                    //console.log(error.response.status);
                    //console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                }
            })
        }
    }
}
</script>
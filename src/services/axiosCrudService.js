import axios from "axios";


/**
 *login method to ReqRes endpoint
 * @params { string } email
 * @params { string } password
*/



export const login = (email, password) => {

    let body= {
        email: email,
        password: password
    }

    // Return the response with a promise
    return axios.post('https://reqres.in/api/login', body)
}

// Obtain all Users

export const getAllUsers = () =>{
    return axios.get('https://reqres.in/api/users')
}

// Obtain all Paged Users

export const getAllPagedlUsers = (page) =>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// Obtain User by id
export const getUserByID = (id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create User

export const createUser = (name, job) => {
    let body= {
        name: name,
        job: job
    }

    // Return the response with a promise
    return axios.post('https://reqres.in/api/users', body)
}

// Update User

export const updateUserByID = (id, name, job) => {
    let body= {
        name: name,
        job: job
    }

    // Return the response with a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}
// Delete User

export const deleteUserByID = (id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
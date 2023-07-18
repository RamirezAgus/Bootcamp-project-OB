import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login, getAllUsers, getAllPagedlUsers, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCrudService';

const AxiosCrudExample = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')        
        }
    );

    const authUser = (values) => {
        login(values.email, values.password)
        .then((response) => {
            if(response.data.token){
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token', response.data.token)
            }else{
                sessionStorage.removeItem('token')
                throw new Error('Login Error')
            }
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
            sessionStorage.removeItem('token')
        })
        .finally(() => console.log('Login done'))
    }

    // CRUD Examples

    const obtainAllUsers = () => {
        getAllUsers()
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('No User Found')
            }
            
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }
    
    const obtainAllPagedUsers = (page) => {
        getAllPagedlUsers(page)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error(`No Users Found: ${page}`)
            }
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('User not found')
            }
            
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
        .then((response) => {
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not created')
            }
            
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
        .then((response) => {
            if(response.data && response.status === 200){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not found and not updated')
            }
            
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
        .then((response) => {
            if(response.status === 204){
                alert(`User id: ${id} deleted`)
            }else{
                throw new Error('No user found and no deleted done')
            }
            
        })
        .catch((error) => {
            alert(`Something went worng: ${error}`)
        })
    }

    return (
        <div>
            <h4>Login Form</h4>
            <Formik 
                // *** Initial values that the Form will take ***
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = { loginSchema }
                // *** OnSubmit Event ***
                onSubmit={async (values) => {
                    authUser(values)
            }}
            >

            {/*We obtain props from Formika*/}


            {({ values,
                errors, 
                touched, 
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <label htmlFor='email'>First Name</label>
                        <Field id='email' type='email' name='email' placeholder='example@email.com'/>
                        {/*Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'/>     
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field
                            id='password'
                            name='password'
                            placeholder='password'
                            type='password'
                        />
                        {/*Password Errors */}
                        {
                            errors.password && touched.password && 
                            (
                                <ErrorMessage name='password' component='div'/>  
                            )
                        }
                        <button type='submit'>Login</button>
                        { isSubmitting ? (<p>Login your credentials...</p>) : null }
                    </Form>
            )}
            </Formik>
            {/*Example Buttons to test API response */}
                        <div>
                            <button onClick={obtainAllUsers}>All User with Axios</button>
                            <button onClick={() => obtainAllPagedUsers(1)}>All Paged User (Page 1) with Axios</button>
                            <button onClick={() => obtainUserByID(1)}>Get User 1</button>
                            <button onClick={() => createNewUser('morpheus', 'leader')}>Create User</button>
                            <button onClick={() => updateUser(1,'morpheus', 'Developer')}>Update User</button>
                            <button onClick={() => deleteUser(1)}>Delete User</button>
                        </div>
        </div>
    );
}

export default AxiosCrudExample;

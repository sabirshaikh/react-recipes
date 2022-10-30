import React, {useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
const checkRequests= Wrapped => {
    function CheckRequests(props) {
        useEffect(()=>{
            axios.interceptors.request.use(function (config) {
                return config;
            }, function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                })
                return Promise.reject(error);
            });

            axios.interceptors.response.use(function (response) {
                console.log("response:", response)
                return response;
            }, function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                })
                return Promise.reject(error);
            });
        })

        return (
            <Wrapped {...props} />
        )
    }
    return CheckRequests
}

export default checkRequests;
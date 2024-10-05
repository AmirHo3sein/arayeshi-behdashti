export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
    return useFetch(request, {
        baseURL: config.public.BASE_URL,

        onRequest({request, options}) {
            // Set the request headers
            // options.headers = {
            //     'Content-Type': 'application/json'
            //
            // }
            // options.headers= {token:  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InVzZXItYWNjZXNzLTMtN3l2OGhtbWswdnhlcXZneiIsInVpZCI6IjMiLCJpYXQiOjE2ODEzMDM1NTQsImV4cCI6MTY4MjUxMzE1NCwidHlwZSI6ImFjY2VzcyJ9.OPFl_4QYT2vKkQy2_el8x_v_tfBJjn_xdjZONxhAXOY'}
        },
        onRequestError({request, options, error}) {
            // Handle the request errors
            console.log('onRequestError', request, options, error)

        },
        onResponse({request, response, options}) {
            // Process the response data
            return response._data
        },
        onResponseError({request, response, options}) {

            console.log(request, response, options)
            // Handle the response errors
            if (response.status === 401) {
                console.log('Unauthorized - Removing auth token')
                const userToken = useCookie('authToken')
                userToken.value = null
                console.log(userToken)

                // Remove the token from the cookie

                // Optionally, redirect the user to the login page
                // useRouter().push('/login') // Uncomment this line to redirect
            }
        },
        ...opts
    })
}
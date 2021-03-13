const auth = require("../routes/auth");
const fetch = require('node-fetch');
fetch.Promise = require("bluebird");


const URL = "http://localhost:8080"
const email = "test@test.com";
const password = "password";
const username = "test";


const SignUpReq = {
    username,
    email,
    password
} 

const SignInReq = {
    email,
    password
}

const deleteUserReq = {
    email,
    password,
}

beforeAll(done =>{
    jest.useFakeTimers();
    done();
});

afterAll(done => {
    done();
});

jest.setTimeout(10000)

test("Create a new user", async () => {
    const status =  await fetch(URL + "/api/auth/signUp", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(SignUpReq)
    })
    .then(res => res.status)
    await expect(status).toBe(201);
})

test("SignIn with user", async () => {
    let status =  await fetch(URL + "/api/auth/signin", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(SignInReq)
    })
    .then(res => res.status)
    await expect(status).toBe(200);
})

test("Delete the user", async () => {
    const status =  await fetch(URL + "/api/auth/deleteUser", {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer I-AM-THE-ADMIN-:p'
        },
        body:JSON.stringify(deleteUserReq)
    })
    .then(res => res.status)

    await expect(status).toBe(200);
})

test("SignIn with the deleted user", async () => {
    let status =  await fetch(URL + "/api/auth/signin", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(SignInReq)
    })
    .then(res => res.status)
    await expect(status).toBe(400);
})
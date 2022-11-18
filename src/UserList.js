import React, { Component } from 'react'
import axios from 'axios'
import UserDetails from './UserDetails'

export default class UserList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             userid: 0
        }
    }

    componentDidMount = () =>{
        this.getUserData()
    }
    
    //Get Users
    getUserData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>  { 
            console.log(res.data)
            this.setState({...this.state, users : res.data})
        })
    }

    //Create New User
    createNewUser = () =>{
        const newUser = {
            name:'Pritesh Patel',
            email:"p@p.com"
        }
        axios.post("https://jsonplaceholder.typicode.com/users", { newUser })
        .then(res => console.log(res))
    }

    //Get User By ID
    getUserDataByID = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  { 
            console.log(res.data)
        })
    }

    //read User ID 
    readUserID = e =>{
        this.setState({...this.state, userid: e.target.value})
    }

     //Get User By ID NEW
     getUserByID = () => {
        this.getUserDataByID(this.state.userid)
    }

    //Get User By ID
    deleteUserDataByID = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  { 
            console.log(res.data)
            let userList = this.state.users.filter(u => {
                return u.id !== id
            })

            this.setState({...this.state, users: userList})
        })
    }

    render() {
        return (
            <div>
                
                <button onClick={this.createNewUser}>Create New User</button>
                <button onClick={this.getUserData}>Get Users</button>
                {
                    this.state.users.map(u => (
                        <>
                            <UserDetails key={u.id} user = {u}/>
                            <button onClick={ (e) => this.getUserDataByID(u.id)}>Get Users By ID</button>
                            <button onClick={ (e) => this.deleteUserDataByID(u.id)}>Delete</button>
                        </>
                    ))
                }
                <input onChange={this.readUserID} type="text" placeholder="Enter User ID"/>
                <button onClick={ this.getUserByID }>Get By ID</button>
            </div>
        )
    }
}


//rcc then enter
import React, { Component } from 'react'

import {Card, Form, Button} from 'react-bootstrap'

export default class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            card: this.props.data
        }
    }

    handleChange = (e) =>{
        e.preventDefault()
        // this.setState({userInput: e.target.value})
        //got rid of this state, it checking in props instead of just checking e.target.value was causing it to lag when presenting results

        const filteredArr = this.props.data.filter((obj) => {
            //this is filtering through jsondata and for each object, first
            //check if there's anything in the 'search'bar, and if searchbar is empty
            if(e.target.value === ''){
                //if searchbar is empty, just return the obj
                return obj
                //if the searchbar has something in it, check if the obj.username includes whatever is typed in the searchbar, if it does, return the obj
            }else if(obj.username.toLowerCase().startsWith(e.target.value.toLowerCase())){
                return obj
                //.includes() is nice, but doesn't get rid of words with e.target.value included in the username however, .startsWith is just the usernames that starts with it and i don't know which one would be best for our purposes?
            }
            //after it filters through the obj with obj.usernames that contain letters from the searchbar, it maps through filteredJsonData and renders a card with the info on it
        })
        this.setState({card: filteredArr})
        // this.props.data.filter((obj) => {
        //     if(this.state.searchTerm === ''){
        //         return obj
        //     }else if(obj.username.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
        //         return obj
        //     }
        // })
        // this.setState({cards: filteredData}, console.log(this.state.cards))
        


        //when user types into search field, update cards: this.props.data., i'm gonna wanna filter through data and return a new array with the results i filtered for
        //.search() method returns an index value position of the first match, regex
        //.map() returns new array 
        //.filter() filters results by some parameter and returns new array
        //maybe i can use the spread operator ... so, let spreadUsername = [...obj.username] ?
        //then spreadUsername.map(letter => letter === e.target.value ? )
        // const spreadInput = [...e.target.value] //yes, doing what i want it to, nope, converts it from a string to an object when running typeof()
        // const input = e.target.value
        // const spreadInput = [...input]

        // this.props.data.filter(obj => {
        //     //for each object in the jsonData, create a variable for spread obj.username,
        //     let spreadUsername = [...obj.username]
        //     //let spreadUsername = [...obj.username]
        //     //map through each letter in spreadUsername
        //     spreadUsername.map(letter =>)
        //     //spreadUsername.map(letter => {
        //         //if letter === input
        //     })
        // })

        //this is only returning an array that matches exactly, i need it to match letter by letter 
        //i need it to filter the spread obj.username by letter
        //so [...obj.username] returns an array with the username spread by letters
        //so maybe do a map method after that
        //for each [...obj.username].map(letter => letter === spreadInput)
        //each letter in that map i need to check if it matches its consequent spreadInput letter
        //i can't leave it as is b/c it's checking if each individual letter matches the array of letters that is spreadINput...

        // const filteredArr = this.props.data.filter(obj => [...obj.username] === spreadInput)
        // const filteredArr = this.props.data.filter(obj => [...obj.username] === spreadInput)

        // this.setState({cards: filteredArr}, console.log(this.state.cards))
        // console.log(`FilteredArr: ${filteredArr}`)

        //e.target.value needs to be spread also, so if [...e.target.value] === [...obj.username]

        // let searchedUsername = this.props.data.search(/e.target.value/i)
        // const newCards = this.props.data.filter(obj => obj.searchedUsername)

        //okay, i want to filter through jsonData and check each obj.username if it === 


        // {this.props.data.filter((obj) => {
        //     //this is filtering through jsondata and for each object, first
        //     //check if there's anything in the 'search'bar, and if searchbar is empty
        //     if(this.state.userInput === ''){
        //         //if searchbar is empty, just return the obj
        //         return obj
        //         //if the searchbar has something in it, check if the obj.username includes whatever is typed in the searchbar, if it does, return the obj
        //     }else if(obj.username.toLowerCase().includes(this.state.userInput.toLowerCase())){
        //         return obj
        //     }
        //     //after it filters through the obj with obj.usernames that contain letters from the searchbar, it maps through filteredJsonData and renders a card with the info on it
        // }).map((obj) => {
        //     return <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title>{obj.name}</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">Username: {obj.username}</Card.Subtitle>
        //         <Card.Text>Email: {obj.email}<br/> City: {obj.address.city}
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
        // })}
        //this techniclly works, but it isn't exact, for example
        //if i wanted to find antonette...
        //if i type 'ant'
        //i get antonette, samantha, moriah.stanton
        //because they all include 'ant'
        //how do i only show results if it starts with it?
        // i could just use the .startsWith( )method instead of the .includes()method...
    }

    render() {
    return (
        <>
        <Form>
            <Form.Group>
            <Form.Label>Search by Username </Form.Label>
            <Form.Control type='text' placeholder='&#x1F50D;Search...' onChange={this.handleChange}></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>

        {this.state.card.map((obj) => {
            return <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Username: {obj.username}</Card.Subtitle>
                <Card.Text>Email: {obj.email}<br/> City: {obj.address.city}
                </Card.Text>
            </Card.Body>
        </Card>
        })}
        </>
    )
    }
}

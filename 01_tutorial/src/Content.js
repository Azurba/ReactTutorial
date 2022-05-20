import { useState } from "react"


const Content = () => {
    /*
    State variable. The first variable will hold the current state of 
    any given time. The second variable will update the first one
    The default state is given in the parameter of useState()
    */
    const [name, setName] = useState('Joao')


    //function definition inside another function
    //This function will update the state by calling the setName
    const handleNameChange = () => {
        const names = ['Joao','Henrique', 'Pimenta', 'Giudice']
        const int = Math.floor(Math.random() * 4)
        setName(names[int]);
      }

    const handleClick = () => {
        console.log("You Clicked It")
    }
    //with a parameter
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }
    //handle event - e for event. Print the event (the click)
    const handleClick3 = (e) => {
        console.log(e)
    }

    return(
        <main>
            <p>
                Hello {name}
            </p>
            <button onClick={handleNameChange}>
                Update name
            </button>
            <button onClick={() => handleClick2('Button 2')}>
                Click It 2
            </button>
            <button onClick={(e) => handleClick3(e)}>
                Click It 3
            </button>
            
        </main>
    )
}

export default Content
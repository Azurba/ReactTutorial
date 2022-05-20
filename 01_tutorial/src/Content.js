const Content = () => {
    //function definition inside another function
    const handleNameChange = () => {
        const names = ['Joao','Henrique', 'Pimenta', 'Giudice']
        const int = Math.floor(Math.random() * 4)
        return names[int];
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
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClick}>
                Click It
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
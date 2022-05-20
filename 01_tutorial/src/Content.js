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
        </main>
    )
}

export default Content
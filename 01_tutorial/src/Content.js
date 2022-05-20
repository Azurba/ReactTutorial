const Content = () => {
    //function definition inside another function
    const handleNameChange = () => {
        const names = ['Joao','Henrique', 'Pimenta', 'Giudice']
        const int = Math.floor(Math.random() * 4)
        return names[int];
      }

    return(
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
        </main>
    )
}

export default Content
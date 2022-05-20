const Header = () => {
    //Variable CSS - just add the variable name in the style brackets
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    };
    //inline CSS
    return(
        <header style={headerStyle}>
            <h1>
                Groceries List
            </h1>
        </header>
    )
}

export default Header
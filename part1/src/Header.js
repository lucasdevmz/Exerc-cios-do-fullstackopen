const Header = (props) => {
    console.log(props.course);
    return(
        <header>
            <h1>{props.course}</h1>
        </header>
    )
}
export default Header;
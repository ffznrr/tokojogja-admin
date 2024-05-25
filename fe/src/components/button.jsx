const Button = (props) => {
    const { text, onclick, className } = props;
return(
    <button className={className} onClick={onclick} >{text}</button>
)
}



export default Button
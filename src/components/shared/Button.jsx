
const Button = (props) => {
  return (
    <button className={`px-8 py-3 rounded-xl overflow-hidden cursor-pointer transition-transform focus:outline-2 focus:outline-offset-2 focus:outline-red-500 focus:scale-125`+ props.className} onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button;
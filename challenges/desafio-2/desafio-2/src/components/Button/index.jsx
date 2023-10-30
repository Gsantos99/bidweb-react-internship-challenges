import './style.css'

const Button = ({ title, classe = 'button', onClick, cor }) => {
  return (
    <>
      <button
        className={classe}
        onClick={onClick}
        style={{ backgroundColor: cor }}
      >
        {title}
      </button>
    </>
  )
}

export default Button

Button.propTypes = {
  title: String | null,
  classe: String | null,
  onClick: Function,
  cor: String | Function
}

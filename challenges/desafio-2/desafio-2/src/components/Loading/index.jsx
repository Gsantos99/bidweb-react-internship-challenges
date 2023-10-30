import ReactLoading from 'react-loading'
import './style.css'

const Loading = props => (
  <div className="container">
    <ReactLoading
      type={props.type}
      color={props.color}
      height={667}
      width={375}
      className="load"
    />
  </div>
)

Loading.propTypes = {
  type: String,
  color: String
}

export default Loading

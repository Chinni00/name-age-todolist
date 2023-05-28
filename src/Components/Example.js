import ReactDOM from 'react-dom'

 const Example = (props) => {
  return (
    ReactDOM.createPortal(<p>Example {props.item}</p>,document.getElementById('portal'))
  )
}
export default Example;

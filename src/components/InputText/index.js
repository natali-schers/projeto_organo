import './style.css';

const InputText = (props) => {
    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type='text'/>
        </div>
    )
}

export default InputText;
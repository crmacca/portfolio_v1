const CM_Button = ({label, handleClick, classLabel}) => {
    return (<button onClick={handleClick} className={`px-3 py-1 font-inter light ${classLabel}`}>{label}</button>)
}

export default CM_Button
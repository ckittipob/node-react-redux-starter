import React from 'react'


interface IProps {
    onClick: any,
    onSubmit: any
}
const Temp:React.FC<IProps> = ({onClick, onSubmit}) => {
    return (
        <div >
            <div className="yo" onClick={onClick}>
            <p>sawasdee</p>
            </div>
            <form className="ye" action="" onSubmit={onSubmit}></form>
        </div>
    )
}

export default Temp

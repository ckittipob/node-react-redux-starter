import React from 'react'
import { connect } from 'react-redux'
import {openModal} from '../../../app/actions/modal';
import LoginForm from '../auth/LoginForm';
interface IProps {
    openModal(content: any): any;
}

const Modal: React.FC<IProps> = ({
    openModal
}) => {

    return (
        <div>
            <button onClick={()=> openModal(<p>TEST A</p>)}>OPEN A</button>
            <button onClick={()=> openModal(<p>TEST B</p>)}>OPEN B</button>
            <button onClick={()=> openModal(<LoginForm />)}>Login</button>
        </div>
    )
}

export default connect(null, { openModal })(Modal)

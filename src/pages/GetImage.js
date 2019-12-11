import React from "react";
import { connect } from 'react-redux';

import statics from '../statics';

import SelectImage from '../components/SelectImage';

const mapStateToProps = state => ({ ...state });

const GetImage = props => {
    const onChangeHandler = e => {
        const { value, name } = e.target;

        props.dispatch({ type: statics.SET, value: { [name]: value } });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        props.history.push("/show");
    };

    return (
        <div>
            Select Image from Library:
            <SelectImage {...props} />
            <br />
            - OR -
            <br />
            <br />
            Enter Url to Image:
            <div>
                <input
                    name="imageUrl"
                    value={props.imageUrl}
                    onChange={onChangeHandler}
                />
                &nbsp;
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(GetImage);


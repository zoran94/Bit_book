import React from "react";

const RegisterInfo = (props) => {


    return (
        <>
            <div className="registerinfo">
                {props.registerUi && <h2>BitBook Register</h2>}
                <h2>BitBook Login</h2>
                <br />
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged.

            </p>
                </div>
            </div>
        </>
    )
}



export default RegisterInfo;

import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
        );
    };

    return (
        <>
            <div className='contact'>
                <div className="py-5">
                    <h2 className="text-center">Contact Us</h2>
                </div>
                <div className="container contact_wrapper">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit} className='pb-5 d-inline-block w-100'>

                                <div className="form-outline mb-3">
                                    <input type="text"
                                        id="form4Example1"
                                        className="form-control"
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                        placeholder="Full name" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="number"
                                        id="form4Example1"
                                        className="form-control"
                                        name="phone"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Phone" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="email"
                                        id="form4Example2"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="Email" />
                                </div>

                                <div className="form-outline mb-3">
                                    <textarea className="form-control"
                                        id="form4Example3"
                                        rows="4"
                                        name="msg"
                                        value={data.msg}
                                        onChange={InputEvent}
                                        placeholder="Message" >
                                    </textarea>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block mb-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
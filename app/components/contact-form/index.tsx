import React from 'react';
import {useForm, ValidationError} from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xwkdvdbl");


    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={"mb-2"}>
                <p className="text-sm py-2">Email</p>
                <input
                    name={"address"}
                    placeholder={"Email"}
                    id="address"
                    className="px-6 rounded-md py-2 bg-white border-2 w-full"
                />
                <input
                    className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6 hidden`}
                    placeholder={"Email"}
                    id="email"
                    value="christelletchoupe@yahoo.fr"
                    disabled
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className={"mb-2"}>
                <p className="text-sm py-2">Message</p>
                <textarea
                    cols={4}
                    rows={6}
                    id="message"
                    name="message"
                    className="px-6 rounded-md py-1 bg-white border-2 w-full"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className="flex flex-row space-x-4 items-center justify-end my-6">
                <div className="flex justify-center items-center w-28">
                    <button
                        className="font-semibold text-sm"
                    >
                        Annuler
                    </button>
                </div>
                <div className="md:w-[14rem]">
                    <button
                        aria-label="search"
                        disabled={state.submitting}
                        className="bg-orange rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold"
                    >
                        Valider
                    </button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
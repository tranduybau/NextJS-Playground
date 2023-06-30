"use client";

import { useCallback, useEffect, memo } from "react";

const FAKE_DATA = {
    fName: "Normal",
    lName: "Form",
    guest: 5,
    date: "2021-10-10",
    time: "12:00",
    radio1: "no",
};

function Form() {
    const onChange = useCallback((event) => {
        console.log(`🆘 src/components/Form/index.jsx`); // eslint-disable-line
        console.log(event); // eslint-disable-line
        console.log("%c => event ", "background: #0095FF; color: #fff"); // eslint-disable-line
    }, []);

    const onSubmit = useCallback((event) => {
        event.preventDefault();

        console.log(`🆘 src/components/Form/index.jsx`); // eslint-disable-line
        console.log(event); // eslint-disable-line
        console.log("%c => event ", "background: #0095FF; color: #fff"); // eslint-disable-line

        const form = new FormData(event.target);

        console.log(`🆘 src/components/Form/index.jsx`); // eslint-disable-line
        console.log(form); // eslint-disable-line
        console.log('%c => form ', 'background: #0095FF; color: #fff'); // eslint-disable-line

        const data = Object.fromEntries(form.entries());

        console.log(`🆘 src/components/Form/index.jsx`); // eslint-disable-line
        console.log(data); // eslint-disable-line
        console.log('%c => data ', 'background: #0095FF; color: #fff'); // eslint-disable-line
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const keys = Object.keys(FAKE_DATA);
            const form = document.getElementById("NormalForm");

            keys.forEach((key) => {
                const input = form.elements[key];

                if (input) {
                    input.value = FAKE_DATA[key];
                    // input.dispatchEvent(new Event("change"));
                }
            });
        }, 1000);
    }, []);

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={onSubmit} id="NormalForm">
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="First Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder="Last Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="guest"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            How many guest are you bringing?
                        </label>
                        <input
                            type="number"
                            name="guest"
                            id="guest"
                            placeholder="5"
                            min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Are you coming to the event?
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton1"
                                    className="h-5 w-5"
                                    value="yes"
                                />
                                <label
                                    htmlFor="radioButton1"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio1"
                                    id="radioButton2"
                                    className="h-5 w-5"
                                    value="no"
                                />
                                <label
                                    htmlFor="radioButton2"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(Form);

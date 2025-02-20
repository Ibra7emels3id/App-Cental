import React from 'react';

const FormMessage = () => {
    return (
        <form className="mt-12 space-y-3 max-w-xl mx-auto text-gray-800">
            <input
                type="text"
                placeholder="Name"
                className="w-full border py-2.5 px-4 text-sm focus:border-blue-600 outline-none"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full border py-2.5 px-4 text-sm focus:border-blue-600 outline-none"
            />
            <input
                type="email"
                placeholder="Phone No."
                className="w-full border py-2.5 px-4 text-sm focus:border-blue-600 outline-none"
            />
            <textarea
                placeholder="Message"
                rows={6}
                className="w-full border px-4 text-sm pt-3 focus:border-blue-600 outline-none"
                defaultValue={""}
            />
            <button
                type="button"
                className="text-white w-full bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2.5 !mt-6"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="currentColor"
                    className="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                >
                    <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                    />
                </svg>
                Send Message
            </button>
        </form>
    );
}

export default FormMessage;

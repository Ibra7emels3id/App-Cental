import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div
                className="w-12 h-12 border-4 border-t-red-500 border-gray-300 rounded-full animate-spin"
            ></div>
        </div>
    );
}

export default Loading;

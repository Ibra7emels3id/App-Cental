import React from 'react';

const Location = () => {
    return (
        <div className='my-10'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13707.684222733014!2d31.227790001172004!3d30.804848092788927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bfbf3771fd09%3A0x432f8e65fe8a1efe!2sMit%20Ashna%2C%20Aga%2C%20Dakahlia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2ssa!4v1740073348402!5m2!1sen!2ssa"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full'
            />

        </div>
    );
}

export default Location;

import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="grid grid-rows-[30px_200px_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
            <p className='text-2xl font-bold row-start-1 mt-14'>
                Welcome to ArtClock!
            </p>
            <div className="flex flex-col w-full max-w-2xl mx-auto p-4 bg-background ">
            <p>
                This app is designed to help painters and artists
                improve their skills by providing timed references for practice. Whether
                you're working on quick sketches or refining your ability to capture
                details under time constraints, ArtClock is here to support your artistic
                journey.
            </p>
            <p>
                <br />
                Set a session time, choose your reference, and start creating. ArtClock is
                the perfect tool for honing your craft and building confidence in your artistic
                abilities.
            </p>
            </div>
        </div>
    );
};

export default AboutPage;
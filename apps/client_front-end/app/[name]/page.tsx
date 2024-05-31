import React from 'react';

interface PageProps {
    params: {
        name: string;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    return (
        <div>
            <h1>Hello {params.name}</h1>
        </div>
    );
}

export default Page;

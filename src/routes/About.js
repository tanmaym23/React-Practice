import React from 'react';
    import { useParams } from "react-router-dom";
function About() {
    const [userID, aadhar] = useParams();

    return (
        <div>
            about
        </div>
    )
}

export default About
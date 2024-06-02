import React from 'react';
import ReactDOM from 'react-dom/client';

const CourseGreeting = ({courseName,courseDuration}) => {
    return (<div>
        <span>
            <h1 className='heading'>Welcome to {courseName} Course, Duration : {courseDuration} days</h1>
        </span>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CourseGreeting courseName="React" courseDuration="45"/>);
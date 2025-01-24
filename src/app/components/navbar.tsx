import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>Federation Internationale de l'Automobile</li>
                    <li>F1®</li>
                    <li>F2™</li>
                    <li>F3™</li>
                    <li>F1® ACADEMY</li>
                    <li>Authentics</li>
                    <li>Store</li>
                    <li>Tickets</li>
                    <li>Hospitality</li>
                    <li>Experiences</li>
                    <li>F1® TV</li>
                    <li>Sign In</li>
                    <li>Subscribe</li>
                </ul>
            </nav>
            <nav className="navbar">
                <ul>
                    <li><img src="/path/to/logo.png" alt="Formula 1 Logo" className="logo" /></li>
                    <li>Formula 1</li>
                    <li>Latest</li>
                    <li>Video</li>
                    <li>F1 Unlocked</li>
                    <li>Schedule</li>
                    <li>Results</li>
                    <li>Drivers</li>
                    <li>Teams</li>
                    <li>Gaming</li>
                    <li>Live Timing</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
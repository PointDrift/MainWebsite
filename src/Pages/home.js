import React from 'react';
function Home() {
    return (
        <main>
            <section style={{
                minWidth:"100vw"
            }}>
                <h1 style={{
                    maxWidth:"75vw"
                }}>
                    Changing how we think about code through AI computing
                </h1>
                <a href="https://forms.gle/g378D2EMSFTQ3bjd8" target="_blank">
                    <button className="waitlistButton">
                        Join the Waitlist
                    </button>
                </a>
            </section>
        </main>
    );
}

export default Home;
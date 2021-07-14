import React from "react";
import MainRoute from "routing/MainRoute";
import { ToastContainer, Slide } from "react-toastify";

function App() {
    return (
        <div className="App">
            <MainRoute></MainRoute>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                transition={Slide}
                style={{
                    fontSize: 16,
                }} 
            />
        </div>
    );
}

export default App;

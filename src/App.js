import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import NeuInput from "./neuwidget/NeuInput";
import NeuCard from "./neuwidget/NeuCard";
import NeuButton from "./neuwidget/NeuButton";

function App() {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const [showModal, setShowModal] = useState(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.js</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}
            <div>
                <h1>拟态风格示例</h1>
                <div>
                    {showModal && (
                        <NeuCard onClose={toggleModal} content={<ModalContent/>}/>
                    )}
                </div>
                <div>
                    <NeuButton text={"点击我"}/>
                </div>
            </div>
        </div>
    );
}

const ModalContent = () => {
    return (
        <div>
            <h2>Hello, I'm a modal card!</h2>
            <p>This is some content inside the modal card.</p>
        </div>
    );
};

export default App;

import React from "react";
import Input from "./components/elements/input";

const AppRoot = () => {
    const handleChange = (e: any) => {
        console.log(e.target.value);
    };
    return (
        <div className="App">
            <div style={{ padding: 40 }}>
                {/*<Input label="Email" className="test" name="user" onChange={handleChange} />*/}
                <Input label="Email" error={"there's some error"} className="test" name="user" onChange={handleChange} />
            </div>
        </div>
    );
};

export default AppRoot;

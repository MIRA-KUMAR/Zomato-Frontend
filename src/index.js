import React from "react";
import ReactDOM from "react-dom";
import { AppBar } from '@mui/material';
import { margin } from "@mui/system";
import { auto } from "@popperjs/core";

function App() {
    const [name, setName] = React.useState('');

    return (
        <div>
            <AppBar style = {{height:50}}>
                <h1 style = {{margin: '0 auto'}}>Welcome to Zomato App!</h1>
            </AppBar>
        </div>
        
    )
}

        

ReactDOM.render(<App />, document.getElementById("root"));
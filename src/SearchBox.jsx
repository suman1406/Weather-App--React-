import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {

    let [city, setCity] = useState("");

    let handleChange = () => {
        setCity(event.target.value);
    }

    let handleSubmit = () => {
        event.preventDefault();
        console.log;
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} required onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}
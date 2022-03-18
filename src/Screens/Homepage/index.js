import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Homepage() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(true); // 1 => value, 2 => function to change the value
    const [location, setLocation] = React.useState('');
    const [locations, setLocations] = React.useState([]);
    const [search, setSearch] = React.useState('');

    // componentDidMount
    React.useEffect(() => {
        async function loadData() {
            const { data } = await axios.post('http://localhost:3000/search/aggs', { type: 'location' });
            setLocations(data);
        }
        loadData().then(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading....</div>;
    }

    return (
        <Grid container>
            <Typography variant='h2'>ZOMATO</Typography>
            <Typography variant='p'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt, omnis deserunt quod non consequatur at repellat et quisquam est autem magnam quam ratione fugit ex quaerat explicabo sapiente! Veniam!    
            </Typography>
            <Grid container>
                <FormControl style={{ width: '100px' }}>
                    <InputLabel id="location">Location</InputLabel>
                    <Select
                        labelId="location"
                        id="location-select"
                        value={location}
                        label="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        {
                            locations.map(loc => (
                                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <TextField 
                    id="search"
                    label="Search"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
            </Grid>
            <Grid container>
                <Button variant='outlined' onClick={() => navigate('/auth')}>Login</Button>
                <Button variant='contained' color='secondary'>Signup</Button>
            </Grid>
        </Grid>
    )
}

export default Homepage;

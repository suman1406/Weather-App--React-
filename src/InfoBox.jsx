import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox() {
    const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    // Assuming you have the weather data in the result object
    const result = {
        city: "City Name", // replace with actual city name
        country: "Country Code", // replace with actual country code
        temperature: 25.85, // replace with actual temperature
        description: "Light Rain", // replace with actual description
        icon: "10d" // replace with actual icon code
    };

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {result.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {result.description}, {result.temperature}°C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

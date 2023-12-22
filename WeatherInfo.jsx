// WeatherInfo.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function WeatherInfo({ info }) {
  let img_url="https://images.unsplash.com/photo-1702098122484-4738c3b4c4c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let cold_img="https://cdn.pixabay.com/photo/2018/03/30/14/34/landscape-3275504_640.jpg";
  let hotimg="https://www.narcity.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNTk4Mjk5NC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTYzMjM2ODUzMn0.FHXb4DAzNJDeP7o1XxTdeghPpkEuHm3x_T2w1_Eijtc/image.jpg?width=1245&quality=85&coordinates=0%2C51%2C0%2C51&height=700";
  let rainimg="https://th.bing.com/th/id/OIP.bBBHQObecwG5D0ovlhLvSwHaE8?rs=1&pid=ImgDetMain";
  
  return (
    <>
      <div className='cardcontainer'>
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?rainimg:info.temp>20?hotimg:cold_img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon ></ThunderstormIcon>: info.temp > 20 ? <WbSunnyIcon ></WbSunnyIcon>: <AcUnitIcon></AcUnitIcon>}


            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature: {info.temp}</p>
              <p>Max temperature: {info.tempmax}</p>
              <p>Min temperature: {info.tempmin}</p>
              <p>Humidity: {info.humidity}</p>
              <p>Weather: {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

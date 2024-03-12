import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Button,
} from "@mui/material";

const ServiceCard = ({ data }) => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: "cover",
        flexDirection: { xs: "column", md: "row" },
        marginBottom: "20px",
        height: { xs: "auto", md: "330px" },
        borderRadius:"16px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chip
            sx={{
              bgcolor: "#fff",
              fontSize: "18px",
              fontFamily: "Outfit",
              color: "#0EAD69",
              width: 45,
              mb: "20px",
            }}
            label={6}
          />
          <Typography
            mb={3}
            textAlign="left"
            variant="h2"
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#fff"
            }}
          >
            {data.title}
          </Typography>
          <Typography
            mb={3}
            variant="body2"
            textAlign="justify"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {data.description}
          </Typography>
          <Button
            variant="outlined"
            tabIndex={-1}
            startIcon={
              <CardMedia
                component="img"
                image="/icons/rocket.png"
                sx={{ width: 24, height: 24 }}
                alt="icon"
              />
            }
          >
            <Typography variant="body2">Explore our station</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

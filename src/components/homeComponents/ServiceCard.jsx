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
        border: "1px solid #5c5c5c",
        height: { xs: "auto", md: "330px" },
        borderRadius: "20px",
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
            label={data.id}
          />
          <Typography
            mb={3}
            textAlign="left"
            variant="h2"
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#fff",
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

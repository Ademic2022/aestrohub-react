import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/system";
import Button from "@mui/material/Button";
import { Container, CardMedia } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Services",
  "Blog",
  "Launchpad",
  "About Us",
  "Contact Us",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image="/images/logo.png"
          alt="Logo"
          sx={{ width: "150px", height: "60px", my: 0, objectFit: "cover" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="xl" sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{
          mt: "15px",
          px: { xs: "auto", md: 5 },
          backgroundColor: "transparent",
          "&.MuiToolbar-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              image="/images/logo.png"
              alt="Logo"
              sx={{ width: "150px", height: "60px", my: 0, objectFit: "cover" }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              bgcolor: alpha("#fff", 0.1),
              border: "1px solid #F2F2F21A",
              boxShadow: "0px 10px 25px 0px #00000026",
              borderRadius: "12px",
              gap: 3,
              border: "1px",
              height: "48px",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" }, px: 2 }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#000", px: 2 }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Container>
  );
}

export default DrawerAppBar;

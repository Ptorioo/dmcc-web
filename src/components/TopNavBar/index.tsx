import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import dmcc from "../../assets/DMCC.webp";

const DiscordIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </SvgIcon>
);

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1, height: "8vh" }}>
      <HideOnScroll>
        <AppBar position="fixed" sx={{ bgcolor: "#80818a" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{
                mr: 2,
                width: { xs: 24, sm: 32, md: 40 },
                height: { xs: 24, sm: 32, md: 40 },
              }}
            >
              <Box
                component="img"
                src={dmcc}
                alt="dmcc"
                sx={{
                  width: { xs: 24, sm: 32, md: 40 },
                  height: { xs: 24, sm: 32, md: 40 },
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              component="span"
              sx={{ flexGrow: 1, fontSize: { xs: 15, md: 20, lg: 25 } }}
            >
              NTU DMCC
            </Typography>
            <Link
              href={"https://www.youtube.com/@ntudmcc8980"}
              color="inherit"
              target="_blank"
            >
              <Button
                color="inherit"
                sx={{
                  width: { xs: "30px", sm: "80px", md: "100px" },
                }}
              >
                <YouTubeIcon sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }} />
              </Button>
            </Link>
            <Link
              href={"https://discord.gg/M5DkGX8bDz"}
              color="inherit"
              target="_blank"
            >
              <Button
                color="inherit"
                sx={{
                  width: { xs: "30px", sm: "80px", md: "100px" },
                }}
              >
                <DiscordIcon sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }} />
              </Button>
            </Link>
            <Link
              href={"https://www.facebook.com/NTUDigitalMusic"}
              color="inherit"
              target="_blank"
            >
              <Button
                color="inherit"
                sx={{
                  width: { xs: "30px", sm: "80px", md: "100px" },
                }}
              >
                <FacebookIcon sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }} />
              </Button>
            </Link>
            <Link
              href={"https://www.instagram.com/ntudmccmusic/"}
              color="inherit"
              target="_blank"
            >
              <Button
                color="inherit"
                sx={{
                  width: { xs: "30px", sm: "80px", md: "100px" },
                }}
              >
                <InstagramIcon sx={{ fontSize: { xs: 20, md: 25, lg: 30 } }} />
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
}

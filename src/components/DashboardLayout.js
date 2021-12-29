import { useState } from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutContainer = experimentalStyled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = experimentalStyled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDesktopNavOpen, setDesktopNavOpen] = useState(true);

  const DashboardLayoutWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 100,
    [theme.breakpoints.up("xs")]: {
      paddingTop: 70,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 80,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 90,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 100,
      paddingRight: isDesktopNavOpen ? 256 : 0,
    },
  }));

  return (
    <DashboardLayoutRoot>
      <DashboardNavbar
        onMobileNavOpen={() => setMobileNavOpen(true)}
        onDesktopNavOpen={() => setDesktopNavOpen(!isDesktopNavOpen)}
      />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        onDesktopClose={() => setDesktopNavOpen(true)}
        openDesktop={isDesktopNavOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;

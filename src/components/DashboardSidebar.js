import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  Target as LuckyWheelIcon,
  ShoppingCart as ShopIcon,
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";
import {
  SportsEsportsOutlined as GameIcon,
  LeaderboardOutlined as LeaderBoardIcon,
} from "@material-ui/icons";
import NavItem from "./NavItem";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const items = [
  {
    href: "/app/lucky-wheel",
    icon: LuckyWheelIcon,
    title: "گردونه",
  },
  {
    href: "/app/games",
    icon: GameIcon,
    title: "بازی‌ها",
  },
  {
    href: "/app/leader-board",
    icon: LeaderBoardIcon,
    title: "تابلو امتیازات",
  },
  {
    href: "/app/shop",
    icon: ShopIcon,
    title: "فروشگاه",
  },

  {
    href: "/app/products",
    icon: ShoppingBagIcon,
    title: "محصولات",
  },
  {
    href: "/app/account",
    icon: UserIcon,
    title: "حساب کاربری",
  },

  {
    href: "/login",
    icon: LockIcon,
    title: "ورود",
  },
  {
    href: "/register",
    icon: UserPlusIcon,
    title: "ثبت نام",
  },
  {
    href: "/404",
    icon: AlertCircleIcon,
    title: "صفحه خطا",
  },
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "داشبورد",
  },
  {
    href: "/app/customers",
    icon: UsersIcon,
    title: "مشتریان",
  },
  {
    href: "/app/settings",
    icon: SettingsIcon,
    title: "تنظیمات",
  },
];

const DashboardSidebar = ({
  onMobileClose,
  openMobile,
  onDesktopClose,
  openDesktop,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    } else if (openDesktop && onDesktopClose) {
      onDesktopClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: "pointer",
            width: 64,
            height: 64,
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="right"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="right"
          onClose={onDesktopClose}
          open={openDesktop}
          variant="persistent"
          PaperProps={{
            sx: {
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              width: 256,
              top: 95,
              height: "calc(100% - 95px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  onDesktopClose: PropTypes.func,
  openDesktop: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;

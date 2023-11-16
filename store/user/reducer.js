import { SELECTED_USER_TYPE } from "./constants";

import {
  UserManagement,
  ArtistNav,
  InvestorNav,
  BusinessNav,
  manageInvestments,
  media,
} from "../../components/marketNav/sideNav";

const initialState = {
  selectedUser: "Investor",
  navigationOptions: {
    detail: "Investor",
    text: "investor",
    options: ArtistNav,
    image: "/assets/investor_icon.svg",
    link: "/investor",
  },
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_USER_TYPE:
      const roles = {
        Artist: {
          detail: "Artist",
          text: "artist",
          options: ArtistNav,
          image: "/assets/artist_icon.svg",
          link: "/artist",
        },
        Business: {
          detail: "Business",
          text: "business",
          options: BusinessNav,
          image: "/assets/business_icon.svg",
          link: "/myBusiness",
        },
        Investor: {
          detail: "Investor",
          text: "investor",
          options: InvestorNav,
          image: "/assets/investor_icon.svg",
          link: "/investor",
        },
        UserManagement: {
          detail: "Admin",
          options: UserManagement,
          image: "/assets/admin_icon.svg",
        },
        Admin: [],
      };
      roles.Admin = {
        userOptions: {
          title: "",
          options: [roles.Artist, roles.Investor, roles.Business],
        },
        adminOptions: {
          options: [roles.UserManagement],
          title: "Admin",
        },
        link: "/admin",
        text: "admin",
        image: "/assets/admin_icon.svg",
      };

      return {
        ...state,
        selectedUser: action.payload,
        navigationOptions: roles[action.payload],
      };

    default:
      return state;
  }
};

export default users;

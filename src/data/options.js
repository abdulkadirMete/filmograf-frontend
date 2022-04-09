import { colors } from "../styles/variables";
import { strings } from "./text";
// item per page
export const moviePerPage = 20;
export const slidePerSlider = 16;

// item per filter types
export const typeLimitFilter = 16;
export const releaseLimitFilter = 30;

export const dropdownScrollAmount = 350;

// imdb options
export const imdbOptions = [
  { label: "9 ve üzeri", value: 9 },
  { label: "8 ve üzeri", value: 8 },
  { label: "7 ve üzeri", value: 7 },
  { label: "6 ve üzeri", value: 6 },
  { label: "5 ve üzeri", value: 5 },
  { label: "4 ve üzeri", value: 4 },
  { label: "3 ve üzeri", value: 3 },
];

// release dates
export const startDate = 1978;
export const endDate = parseInt(new Date().getFullYear());
export const years = Array.from(
  { length: endDate - startDate + 1 },
  (_, k) => endDate - k
);

// movie info guide
export const movieBottomGuide = [
  {
    isArray: false,
    heading: "Yönetmen:",
    title: "director",
  },
  {
    isArray: true,
    heading: "Oyuncular:",
    title: "cast",
  },

  {
    isArray: false,
    heading: "Tür:",
    title: "type",
  },

  {
    isArray: true,
    heading: "Kategori: ",
    title: "categorys",
  },

  {
    isArray: true,
    heading: "Dil: ",
    title: "langs",
  },
];

// rating options
export const ratingOptions = {
  count: 10,
  size: 36,
  color2: colors.colorMobileBlue,
};

// paginate options
export const paginateSettings = {
  previousLabel: strings.paginateButtonPrevious,
  nextLabel: strings.paginateButtonNext,
  pageClassName: "pageItem",
  previousClassName: "previous",
  nextClassName: "next",
  activeClassName: "active",
  pageLinkClassName: "link",
  disabledClassName: "disabled",
  pageLimit: 3,
};

// custom toast options
export const customToast = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  limit: 2,
  theme: "dark",
};

// slider options
export const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

// scroll options
export const scrollSettings = {
  offset: 0,
  align: "top",
  duration: 300,
  ease: "linear",
};

// default profil photo

export const defaultPhoto =
  "https://www.computerhope.com/jargon/g/guest-user.jpg";
export const defaultMoviePhoto =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

// api url options
export const baseApiUrl = "http://localhost:8800";

export const getRawImageFromApiUrl = `${baseApiUrl}/uploads/`;

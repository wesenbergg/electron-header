// This is the default theme
// Override any of these values by passing object into TitleBar Element via the theme property
export const headerTheme = {
  menu: {
    // palette: theme.palette.type,
    // style: state.menuStyle,
    // header: {
    //   show: state.subLabels,
    // },
    // list: {
    //   background: theme.palette.background.default
    // },
    // item: {
    //   active: {
    //     background: theme.palette.secondary.light
    //   }
    // }
  },
  bar: {
    palette: 'light',
    background: '#555e',
    borderBottom: '',
    icon: {
      width: 18,
      height: 18
    },
    button: {
      active: {
        color: '#fff',
        background: '#fff'
      }
    },
    title: {
      color: '#fff'
    }
  },
  // controls: { // EI TOIMI
  //   normal: {
  //     color: "#f00"
  //   },
  //   hover: {
  //     color: "#000",
  //     background: "#000"
  //   }
  // }
}
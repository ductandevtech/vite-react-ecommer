

// theme.js
const themeConfig = {
  token: {
    fontFamily: 'Roboto, sans-serif',
    bodyBgLayout:'#ffffff',
    colorBgContainer: '#ffffff'
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerHeight: 80,
      footerBg:'#ffffff'
    },
    Carousel: {
      dotColor: '#1890ff',
      dotActiveColor: '#40a9ff',
      autoplaySpeed: 3000,
      arrowSize: 40,
      arrowOffset: 120,
      dotActiveWidth: 20
    }
  }
}

export default themeConfig

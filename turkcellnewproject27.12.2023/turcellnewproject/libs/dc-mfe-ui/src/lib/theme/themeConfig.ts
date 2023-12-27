import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41e',
  },
  components: {
    Button: {
      borderRadius: 10,
      fontSize: undefined,
      fontWeight: undefined,
      lineHeight: undefined,
      fontFamily: 'GreycliffCF Normal, Helvetica, sans-serif',
    },
    Layout: {
      headerHeight: 16,
    },
  },
};

export default theme;

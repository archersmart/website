import React from 'react';
import { enquireScreen } from 'enquire-js';
import Header from '../../Home/Header';
import Banner from '../../components/Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './page3';
import Page4 from './page4';
import Footer from '../../Home/Footer';
import './static/style';
// import Background from '../../components/Background';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
    if (typeof document !== 'undefined') {
      document.title = 'ArcherSmart AI';
    }
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner 
          key="banner" 
          isMobile={this.state.isMobile} 
          navToShadow={this.navToShadow}
          logo="AI Infra (LLMOS)"
          slogan="面向企业的 AI 基础设施"
        />,
        // <Background key="background" />,

        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" isMobile={this.state.isMobile} />,
        <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,
        <Footer key="footer" />,
      ]
    );
  }
}
export default Home;

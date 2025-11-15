import React from 'react';
import { enquireScreen } from 'enquire-js';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Page1 from './Page1';
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
          slogan="客户案例"
        />,
        // <Background key="background" />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Footer key="footer" />,
      ]
    );
  }
}
export default Home;

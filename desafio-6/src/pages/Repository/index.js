/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    // eslint-disable-next-line no-restricted-syntax
    title: navigation.getParam('item').owner.login,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    const repoLink = navigation.getParam('item').html_url;

    return <WebView source={{ uri: repoLink }} style={{ flex: 1 }} />;
  }
}

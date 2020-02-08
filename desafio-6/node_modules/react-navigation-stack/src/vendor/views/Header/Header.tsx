import * as React from 'react';
import { Dimensions } from 'react-native';
import { StackActions } from 'react-navigation';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import HeaderSegment, { getDefaultHeaderHeight } from './HeaderSegment';
import { StackHeaderProps, StackHeaderTitleProps } from '../../types';
import HeaderTitle from './HeaderTitle';

const Header = React.memo(function Header(props: StackHeaderProps) {
  const {
    scene,
    previous,
    layout,
    insets,
    navigation,
    styleInterpolator,
  } = props;
  const { options } = scene.descriptor;
  const title =
    typeof options.headerTitle !== 'function' &&
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

  let leftLabel;

  // The label for the left back button shows the title of the previous screen
  // If a custom label is specified, we use it, otherwise use previous screen's title
  if (options.headerBackTitle !== undefined) {
    leftLabel = options.headerBackTitle;
  } else if (previous) {
    const o = previous.descriptor.options;

    leftLabel =
      typeof o.headerTitle !== 'function' && o.headerTitle !== undefined
        ? o.headerTitle
        : o.title !== undefined
        ? o.title
        : previous.route.routeName;
  }

  return (
    <HeaderSegment
      {...options}
      insets={insets}
      layout={layout}
      scene={scene}
      title={title}
      leftLabel={leftLabel}
      headerTitle={
        typeof options.headerTitle !== 'function'
          ? (props: StackHeaderTitleProps) => <HeaderTitle {...props} />
          : options.headerTitle
      }
      onGoBack={
        previous
        // @ts-ignore
          ? () => navigation.dispatch(StackActions.pop({ key: scene.route.key }))
          : undefined
      }
      styleInterpolator={styleInterpolator}
    />
  );
});

Object.defineProperty(Header, 'HEIGHT', {
  get() {
    console.warn(
      "Deprecation in 'createStackNavigator': 'Header.HEIGHT' will be removed in a future version. Use 'useHeaderHeight' or 'HeaderHeightContext' instead"
    );

    return getDefaultHeaderHeight(
      Dimensions.get('window'),
      getStatusBarHeight(true)
    );
  },
});

export default Header;

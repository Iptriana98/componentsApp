import React from 'react';
import {Text,View, ScrollView} from 'react-native';
import {globalStyles} from '../../../config/theme/Theme';
import { MenuItem } from '../../components/ui/MenuItem';

export const menuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },

  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },

  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={[globalStyles.globalMargin]}>
        <ScrollView style={{marginTop: 10}}>
          {/* <Title text="Menu Options" safe/> */}
          {menuItems.map( item => (
            <MenuItem key={item.component} name={item.name} icon={item.icon} component={item.component} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

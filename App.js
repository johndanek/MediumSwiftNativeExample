import React, { Component } from 'react';
import ReactNative, {
  Platform,
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  TouchableOpacity,
  UIManager
} from 'react-native';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <SwiftComponent
          width={360}
          height={180}
          myText={'Initial Value'}
          ref={(component) => this.mySwiftComponentInstance = component } />
        <TouchableOpacity onPress={this.onButtonClick.bind(this)}>
          <Text style={styles.button}>{'Update With Native Value'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onButtonClick(e) {
    UIManager.dispatchViewManagerCommand(
      ReactNative.findNodeHandle(this.mySwiftComponentInstance),
      UIManager.SwiftComponent.Commands.updateValueViaManager,
      []
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginTop: 50,
    width: 120,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F',
    backgroundColor: "#FFF"
  }
});

const SwiftComponent = requireNativeComponent('SwiftComponent');

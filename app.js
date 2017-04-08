import React from 'react'
import ReactNative, { Text } from 'react-native-web'

// Component that renders the app
const App = (props) => (
  <Text>Hello world.</Text>
)

ReactNative.render(<App />, document.getElementById('react-app'))

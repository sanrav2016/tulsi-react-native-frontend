import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#cccccc"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "95%",
          position: "absolute",
          bottom: 0
        }}
      >
        <WebView
          source={{ uri: 'https://34ac-69-113-81-186.ngrok-free.app' }}
        />
      </View>
    </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </QueryClientProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import ThemeProvider from '../shared/lib/theme/ThemeProvider';
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import AppRouter from './providers/router/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <MainLayout header={<Header />} footer={<Footer />}>
        <AppRouter />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;

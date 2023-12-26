import { DefaultLayout } from './pages/layout/DefaultLayout';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderComponent } from './hooks/ThemeProviderComponent';
import { Provider } from 'react-redux'
import './css/index.css'
import { store } from './app/store';

function App() {
  return (
    <ThemeProviderComponent>
      <BrowserRouter>
        <Provider store={store}>
          <DefaultLayout />
        </Provider>
      </BrowserRouter>
    </ThemeProviderComponent>
  )
}

export default App

// import route modules
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import files from asset to render tree view
import { files } from './assets/js/files';

// import store to use reducers
import { store } from './store';

// import bootstrap modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import redux-provider
import { Provider } from 'react-redux'

// import pages and components here
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';


function App() {

  // create new routes using create browser router
  const router = createBrowserRouter([
    {
      path: '/', element: <Navbar />, children: [
        {
          path: "/", element: <SideMenu files={files} />, children: [
            { index: true, element: <HomePage /> },
          ]
        },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/login", element: <LoginPage /> },
      ]
    }
  ])


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;

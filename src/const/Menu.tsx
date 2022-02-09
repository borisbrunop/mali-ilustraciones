import Home from '../routes/Home/Home';
import About from '../routes/About/About';
import Form from '../routes/Form/Form';
import Collection from '../routes/Collections/Collection'
import Gallery from '../routes/Gallery/Gallery';

export const PATHNAMES = {
    '/about': <About />,
    '/collections': <Collection />,
    '/': <Home />,
    // '/gallery': <Gallery />, 
    '/form': '',
}
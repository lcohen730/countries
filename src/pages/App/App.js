import DetailPage from '../DetailPage/DetailPage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';

export default function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </main>
    );
}
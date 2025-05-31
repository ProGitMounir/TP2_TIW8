
import GestureCanvas from '../components/GestureCanvas';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GesturePage: React.FC = () => {
  return (
    <>
        <Header />
        <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Page de Reconnaissance de Gestes</h1>
        <GestureCanvas />
        </div>
        <Footer />
    </>
  );
};

export default GesturePage;

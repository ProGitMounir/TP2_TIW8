import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from '../assets/carsbanners.jpeg';

// Page d'accueil
export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6 text-center">
        <img 
          src={Banner} 
          alt="car banner" 
          className="w-full h-auto rounded-lg shadow-md mb-6" 
        />
        <p className="text-lg text-gray-700">
          Bienvenue sur l'application de questions/réponses en temps réel.
        </p>
      </main>
      <Footer />
    </>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl">QApp</h1>
      <nav>
        <Link to="/" className="mr-4">Accueil</Link>
        <Link to="/participant" className="mr-4">Participant</Link>
        <Link to="/admin" className="mr-4">Admin</Link>
        <Link to="/geste" className="mr-4">Geste Detection</Link>
      </nav>
    </header>
  );
}
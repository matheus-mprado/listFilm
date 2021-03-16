import { useMovies } from "../Moviecontext"
import { Button } from "./Button";

import '../styles/sidebar.scss';

export function SideBar() {

  const {genres,selectedGenre,handleClickButton} = useMovies();

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.title}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
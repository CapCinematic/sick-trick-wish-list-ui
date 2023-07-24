import react from "react";
import { useState } from "react";

function MakeTricks({ onUpdate }){
  const [newTrick, setNewTrick] = useState({
    stance: '',
    name: name,
    obstacle: '',
    tutorial: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTrick(tricks => ({ ...tricks, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(newTrick);
    setNewTrick({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="stance">Stance:</label>
        <select id="stance" name="stance" value={newTrick.stance} onChange={handleChange}>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>
      </div>
      <div>
        <label className="name">Name:</label>
        <input type="text" id="name" name="name" value={newTrick.name} onChange={handleChange} />
      </div>
      <div>
        <label className="obstacle">Obstacle:</label>
        <select id="obstacle" name="obstacle" value={newTrick.obstacle} onChange={handleChange}>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
      </div>
      <div>
        <label className="tutorial">Tutorial:</label>
        <textarea id="tutorial" name="tutorial" value={newTrick.tutorial} onChange={handleChange} />
      </div>
      <button type="submit">SEND IT</button>
    </form>
  );
}


export default MakeTricks
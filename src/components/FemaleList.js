import "./FemaleList.css";

function FemaleList({ event, locale, femaleChampion, femaleVice }) {
  return (
    <div className="events">
      <h3>{event}</h3>
      <h4>{locale}</h4>
      <p>1st {femaleChampion}</p>
      <p>2nd {femaleVice}</p>
    </div>
  );
}

export default FemaleList;

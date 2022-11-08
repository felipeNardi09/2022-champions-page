function MaleList({ event, locale, maleChampion, maleVice }) {
  return (
    <div className="events">
      <h3>{event}</h3>
      <h4>{locale}</h4>
      <p>1st {maleChampion}</p>
      <p>2nd {maleVice}</p>
    </div>
  );
}

export default MaleList;

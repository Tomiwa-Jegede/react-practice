import react from './assets/react.svg'
function Card(){
return(
  <div className="card">
    <img src={react} alt="Profile Picture" className="card-image"></img>
    <h2 className="card-title">Tomiwa</h2>
    <p className="class-text">I am student at the redeemer university</p>
  </div>
)
};
export default Card;
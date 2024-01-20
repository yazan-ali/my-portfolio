import "./page-background.scss";

export default function PageBG() {
  return (
    <div className="page-bg">
      {Array.from({ length: 15 }).map(i => (
        <div className="bubble"><span className="bubble__dot"></span></div>
      ))}
    </div>
  )
}

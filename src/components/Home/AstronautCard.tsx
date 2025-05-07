export default function AstronautCard({
  title,
  img,
  imgAlt,
  text,
}: {
  title: String;
  img: string;
  imgAlt: string;
  text: String;
}) {
  return (
    <li className="card">
      <h4>
        <b>{title}</b>
      </h4>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </li>
  );
}

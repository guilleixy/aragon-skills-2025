export default function ContestantsLi({
  emoji,
  text,
}: {
  emoji: string;
  text: string;
}) {
  return (
    <li className="point-li">
      <span className="point-emoji">{emoji}</span> {text}
    </li>
  );
}

import "./example.css";
export default function Example() {
  return (
    <div className="parent-element">
      <div className="sibling-element">I'm above Hello World! </div>
      <div className="main-element">Hello, world!</div>
      <div className="sibling-element">I'm below Hello World! </div>
    </div>
  );
}

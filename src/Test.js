import "./Test.scss";
import $ from "jquery";

function Test(props) {
  console.log(props.src);
  $("div").css("color", "skyblue");
  return (
    <div className="banner">
      김경우바보
      <img src={props.b} />
    </div>
  );
}
export default Test;

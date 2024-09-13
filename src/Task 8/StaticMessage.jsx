import { memo } from "react";
// Static child component wrapped with React.memo
const StaticMessage = memo(() => {
    console.log("StaticMessage component rendered");
    return <p>Hello, World!</p>;
});
  export default memo(StaticMessage)
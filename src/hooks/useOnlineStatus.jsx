import React from "react";

export const useOnlineStatus = () => {
  const [online, setOnline] = React.useState(navigator.onLine);
  const [firstEnter, setFirstEnter] = React.useState(false)

  React.useEffect(() => {
    function updateOnlineStatus() {
      setOnline(navigator.onLine);
    }
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);
  
  React.useEffect(()=>{
    if(!online){
      setFirstEnter(true)
    }
  }, [online])
  return {online, firstEnter};
}

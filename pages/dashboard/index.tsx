import React, { useState } from "react";
import DashLayout from "../../components/dashLayout";
import DashNavigation from "../../components/dashNavigation";
import Dash from "../../components/dash";
import Settings from "../../components/settings";
import Create from "../../components/create";
import axios from "axios";

const Dashboard: React.FunctionComponent = () => {
  const [selected, setSelected] = useState("Dashboard");

  const handleContent = () => {
    switch (selected) {
      case "Settings":
        return <Settings />;
      case "Create Label":
        return <Create />;
      default:
        return <Dash labels={[]} />;
    }
  };

  return (
    <DashLayout>
      <DashNavigation selected={selected} handleSelect={setSelected} />
      {handleContent()}
    </DashLayout>
  );
};

export default Dashboard;

import React, { useState } from "react";
import DashLayout from "../../components/dashLayout";
import DashNavigation from "../../components/dashNavigation";
import Dash from "../../components/dash";
import Settings from "../../components/settings";
import Create from "../../components/create";
import axios from "axios";
import { GetServerSideProps } from "next";
import withSession from "../../util/session";
import { getUserLabels } from "../../db/crud";

interface DashboardProps {
  user: any;
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({
  user,
}: DashboardProps) => {
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

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ req, res }) => {
    const user = req.session.get("FoodLabel");
    const labels = await getUserLabels(user);
    if (user === undefined) {
      return { props: {} };
    }

    return {
      props: { user: req.session.get("FoodLabel"), labels: labels },
    };
  }
);

export default Dashboard;

import React from "react";
import { useHistory } from "react-router";
import { Card, Button, Typography } from "antd";
const { Title } = Typography;

const ResultCard = ({ result }) => {
  const history = useHistory();

  const handleDetailedProfile = (username) => {
    history.push(`/profile/${username}`);
  };

  return (
    <Card
      hoverable
      cover={
        <img className="result-img" alt="example" src={result.avatar_url} />
      }
    >
      <Title level={5}>{result.login}</Title>
      <Button
        style={{
          color: "#20c162",
          borderColor: "#20c162",
          backgroundColor: "transparent",
        }}
        block
        onClick={() => handleDetailedProfile(result.login)}
      >
        View Detailed Profile
      </Button>
    </Card>
  );
};

export default ResultCard;

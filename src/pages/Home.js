import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Input, Typography } from "antd";
import { BsMoonStarsFill, BsAt } from "react-icons/bs";
import { VscGithub } from 'react-icons/vsc';
import { Fade } from "react-awesome-reveal";
import { AppShell, ActionIcon, useMantineColorScheme, Container, Space, MediaQuery, Group, Text, TextInput, useMantineTheme } from '@mantine/core';

const { Search } = Input;
const { Title } = Typography;

const Home = () => {
  const history = useHistory();


  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const [keyword, setKeyword] = useState();

  const searchHandler = (event) => {

    console.log(event)
    if (event.key == 'Enter') {
      history.push(`/search/${keyword}`);
      // if (!keyword) {
      // } else {
      //   history.push(`/search/${keyword}`);
      // }

    }
  };

  return (
    <>
      <Container sx={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', height: '5vh' }} fluid>
        <Text size='md' weight={500}>57 / 60 Requests</Text>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? (
            <BsMoonStarsFill />
          ) : (
            <BsMoonStarsFill />
          )}
        </ActionIcon>

      </Container>
      <Container sx={{ maxWidth: 'none', height: '90vh', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <VscGithub size='30' />
        <Space h="sm" />
        <Text sx={{ fontSize: "2.2rem" }} weight={700}>Github Search</Text>
        <Space h="sm" />
        <TextInput
          onChange={(e) => console.log(e.target.value)}
          onKeyPress={(e) => searchHandler(e)}
          icon={<BsAt />}
          radius='md'
          size='md'
          sx={{ width: '40%', }}
          placeholder="Your github username"
        />
      </Container>

    </>
    // <Fade direction={"left"}>
    //   <div className="search-page">
    //     <div className="search-container">
    //       <Row justify="center">
    //         <Title>
    //           <GithubOutlined /> {"     "}Github Search
    //         </Title>{" "}
    //       </Row>

    //       <Row justify="center">
    //         <Col xl={10} lg={10} md={16} sm={20} xs={20}>
    //           {/* <Search
    //             onChange={(e) => setKeyword(e.target.value)}
    //             size="large"
    //             placeholder="Search for a Github user"
    //             onSearch={searchHandler}
    //           /> */}
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </Fade>
  );
};

export default Home;

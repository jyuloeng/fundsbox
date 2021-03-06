import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import Space from "@components/Space";
import IndexCard from "@components/IndexCard";
import BoardCard from "@components/BoardCard";
import TradingTotal from "@components/TradingTotal";
import IndexScroller from "@/components/IndexScroller";
import Introduction from "./components/Introduction";

import { CaptionText, MediumText } from "@/styles/typography";

import { GetComponentProps } from "@utils/index";

const indexList: GetComponentProps<typeof IndexCard>[] = [
  {
    logo: "π",
    title: "δΈθ―ζζ°",
    code: "sh000001",
    currentIndex: 3511.97,
    indexChange: 34.84,
    percentChange: 1.0,
    lastUpdatedTime: Date.now(),
  },
  {
    logo: "π",
    title: "ζ²ͺζ·±300",
    code: "sz399300",
    currentIndex: 4900.71,
    indexChange: 64.83,
    percentChange: 1.34,
    lastUpdatedTime: Date.now(),
  },
  {
    type: "fell",
    logo: "π­",
    title: "εδΈζΏζ",
    code: "sz399006",
    currentIndex: 3342.38,
    indexChange: 48.61,
    percentChange: 1.48,
    lastUpdatedTime: Date.now(),
  },
  {
    logo: "π",
    title: "ζ²ͺζ·±300",
    code: "sh1b0300",
    currentIndex: 5013.52,
    indexChange: 43.51,
    percentChange: 0.88,
    lastUpdatedTime: Date.now(),
  },
  {
    logo: "π",
    title: "δΈθ―50",
    code: "sh1b0016",
    currentIndex: 3252.52,
    indexChange: 48.05,
    percentChange: 1.5,
    lastUpdatedTime: Date.now(),
  },
  {
    type: "fell",
    logo: "ποΈ",
    title: "δΈ­θ―500",
    code: "sh1b0905",
    currentIndex: 7607.67,
    indexChange: -9.78,
    percentChange: 0.13,
    lastUpdatedTime: Date.now(),
  },
  {
    logo: "π",
    title: "δΈθ―5000",
    code: "sh1b001",
    currentIndex: 3252.52,
    indexChange: 48.05,
    percentChange: 1.5,
    lastUpdatedTime: Date.now(),
  },
  {
    type: "fell",
    logo: "ποΈ",
    title: "δΈ­θ―5000",
    code: "sh1b090",
    currentIndex: 7607.67,
    indexChange: -9.78,
    percentChange: 0.13,
    lastUpdatedTime: Date.now(),
  },
];

const boradList: GetComponentProps<typeof BoardCard>[] = [
  {
    title: "ιΏιθ‘δΈ",
    amountChange: "2463000000",
    percentChange: 5.9,
  },
  {
    title: "ζθ²ιε±",
    amountChange: "2229000000",
    percentChange: 2.32,
  },
  {
    title: "ζζθ‘δΈ",
    amountChange: "2041000000",
    percentChange: 2.71,
  },
  {
    title: "εΈεδΏ‘ζ",
    amountChange: "1855000000",
    percentChange: 3.08,
  },
];

const boradList2: GetComponentProps<typeof BoardCard>[] = [
  {
    type: "fell",
    title: "ζΊζ’°θ‘δΈ",
    amountChange: "5874000000",
    percentChange: 6.81,
  },
  {
    type: "fell",
    title: "η΅ε­εδ»Ά",
    amountChange: "3790000000",
    percentChange: 2.63,
  },
  {
    type: "fell",
    title: "εε·₯θ‘δΈ",
    amountChange: "2255000000",
    percentChange: 2.07,
  },
  {
    type: "fell",
    title: "θΎιη΅ζ°",
    amountChange: "195000000",
    percentChange: 3.28,
  },
];

const getRandomNumber = () => {
  return Math.random() * 2 - 1;
};

function App() {
  const [list, setList] = useState(indexList);

  useEffect(() => {
    const timer = setInterval(() => {
      const newList = list.map((item) => {
        const newItem = { ...item };
        const randomNumber = getRandomNumber();
        const oldIndex = item.currentIndex;
        const newIndex = item.currentIndex + randomNumber;

        if (oldIndex > newIndex) {
          newItem.type = "fell";
        } else {
          newItem.type = "rise";
        }

        newItem.currentIndex = newIndex;
        newItem.indexChange += randomNumber;

        return newItem;
      });
      setList(newList);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [list]);

  return (
    <Container>
      <Title>
        δΈδΈͺζΉδΎΏ <Leek>ι­θ</Leek> πζ°ε¨ WEB θ§ηεΊιθ΅°εΏηι«ι’εΌη½η«
      </Title>

      <Introduction />

      {/* <Space gap={24}>
        <Button onClick={handleToggleTheme}>εζ’δΈ»ι’</Button>
        ε½εδΈ»ι’:{themeType}
      </Space> */}

      <SearchContainer>Search</SearchContainer>

      <TradingTotalContainer>
        <TradingTotal
          amountTotal="1408319000000"
          riseTotal={2432}
          unchangeTotal={203}
          fellTotal={1903}
        />
      </TradingTotalContainer>

      <IndexScroller total={Math.ceil(list.length / 3)}>
        {list.map((item) => (
          <IndexScroller.Card key={item.code} {...item} />
        ))}
      </IndexScroller>

      <RiseBoardsContainer>
        <BoardsTitle bold>δΈ»εθΏεΊζΏε π</BoardsTitle>
        <Space gap={24}>
          {boradList.map((prop) => (
            <BoardCard key={prop.title} {...prop} />
          ))}
        </Space>
      </RiseBoardsContainer>

      <FellBoardsContainer>
        <BoardsTitle bold>δΈ»εθ·θ·―ζΏε π­</BoardsTitle>
        <Space gap={24}>
          {boradList2.map((prop) => (
            <BoardCard key={prop.title} {...prop} />
          ))}
        </Space>
        <ShowInfo>
          <MediumText>ζ₯ηθ―¦ζ</MediumText>
        </ShowInfo>
      </FellBoardsContainer>
    </Container>
  );
}

export default App;

const ShowInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  & span {
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 1048px;
  margin-left: auto;
  margin-right: auto;
`;

const BoardsTitle = styled(CaptionText)`
  margin-left: 16px;
  margin-bottom: 20px;
`;

const RiseBoardsContainer = styled(Content)`
  margin-top: 40px;
  margin-bottom: 52px;
`;

const FellBoardsContainer = styled(Content)`
  padding-bottom: 16px;
`;

const TradingTotalContainer = styled(Content)`
  margin-bottom: 16px;
  padding: 0 64px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 100px;
`;

const Leek = styled.span`
  color: ${({ theme }) => theme.colors.success};
  text-decoration: line-through;
`;

const Title = styled.p`
  width: 668px;
  margin: 92px auto 52px;
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const Container = styled.div`
  min-height: 100vh;
`;

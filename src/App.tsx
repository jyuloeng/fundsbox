import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import Space from "./components/Space";
import IndexCard from "./components/IndexCard";
import BoardCard from "./components/BoardCard";
import TradingTotal from "./components/TradingTotal";
import Indicator from "./components/Indicator";

import { useTheme } from "./context/ThemeContext";

import { GetComponentProps } from "./utils";

const indexList: GetComponentProps<typeof IndexCard>[] = [
  {
    logo: "😈",
    title: "上证指数",
    code: "sh000001",
    currentIndex: 3511.97,
    indexChange: 34.84,
    percentChange: 1.0,
    lastUpdatedTime: Date.now(),
  },
  {
    logo: "😄",
    title: "沪深300",
    code: "sz399300",
    currentIndex: 4900.71,
    indexChange: 64.83,
    percentChange: 1.34,
    lastUpdatedTime: Date.now(),
  },
  {
    type: "fell",
    logo: "😭",
    title: "创业板指",
    code: "sz399006",
    currentIndex: 3342.38,
    indexChange: 48.61,
    percentChange: 1.48,
    lastUpdatedTime: Date.now(),
  },
];

const boradList: GetComponentProps<typeof BoardCard>[] = [
  {
    title: "酿酒行业",
    amountChange: "2463000000",
    percentChange: 5.9,
  },
  {
    title: "有色金属",
    amountChange: "2229000000",
    percentChange: 2.32,
  },
  {
    title: "材料行业",
    amountChange: "2041000000",
    percentChange: 2.71,
  },
  {
    title: "券商信托",
    amountChange: "1855000000",
    percentChange: 3.08,
  },
];

const boradList2: GetComponentProps<typeof BoardCard>[] = [
  {
    type: "fell",
    title: "机械行业",
    amountChange: "5874000000",
    percentChange: 6.81,
  },
  {
    type: "fell",
    title: "电子元件",
    amountChange: "3790000000",
    percentChange: 2.63,
  },
  {
    type: "fell",
    title: "化工行业",
    amountChange: "2255000000",
    percentChange: 2.07,
  },
  {
    type: "fell",
    title: "输配电气",
    amountChange: "195000000",
    percentChange: 3.28,
  },
];

const getRandomNumber = () => {
  return Math.random() * 2 - 1;
};

function App() {
  const { themeType, setThemeType } = useTheme();

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
  }, []);

  const handleToggleTheme = () => {
    if (themeType === "light") {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  };

  const [indicatorIndex, setIndicatorIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setIndicatorIndex(index);
  };

  return (
    <Container>
      <Space gap={24}>
        <Button onClick={handleToggleTheme}>切换主题</Button>
        当前主题:{themeType}
      </Space>

      <TradingTotal
        amountTotal="1408319000000"
        riseTotal={2432}
        unchangeTotal={203}
        fellTotal={1903}
      />

      <Space gap={24}>
        {list.map((prop) => (
          <IndexCard key={prop.code} {...prop} />
        ))}
      </Space>

      <Indicator
        activeIndex={indicatorIndex}
        total={3}
        onDotClick={handleIndicatorClick}
      />

      <Space gap={24}>
        {boradList.map((prop) => (
          <BoardCard key={prop.title} {...prop} />
        ))}
      </Space>

      <Space gap={24}>
        {boradList2.map((prop) => (
          <BoardCard key={prop.title} {...prop} />
        ))}
      </Space>
    </Container>
  );
}

export default App;

const Button = styled.button``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background2};
`;

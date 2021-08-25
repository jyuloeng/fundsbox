import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import Space from "./components/Space";
import IndexCard from "./components/IndexCard";

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
  }, []);

  return (
    <Container>
      <Space gap={24}>
        {list.map((prop) => (
          <IndexCard key={prop.code} {...prop} />
        ))}
      </Space>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

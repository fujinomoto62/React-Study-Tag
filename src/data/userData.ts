import {User} from '../types/userType'


const data: User[] = [
  {
    id: 1,
    name: "山田",
    gender: "男性",
    grade:"B1",
    belong:"EE",
    tag:["power", "programming", "engineering"]
  },
  {
    id: 2,
    name: "田中",
    gender: "女性",
    grade:"B3",
    belong:"AR",
    tag:[]
  },
  {
    id: 3,
    name: "佐藤",
    gender: "女性",
    grade:"B4",
    belong:"BS",
    tag:["programming"]
  },
  {
    id: 4,
    name: "高橋",
    gender: "男性",
    grade:"B2",
    belong:"CA",
    tag:["power", "chemistry"]
  },
  {
    id: 5,
    name: "田中",
    gender: "男性",
    grade:"B1",
    belong:"CU",
    tag:["engineering"]
  },
  {
    id: 6,
    name: "伊藤",
    gender: "女性",
    grade:"M1",
    belong:"EE",
    tag:["programming", "engineering"]
  },
  {
    id: 7,
    name: "渡辺",
    gender: "男性",
    grade:"M2",
    belong:"IS",
    tag:["power"]
  },
  {
    id: 8,
    name: "山本",
    gender: "男性",
    grade:"M2",
    belong:"PH",
    tag:["power", "physics"]
  },
  {
    id: 9,
    name: "佐藤",
    gender: "女性",
    grade:"M1",
    belong:"BS",
    tag:["circuit"]
  },
  {
    id: 10,
    name: "鈴木",
    gender: "男性",
    grade:"B3",
    belong:"AR",
    tag:[]
  },
  {
    id: 11,
    name: "田中",
    gender: "男性",
    grade:"B2",
    belong:"CA",
    tag:["chemistry"]
  },
  {
    id: 12,
    name: "佐藤",
    gender: "女性",
    grade:"B2",
    belong:"CU",
    tag:["engineering"]
  },
  {
    id: 13,
    name: "小林",
    gender: "女性",
    grade:"B3",
    belong:"EE",
    tag:["programming", "circuit"]
  },
  {
    id: 14,
    name: "山口",
    gender: "男性",
    grade:"B1",
    belong:"IS",
    tag:["power"]
  },
  {
    id: 15,
    name: "山本",
    gender: "男性",
    grade:"B1",
    belong:"PH",
    tag:[]
  },
  {
    id: 16,
    name: "吉田",
    gender: "女性",
    grade:"B4",
    belong:"BS",
    tag:["engineering"]
  },
  {
    id: 17,
    name: "前田",
    gender: "男性",
    grade:"B4",
    belong:"EE",
    tag:["engineering", "circuit"]
  },
]

export const userData = () => {
  return data.slice();
}

export const slicedData = (len: number = 0) => {
  return data.slice(0, len + 5);
}

export const searchUser = (id: number) => {
  return data.find(user => user.id === id)
}
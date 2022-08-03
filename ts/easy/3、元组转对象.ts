const tuple = ["tesla", "model 3", "model X", "model Y"] as const

type TupleToObject<raw extends readonly any[]> = {
  // 遍历raw里的number类型即可
  [P in raw[number]] : P
}

type result = TupleToObject<typeof tuple> 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
